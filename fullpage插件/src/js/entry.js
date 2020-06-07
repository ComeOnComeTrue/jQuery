$('.wrapper').myFullPage({
    colorsArray: ['red', 'blue', 'yellow'],

    onLeave: function (index, direction) {
        //离开的
        $('.section').eq(index).trigger('_leave');
    },
    afterLoad: function (index, direction) {
        //当前的
        $('.section').eq(index).trigger('_load');
    }

});

// 生成 section 里面的内容 //只能一个一个生成标签，所以封装一个函数componentBase
// function ComponentFactory () {
//     var $Div = $('<div class="component" style="display: none; text-align: center; font-size: 30px"><span></span></div>');
//     $Div.find('span').text('duyi');

//     $Div.on('cpLeave',function () {
//         $(this).fadeOut();
//     })
//     $Div.on('cpLoad',function () {
//         $(this).fadeIn();
//     })

//     return $Div;
// }

$('.section').each(function (index, ele) {
    $(ele).append(ComponentFactory(
        {
            type: 'base',
            className: 'aa',
            width: 522,
            height: 336,
            text: '加油加油加油加油加油加油加油、、、加油、加油、加油、加油、加油、加油、加油、加油、加油、加油、',
            center: true,
            css: {
                position: 'absolute',
                opacity: 0,
                top: 0,
                backgroundImage: 'url(./src/img/1.png)',
                backgroundSize:'100% 100%',
                padding: '10px 15px 10px 15px',
                textAlign: 'justify',
                fontSize: '18px',
                fontWeight: '900',
                lineHeight: '25px'
            },
            animateIn: { //入场
                opacity: 1,
                top: 240
            },
            animateOut: { //出场
                opacity: 0,
                top: 0
            },
            delay: 1000, // 延迟多少毫秒
            event: { 
                click: function () {
                    alert($(this).text()) 
                }, 
                mouseenter: function () { 

                } 
            }
        }
    ));
});

$('.section').on('_leave', function () {
    $(this).find('.component').trigger('cpLeave');//触发自定义
});

$('.section').on('_load', function () {
    $(this).find('.component').trigger('cpLoad');//触发自定义
});
