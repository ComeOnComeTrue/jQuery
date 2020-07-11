(function () {
    var imgWidth = $('.wrapper ul li').width();
    var nowIndex = 0;
    var lock = false;
    var imgNum = $('.wrapper ul li').length - 1; // 图个数
    var timer = null;

    //初始化 执行函数
    function init() {
        bindEvent();
        autoMove();
        move();
        changeIndex();
    }

    function bindEvent() {
        // 移入移出
        $('.wrapper').hover(function () {
            $('.wrapper .btn').show(); // 显示
            clearInterval(timer);//移入 删除时间函数
        }, function () {
            $('.wrapper .btn').hide(); // 隐藏
            autoMove();
        });
        // 点击按钮
        $('.wrapper').on('click', '.btn', function (e) {
            // e.targer
            if ($(this).hasClass('left-btn')) {//看有没有
                move('prev');
            } else if ($(this).hasClass('right-btn')) {
                move('next');
            }
        });

        $('.wrapper > .pointer').on('mouseenter', '.dot', function () {
            move($(this).index());//获取索引
        })
    }

    // dir 运动方向 prev向前一张 next向后移动一张
    function move(dir) {
        if (lock) {
            return false;
        }

        if (dir == 'prev') {
            lock = true;
            if (nowIndex == 0) {
                nowIndex = imgNum;
                $('.wrapper > ul').css('left', -nowIndex * imgWidth);
            }
            nowIndex--;
            $('.wrapper ul').animate({
                'left': -nowIndex * imgWidth
            }, 1000, function () {
                changeIndex();
                lock = false;
            });
        } else if (dir == 'next') {
            lock = true;
            if (nowIndex == imgNum) {
                nowIndex = 0;

                $('.wrapper > ul').css('left', -nowIndex * imgWidth);
            }
            nowIndex++;

            $('.wrapper ul').animate({
                'left': -nowIndex * imgWidth
            }, 1000, function () {
                changeIndex();
                lock = false;
            });
        } else if (typeof dir == 'number') { // 点击红点 换图 
            lock = true;
            nowIndex = dir;
            $('.wrapper ul').animate({
                'left': -nowIndex * imgWidth
            }, 300, function () {
                changeIndex();
                lock = false;
            });
        }
    }
    function changeIndex() {
        // 加红点 小红点展示
        //全部为白色
        $('.wrapper > .pointer > .dot').css({ backgroundColor: 'rgba(255,255,255,.8)', width: 8, height: 8 ,border: '2px solid transparent'});
        if (nowIndex == imgNum) {
            //第一个为红
            $('.wrapper > .pointer > .dot').eq(0).css({ backgroundColor: 'red', width: 10, height: 10,border: '2px solid rgba(0, 0, 0, .2)' });
        } else {
            //对应为红
            $('.wrapper > .pointer > .dot').eq(nowIndex).css({ backgroundColor: 'red', width: 10, height: 10,border: '2px solid rgba(0, 0, 0, .2)' });
        }
    }
    function autoMove() {
        timer = setInterval(function () {
            move('next'); // left-right
        }, 1000)
    }

    init();

}())
