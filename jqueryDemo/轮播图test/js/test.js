(function () {
    let nowIndex = 0;
    let imgLength = $('.banner__box li').length - 1;
    let imgWidth = $('.banner__box li').width();
    let lock = false;
    let timer = null;

    function init() {

        bindEvent();
        changeIndex(0);
        startMove();
    }

    function bindEvent() {
        $('.wrapper').hover(() => {
            clearInterval(timer);
            $('.btn').show();
        }, () => {
            startMove();
            $('.btn').hide();
        });

        $('.wrapper .btn').on('click', function () {
            if ($(this).hasClass('left-btn')) {
                move('prev');
            } else if ($(this).hasClass('right-btn')) {
                move('next');
            }
        });

        $('.dot').on('click', function () {
            move($(this).index());
        });
    }

    function move(type) {
        if (lock) {
            return;
        };
        if (type === 'prev') {
            lock = true;
            if (nowIndex === 0) {
                nowIndex = imgLength;
                $('.wrapper > ul').css('left', -nowIndex * imgLength);
            }
            nowIndex--;
            $('.banner__box').animate({
                'left': -imgWidth * nowIndex,
            }, 500, function () {
                lock = false;
            });
        } else if (type === 'next') {
            lock = true;
            if (nowIndex === imgLength) {
                nowIndex = 0;
                $('.wrapper > ul').css('left', -nowIndex * nowIndex);
            }
            nowIndex++;
            $('.banner__box').animate({
                'left': -imgWidth * nowIndex,
            }, 500, function () {
                lock = false;
            });
        } else {
            lock = true;
            nowIndex = type;
            $('.banner__box').animate({
                'left': -imgWidth * nowIndex,
            }, 500, function () {
                lock = false;
            });
        }
        changeIndex(nowIndex);
    }
    function changeIndex(index) {
        $('.pointer .dot').css({ backgroundColor: '#fff' });
        if (index === imgLength) {
            $('.pointer .dot').eq(0).css({ backgroundColor: 'red' });
        } else {
            $('.pointer .dot').eq(index).css({ backgroundColor: 'red' });
        }
    }
    function startMove() {
        timer = setInterval(function () {
            move('next');
        }, 3000);
    }

    init();

}())





