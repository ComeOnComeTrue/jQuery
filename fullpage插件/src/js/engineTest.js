pageEngine.init('.box',['red','yellow','blue'])
    .addSection('oneSection')
        .addComponent(
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
        )
        .addComponent(
            {
                type: 'base',
                className: 'aa',
                width: 300,
                height: 200,
                text: '加油加油加油加油加油加油加油、、、加油、加油、加油、加油、加油、加油、加油、加油、加油、加油、',
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    bottom: 0,
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
                    bottom: 120
                },
                animateOut: { //出场
                    opacity: 0,
                    bottom: 0
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
        )
    .addSection('twoSection')
        .addComponent(
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
        )
    .addSection('shreeSection')
        .addSlide('3-slide-1')
            .addComponent(
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
            )        
        .addSlide('3-slide-2')
            .addComponent(
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
            ) 
        .addSlide('3-slide-3')
            .addComponent(
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
                })
        .load() // 执行 