$(document).ready(function () {
    var demo_card_cliques = $('#demo-card-cliques');
    var demo_quackcryption = $('#demo-quackcryption');
    var demo_calculator_v2 = $('#demo-calculator-v2');
    var demo_truth_table_generator = $('#demo-truth-table-generator');
    var demo_nix_js = $('#demo-nix-js');
    var demo_ti_games = $('#demo-ti-games');
    var demo_alphacs = $('#demo-alphacs');
    var demo_ti_terminal = $('#demo-ti-terminal');

    demo_quackcryption.css({ opacity: 0 });
    demo_calculator_v2.css({ opacity: 0 });
    demo_nix_js.css({ opacity: 0 });
    demo_alphacs.css({ opacity: 0 });
    demo_ti_terminal.css({ opacity: 0 });

    $('#card-card-cliques').hover(function () {
        demo_card_cliques.animate({
            opacity: 1
        }, { duration: 220, queue: false });
        demo_quackcryption.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_calculator_v2.animate({
            opacity: 0
        }, { duration: 220, queue: false });
    });

    $('#card-quackcryption').hover(function () {
        demo_card_cliques.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_quackcryption.animate({
            opacity: 1
        }, { duration: 220, queue: false });
        demo_calculator_v2.animate({
            opacity: 0
        }, { duration: 220, queue: false });
    });

    $('#card-calculator-v2').hover(function () {
        demo_card_cliques.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_quackcryption.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_calculator_v2.animate({
            opacity: 1
        }, { duration: 220, queue: false });
    });

    $('#card-truth-table-generator').hover(function () {
        demo_truth_table_generator.animate({
            opacity: 1
        }, { duration: 220, queue: false });
        demo_nix_js.animate({
            opacity: 0
        }, { duration: 220, queue: false });
    });

    $('#card-nix-js').hover(function () {
        demo_truth_table_generator.animate({
            opacity: 0
        }, { duration: 220, queue: false });
        demo_nix_js.animate({
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