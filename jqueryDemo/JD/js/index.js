//input框
$('.header .w .search').inputSearch({
    key: 'callback',//cd
    jsonpCallback: 'dealData',
    url: 'https://suggest.taobao.com/sug?',
    type: 'GET',
    inputWidth: 550,
    height: 32,
    fontSize: 20,
    dataName: 'q',
});
// 左侧菜单栏
data = [
    {
        "name": "家用电器",
        "href": "#",
        "detail": [
            {
                "title": "电视",
                "items": [
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    }]
            },
            {
                "title": "空调",
                "items": [
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    },
                    {
                        "name": "曲面电视",
                        "href": "#"
                    }
                ]
            },
        ]
    }, {
        "name": "电器",
        "href": "#",
        "detail": [{
            "title": "吹风机",
            "items": [
                {
                    "name": "曲面电视",
                    "href": "#"
                },
                {
                    "name": "曲面电视",
                    "href": "#"
                },
                {
                    "name": "曲面电视",
                    "href": "#"
                }
            ]
        }
        ]
    }
    ,
    {
        "name": "电器",
        "href": "#",
        "detail": [{
            "title": "风机",
            "items": [
                {
                    "name": "曲面电视",
                    "href": "#"
                },
                {
                    "name": "曲面电视",
                    "href": "#"
                },
                {
                    "name": "曲面电视",
                    "href": "#"
                }
            ]
        }
        ]
    },

    {
        "name": "电脑",
        "href": "#",
        "detail": [{
            "title": "吹",
            "items": [
                {
                    "name": "曲面电视",
                    "href": "#"
                },
                {
                    "name": "曲面电视",
                    "href": "#"
                },
                {
                    "name": "曲面电视",
                    "href": "#"
                }
            ]
        }
        ]
    },
    {
        "name": "，，，，",
        "href": "#",
        "detail": [{
            "title": "吹风",
            "items": [
                {
                    "name": "曲面电视",
                    "href": "#"
                },
                {
                    "name": "曲面电视",
                    "href": "#"
                },
                {
                    "name": "曲面电视",
                    "href": "#"
                }
            ]
        }
        ]
    },
    {
        "name": "。。。。。",
        "href": "#",
        "detail": [{
            "title": "吹风机",
            "items": [
                {
                    "name": "曲面电视",
                    "href": "#"
                },
                {
                    "name": "曲面电视",
                    "href": "#"
                },
                {
                    "name": "曲面电视",
                    "href": "#"
                }
            ]
        }
        ]
    },
]

$('.fs .fs_content .fs_col1').menu({
    data: data,
})
//轮播图
$('.fs .fs_content .fs_col2').swiper({
    images:['https://img12.360buyimg.com/pop/s590x470_jfs/t1/97234/8/8501/101230/5e047187E7cc25cb7/abb79244e8d81782.jpg.webp',
    'https://img30.360buyimg.com/babel/s590x470_jfs/t1/107724/32/7040/95641/5e56288dEe6c839ab/30a947c5c5672993.jpg.webp',
    'https://img12.360buyimg.com/pop/s590x470_jfs/t1/97234/8/8501/101230/5e047187E7cc25cb7/abb79244e8d81782.jpg.webp',
    'https://img30.360buyimg.com/babel/s590x470_jfs/t1/107724/32/7040/95641/5e56288dEe6c839ab/30a947c5c5672993.jpg.webp',
    'https://img12.360buyimg.com/pop/s590x470_jfs/t1/97234/8/8501/101230/5e047187E7cc25cb7/abb79244e8d81782.jpg.webp',
    ],
    width: 590,
    height: 470,
    direction: 'next',
    autoTimer: 3000,
})
//新人福利
$('.J_user .user_profit .user_profit_l').hover(function () {
    $(this).css({
        backgroundColor:'orange',
    });
},function () {
    $(this).css({
        backgroundColor:'#e1251b',
    });
});

//话费hover
$('.service_entry').on('mouseenter','.row1', function () {
    console.log(this.id) 
    if(this.id == 'huafei'){
        $('.service_entry').slideUp();  //静态的卷出
        $('.services_content').slideDown(); // 
        $('.' + this.id + '_content').slideDown(); // 得到话费内容
    }
});
$('.services_content .close').on('click',function () {
    $('.services_content').slideUp();
    $('.service_entry').slideDown();
});

$('.services_content .header').on('mouseenter', 'span',function () {
    $('.services_content .header span').removeClass('active');
    $(this).addClass('active');

    $('.' + $(this).attr('data') + '_content').parent().find('.content').hide();//获取上一级的父级下面的content
    $('.' + $(this).attr('data') + '_content').show(); 

});