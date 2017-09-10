$(document).ready(function () {
    var demo_ca = $('#demo-calculator-v2');
    var demo_cc = $('#demo-card-cliques');
    var demo_qc = $('#demo-quackcryption');
    var demo_nix = $('#demo-nix-js');
    var demo_truth_table_generator = $('#demo-truth-table-generator');
    var demo_ti_games = $('#demo-ti-games');
    var demo_alphacs = $('#demo-alphacs');
    var demo_ti_terminal = $('#demo-ti-terminal');

    demo_cc.css({ opacity: 0 });
    demo_qc.css({ opacity: 0 });
    demo_truth_table_generator.css({ opacity: 0 });
    demo_alphacs.css({ opacity: 0 });
    demo_ti_terminal.css({ opacity: 0 });

    $('#card-calculator-v2').hover(function () {
        demo_ca.animate({
            opacity: 1
        }, { duration: 220, queue: false });
        demo_cc.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_qc.animate({
            opacity: 0
        }, { duration: 220, queue: false });
    });

    $('#card-card-cliques').hover(function () {
        demo_ca.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_cc.animate({
            opacity: 1
        }, { duration: 220, queue: false });
        demo_qc.animate({
            opacity: 0
        }, { duration: 220, queue: false });
    });

    $('#card-quackcryption').hover(function () {
        demo_ca.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_cc.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_qc.animate({
            opacity: 1
        }, { duration: 220, queue: false });
    });

    $('#card-nix-js').hover(function () {
        demo_truth_table_generator.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_nix.animate({
            opacity: 1
        }, { duration: 220, queue: false });
    });

    $('#card-truth-table-generator').hover(function () {
        demo_nix.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_truth_table_generator.animate({
            opacity: 1
        }, { duration: 220, queue: false });
    });

    $('#card-ti-games').hover(function () {
        demo_ti_games.animate({
            opacity: 1
        }, { duration: 220, queue: false });
        demo_alphacs.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_ti_terminal.animate({
            opacity: 0
        }, { duration: 220, queue: false });
    });

    $('#card-alphacs').hover(function () {
        demo_ti_games.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_alphacs.animate({
            opacity: 1
        }, { duration: 220, queue: false });
        demo_ti_terminal.animate({
            opacity: 0
        }, { duration: 220, queue: false });
    });

    $('#card-ti-terminal').hover(function () {
        demo_ti_games.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_alphacs.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_ti_terminal.animate({
            opacity: 1
        }, { duration: 220, queue: false });
    });
});