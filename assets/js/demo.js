$(document).ready(function () {
    var app_ca = $('#calculator-v2');
    var app_cc = $('#card-cliques');
    var app_qc = $('#quackcryption');
    var demo = $('#demo-overlay');

    demo.attr("src", demo.attr("src").replace("enable-js.svg", "calculator-v2.svg"));

    app_ca.hover(function () {
        var src = demo.attr("src")
            .replace("card-cliques.svg", "calculator-v2.svg")
            .replace("quackcryption.svg", "calculator-v2.svg");
        demo.attr("src", src);
    });

    app_cc.hover(function () {
        var src = demo.attr("src")
            .replace("calculator-v2.svg", "card-cliques.svg")
            .replace("quackcryption.svg", "card-cliques.svg");
        demo.attr("src", src);
    });

    app_qc.hover(function () {
        var src = demo.attr("src")
            .replace("calculator-v2.svg", "quackcryption.svg")
            .replace("card-cliques.svg", "quackcryption.svg");
        demo.attr("src", src);
    });
});