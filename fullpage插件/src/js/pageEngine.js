// 链式调用 对应函数，新增section 和slide
var pageEngine = {
    init: function (selector, colorsArray) {
        this.$W = $(selector);
        this.colorsArray = colorsArray;
        this.slideFlag = false; //标记，看你调用addSection还是addSlide
        return this;
    },
    addSection: function (className) {
        // this = pageEngine
        this.slideFlag = false;
        this.$Page = $('<div class="section"/>').addClass(className);//再加一个参数里的类名
        this.$Page.appendTo(this.$W);
        return this;
    },
    addSlide: function (className) {
        this.slideFlag = true;
        this.$Slide = $('<div class="slide"/>').addClass(className);
        this.$Slide.appendTo(this.$Page);
        return this;
    },
    addComponent: function (config) {
        var oCp = null;
        switch (config.type) { // 可扩展
            case "base":
                    oCp = ComponentFactory(config);
                break;
            // case "super": // 可添加其他插件
            //         oCp = ComponentSuperFactory(config);
            //     break;
        }
        // true ?
        this.slideFlag ? this.$Slide.append(oCp) : this.$Page.append(oCp);
        return this;
    },
    bindEvent: function () {
        this.$W.find('.section').on({
            _leave: function () {
                $(this).find('.component').trigger('cpLeave');
            },
            _load: function () {
                $(this).find('.component').trigger('cpLoad');
            }
        })
    },
    load: function () {
        var self = this;
        this.bindEvent();
        this.$W.myFullPage({
            colorsArray: this.colorsArray,
            onLeave: function (index) {
                self.$W.find('.section').eq(index).trigger('_leave');
            },
            afterLoad: function (index) {
                self.$W.find('.section').eq(index).trigger('_load');
            }
        });

        this.$W.find('.section').eq(0).trigger('_load');
    }
}