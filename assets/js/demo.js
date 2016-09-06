$(document).ready(function () {
    var demo_js = $('#demo-enable-js');
    var demo_ca = $('#demo-calculator-v2');
    var demo_cc = $('#demo-card-cliques');
    var demo_qc = $('#demo-quackcryption');

    demo_js.css({opacity: 0});
    demo_cc.css({opacity: 0});
    demo_qc.css({opacity: 0});

    $('#card-calculator-v2').hover(function () {
        demo_ca.animate({
            opacity: 1
        }, {duration: 200, queue: false});
        demo_cc.animate({
            opacity: 0
        }, {duration: 200, queue: false});
        demo_qc.animate({
            opacity: 0
        }, {duration: 200, queue: false});
    });

    $('#card-card-cliques').hover(function () {
        demo_ca.animate({
            opacity: 0
        }, {duration: 200, queue: false});
        demo_cc.animate({
            opacity: 1
        }, {duration: 200, queue: false});
        demo_qc.animate({
            opacity: 0
        }, {duration: 200, queue: false});
    });

    $('#card-quackcryption').hover(function () {
        demo_ca.animate({
            opacity: 0
        }, {duration: 200, queue: false});
        demo_cc.animate({
            opacity: 0
        }, {duration: 200, queue: false});
        demo_qc.animate({
            opacity: 1
        }, {duration: 200, queue: false});
    });
});