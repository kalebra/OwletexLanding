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
    })

    $('.news-cards').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});