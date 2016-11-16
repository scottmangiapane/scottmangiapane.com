$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});

var footer = $('footer');
var isVisible = false;
console.log("Initialized");

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 200 && isVisible === false) {
        isVisible = true;
        footer.css('display', 'inherit');
    } else if (scrollTop <= 200 && isVisible === true) {
        isVisible = false;
        footer.css('display', 'none');
        console.log("Not visible");
    }
});