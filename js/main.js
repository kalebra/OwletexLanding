AOS.init();

$(function() {
    //клик по бургеру
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.burger-menu').slideToggle();
    });

    //блок преимуществ - подключений анимаций
    var anim1 = lottie.loadAnimation({
        container: document.getElementById('anim-1'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'js/animation/advantages/01-exchanges.json'
    });

    var anim2 = lottie.loadAnimation({
        container: document.getElementById('anim-2'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'js/animation/advantages/02-sandbox.json'
    });

    var anim3 = lottie.loadAnimation({
        container: document.getElementById('anim-3'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'js/animation/advantages/03-bot.json'
    });

    var anim4 = lottie.loadAnimation({
        container: document.getElementById('anim-4'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'js/animation/advantages/04-analytics.json'
    });

    var anim5 = lottie.loadAnimation({
        container: document.getElementById('anim-5'),
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: 'js/animation/advantages/05-support.json'
    });

    $('.advantages h2').click(function() {
        $('.adv-desc-right #anim-1').fadeToggle('slow');
    });

    //блок преимуществ - клик по кнопке
    $(".advantage").click(function() {
        if (!$(this).hasClass("active")) {
            $(".advantage").removeClass("active");
            $(this).addClass("active");
        }
        switch($(this).attr('id')) {
        case 'a1':
        case 'a11':
            $.when( $('.adv-desc-left > div:first-child > div.active').fadeOut(200) ).then(function() {
                $('.adv-desc-left > div:first-child > div.active').removeClass('active');
                $('.adv-desc-left > div:first-child > div#b1').fadeIn(1).addClass('active');
            });
            $.when( $('.adv-desc-right > div.active').fadeOut().removeClass('active') ).then(function(){
                $.when($('.adv-desc-right #anim-1').fadeIn().addClass('active')).then(function() {
                    anim1.play();
                    anim2.stop();
                    anim3.stop();
                    anim4.stop();
                    anim5.stop();
                });
            });
        break;

        case 'a2':
        case 'a22':
            $.when( $('.adv-desc-left > div:first-child > div.active').fadeOut(200) ).then(function() {
                $('.adv-desc-left > div:first-child > div.active').removeClass('active');
                $('.adv-desc-left > div:first-child > div#b2').fadeIn(1).addClass('active');
            });

            $.when( $('.adv-desc-right > div.active').fadeOut().removeClass('active') ).then(function(){
                $.when($('.adv-desc-right #anim-2').fadeIn().addClass('active')).then(function() {
                    anim1.stop();
                    anim2.play();
                    anim3.stop();
                    anim4.stop();
                    anim5.stop();
                });
            });
        break;

        case 'a3':
        case 'a33':
            $.when( $('.adv-desc-left > div:first-child > div.active').fadeOut(200) ).then(function() {
                $('.adv-desc-left > div:first-child > div.active').removeClass('active');
                $('.adv-desc-left > div:first-child > div#b3').fadeIn(1).addClass('active');
            });
            $.when( $('.adv-desc-right > div.active').fadeOut().removeClass('active') ).then(function(){
                $.when($('.adv-desc-right #anim-3').fadeIn().addClass('active')).then(function() {
                    anim1.stop();
                    anim2.stop();
                    anim3.play();
                    anim4.stop();
                    anim5.stop();
                });
            });
        break;

        case 'a4':
        case 'a44':
            $.when( $('.adv-desc-left > div:first-child > div.active').fadeOut(200) ).then(function() {
                $('.adv-desc-left > div:first-child > div.active').removeClass('active');
                $('.adv-desc-left > div:first-child > div#b4').fadeIn(1).addClass('active');
            });
            $.when( $('.adv-desc-right > div.active').fadeOut().removeClass('active') ).then(function(){
                $.when($('.adv-desc-right #anim-4').fadeIn().addClass('active')).then(function() {
                    anim1.stop();
                    anim2.stop();
                    anim3.stop();
                    anim4.play();
                    anim5.stop();
                });
            });
        break;

        case 'a5':
        case 'a55':
            $.when( $('.adv-desc-left > div:first-child > div.active').fadeOut(200) ).then(function() {
                $('.adv-desc-left > div:first-child > div.active').removeClass('active');
                $('.adv-desc-left > div:first-child > div#b5').fadeIn(1).addClass('active');
            });
            $.when( $('.adv-desc-right > div.active').fadeOut().removeClass('active') ).then(function(){
                $.when($('.adv-desc-right #anim-5').fadeIn().addClass('active')).then(function() {
                        anim1.stop();
                        anim2.stop();
                        anim3.stop();
                        anim4.stop();
                        anim5.play();
                });
            });
        break;
        }
    });

    //блок бирж, анимация
    lottie.loadAnimation({
        container: document.getElementById('exchanges-anim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'js/animation/exchanges.json'
    });

    //блое схемы работы, анимация
    lottie.loadAnimation({
        container: document.getElementById('scheme-anim'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'js/animation/scheme-of-work.json'
    });

    //блок возможностей, анимация в конце блока
    $(window).scroll(function(){
        console.log($('.fir').offset().top);
        if ($('.fir').offset().top >= '5524') {
            $('.opp-imgs').addClass('smaller');
        } else {
            $('.opp-imgs').removeClass('smaller');
        }
    });

    //блок тарифов, слайдер карточек
    $('.cards-tariffs').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick"
            }
        ]
    });

    //блок faq, клик по аккордиону
    $(".quick-answers .question-head").click(function () {
        if (!$(this).hasClass('active')) {
            $(".quick-answers .question-head").removeClass('active');
            $(".quick-answers .question-body").slideUp();
            $(this).addClass('active');
            $(this).next().slideDown();
        } else {
            $(".quick-answers .question-head").removeClass('active');
            $(".quick-answers .question-body").slideUp();
        }
    });

    //блок новостей, слайдер
    $('.news-cards').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: false,
                    variableWidth: true,
                }
            }
        ]
    });
});