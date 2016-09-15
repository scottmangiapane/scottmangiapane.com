$(document).ready(function () {
    var demo_js = $('#demo-enable-js');
    var demo_ca = $('#demo-calculator-v2');
    var demo_cc = $('#demo-card-cliques');
    var demo_qc = $('#demo-quackcryption');
    var demo_link = $('#demo-github');

    demo_cc.css({opacity: 0});
    demo_qc.css({opacity: 0});
    demo_js.animate({
        opacity: 0
    }, {duration: 220, queue: false});

    $('#card-calculator-v2').hover(function () {
        demo_ca.animate({
            opacity: 1
        }, {duration: 220, queue: false});
        demo_cc.animate({
            opacity: 0
        }, {duration: 220, queue: false});
        demo_qc.animate({
            opacity: 0
        }, {duration: 220, queue: false});
        demo_link.attr('href', 'https://github.com/scottmangiapane/android-calculator-v2');
    });

    $('#card-card-cliques').hover(function () {
        demo_ca.animate({
            opacity: 0
        }, {duration: 220, queue: false});
        demo_cc.animate({
            opacity: 1
        }, {duration: 220, queue: false});
        demo_qc.animate({
            opacity: 0
        }, {duration: 220, queue: false});
        demo_link.attr('href', 'https://github.com/scottmangiapane/android-card-cliques');
    });

    $('#card-quackcryption').hover(function () {
        demo_ca.animate({
            opacity: 0
        }, {duration: 220, queue: false});
        demo_cc.animate({
            opacity: 0
        }, {duration: 220, queue: false});
        demo_qc.animate({
            opacity: 1
        }, {duration: 220, queue: false});
        demo_link.attr('href', 'https://github.com/scottmangiapane/android-quackcryption');
    });
});