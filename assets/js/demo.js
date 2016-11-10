$(document).ready(function () {
    var demo_ca = $('#demo-calculator-v2');
    var demo_cc = $('#demo-card-cliques');
    var demo_qc = $('#demo-quackcryption');
    var demo_nix = $('#demo-nix-js');
    var demo_ttg = $('#demo-truth-table-generator');

    demo_cc.css({opacity: 0});
    demo_qc.css({opacity: 0});
    demo_ttg.css({opacity: 0});

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
    });

    $('#card-nix-js').hover(function () {
        demo_ttg.animate({
            opacity: 0
        }, {duration: 220, queue: false});
        demo_nix.animate({
            opacity: 1
        }, {duration: 220, queue: false});
    });

    $('#card-truth-table-generator').hover(function () {
        demo_nix.animate({
            opacity: 0
        }, {duration: 220, queue: false});
        demo_ttg.animate({
            opacity: 1
        }, {duration: 220, queue: false});
    });
});