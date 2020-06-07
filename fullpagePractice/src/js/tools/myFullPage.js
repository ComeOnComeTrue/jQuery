//渲染页面-》水平垂直移动-》得到onLeave和afterLoad函数的实参（index,移动位置）
// 实例方法
$.fn.extend({
    myFullPage: function (config) {
        // config.colorsArray
        // 初始化变量
        var colorsArray = config.colorsArray;//参数：colorsArray : ['red', 'blue', 'yellow']
        var $W = $(this);
        var $Section = $W.find('.section');
        var commonStyle = {
            width: '100%',
            height: '100%',
        }
        var clientWidth = $(window).outerWidth();
        var clientHeight = $(window).outerHeight();
        // 索引 0 -》第一个
        var curIndex = 0;
        // 锁 到达目标之后才开锁
        var lock = true;
        // 初始化样式

        $('html')
            .add('body')
            .css({
                position: 'relative',
                overflow: 'hidden',
                margin: 0
            })
            .add($W)
            .add($Section)
            .css(commonStyle)

        $W.css({ position: 'absolute', left: 0, top: 0 })
            .find('.section')
            .each(function (index, ele) {
                $(ele).css({
                    backgroundColor: colorsArray[index],
                    position: 'relative'
                }).find('.slide')
                    .css({ float: 'left', backgroundColor: colorsArray[index],width: clientWidth, height: clientHeight, position: 'relative'})
                    .wrapAll('<div class="sliderWrapper"></div>')  //把slide全部添加共用一个父级
            })

        $Section.find('.sliderWrapper').each(function (index, ele) {
            // $(ele).css({width: $(ele).find('.slide').size() * clientWidth,})size()不可以，以前可以
            $(ele).css({ width: $(ele).find('.slide').length * clientWidth, height: clientHeight })
        });

        // js控制移动
        // active
        // 先给第一个section active
        // 给每一个section 下面的第一个slide innerActive
        $Section.eq(0)
            .addClass('active')
            .end().find('.sliderWrapper').each(function (index, ele) {
                $(ele).find('.slide').eq(0).addClass('innerActive')
            });

        // 控制移动
        $(document).on('keydown', function (e) {
            // e.which
            // left 37 top 38 right 39 bottom 40
            if (e.which == 38 || e.which == 40) {
                //垂直移动 $W
                if (lock) {
                    lock = false;
                    var newTop = $W.offset().top; //当前文档定位值
                    var direction = '';
                    if (e.which == 38 && curIndex != 0) {
                        // top 
                        direction = 'top';
                        config.onLeave(curIndex,direction);//当前的索引
                        curIndex--;
                        newTop += clientHeight;
                    } else if (e.which == 40 && curIndex != $Section.length - 1) {//不可以 $Section.size()
                        // bottom
                        direction = 'bottom';
                        config.onLeave(curIndex,direction);
                        curIndex++;
                        newTop -= clientHeight;
                    }
                    $W.animate({ //动画渲染
                        top: newTop

                    }, 350, 'swing', function () {
                        lock = true;
                        $Section.eq(curIndex).addClass('active');//加上类名
                        if (direction == 'top') {
                            $Section.eq(curIndex + 1).removeClass('active');
                        } else {
                            $Section.eq(curIndex - 1).removeClass('active');
                        }
                        config.afterLoad(curIndex,direction);//得到实参索引和位置
                    });
                }
            }

            if (lock) {
                lock = false;
                // 水平移动 .active .sliderWrapper
                var $SW = $('.active').find('.sliderWrapper');
                var curShowDom = $SW.find('.innerActive')
                var newLeft = $W.offset().left; //当前文档定位值
                var direction = '';
                
                if (e.which == 37 && curShowDom.index() != 0) {
                    // left 
                    newLeft += clientWidth;
                    direction = 'lfte';

                } else if (e.which == 39 && curShowDom.index() != $SW.find('.slide').length - 1) {//不可以 $Section.size()
                    // right
                    console.log($SW.offset().left)
                    newLeft -= clientWidth;
                    direction = 'right';

                }
                $W.animate({ //动画渲染
                    left: newLeft

                }, 350, 'swing', function () {
                    lock = true;
                    direction != null ? curShowDom.removeClass('innerActive') : '';
                    if (direction == 'lfte') {
                        curShowDom.prev().addClass('innerActive');
                    } else {
                        curShowDom.next().addClass('innerActive');
                    }            
                });
            }
        })
    }
});