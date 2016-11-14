$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});

$(function () {
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        var height = $(window).height();
        var header = $('#header');
        header.css('transform', 'scale(' + ((height - currentScrollTop) / height) + ')');
    });
});