$(function() {
    $(".advantage").click(function() {
        if (!$(this).hasClass("active")) {
            $(".advantage").removeClass("active");
            $(this).addClass("active");
        }
    });
});