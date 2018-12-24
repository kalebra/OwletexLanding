AOS.init();

$(function() {
    $(".advantage").click(function() {
        if (!$(this).hasClass("active")) {
            $(".advantage").removeClass("active");
            $(this).addClass("active");
        }
    });

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

    $(window).scroll(function(){
        console.log($('.fir').offset().top);
        if ($('.fir').offset().top >= '5524') {
          $('.opp-imgs').addClass('smaller');
        } else {
            $('.opp-imgs').removeClass('smaller');
        }
    });
});