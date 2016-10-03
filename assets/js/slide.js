$(document).ready(function () {
    $(window).scroll(function () {
        $(".slide").each(function () {
            var pos = $(this).offset().top;
            var windowHeight = $(window).height();
            var windowTop = $(window).scrollTop();
            if (pos < (windowTop + windowHeight)) {
                $(this).addClass("slide-animation");
            }
        });
    });
})