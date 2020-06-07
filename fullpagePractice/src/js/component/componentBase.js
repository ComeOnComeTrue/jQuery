// 假如传入参数形式是这样
// {
//     type: 'base',
//     className: 'aa',
//     width: 522,
//     height: 336,
//     text: '加油加油加油加油加油加油加油、、、',
//     center: true,
//     css: {
//         position: 'absolute',
//         opacity: 0,
//         top: 0,
//         backgroundImage: 'url(./src/img/1.png)',
//         backgroundSize:'100% 100%',
//         padding: '10px 15px 10px 15px',
//         textAlign: 'justify',
//         fontSize: '18px',
//         fontWeight: '900',
//         lineHeight: '25px'
//     },
//     animateIn: { //入场
//         opacity: 1,
//         top: 240
//     },
//     animateOut: { //出场
//         opacity: 0,
//         top: 0
//     },
//     delay: 1000, // 延迟多少毫秒
//     event: { 
//         click: function () {
//             alert($(this).text()) 
//         }, 
//         mouseenter: function () { 
//         } 
//     }
// }

// 
var ComponentFactory = function (config) {
    var $Div = $('<div class="component base"></div>');
    // config 定制化 $Div
    config.className && $Div.addClass(config.className);//如果您有 $Div的对应参数里就等于你
    config.width && $Div.css('width',config.width);
    config.height && $Div.css('height',config.height);
    config.text && $Div.text(config.text);
    config.center && $Div.css({position: 'absolute', left: '50%', marginLeft: -config.width / 2});
    config.css && $Div.css(config.css);
    if (config.event) { // 可多个事件
        for(var prop in config.event){
            $Div.on(prop, config.event[prop])
        }
    }

    $Div.on('cpLeave', function () { // 离开的  出场
        var self = this;
        setTimeout(function () {
            config.animateOut && $(self).animate( config.animateOut ); //动画渲染
        },config.delay || 0)
    });
    $Div.on('cpLoad', function () {// 当前看到的 入场
        var self = this;
        setTimeout(function () {
            config.animateIn && $(self).animate( config.animateIn );// 动画渲染
        },config.delay || 0)
    });

    return $Div;
}