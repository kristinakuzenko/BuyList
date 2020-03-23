var LIST = $("#products-list");
var ITEM_TEMPLATE = $("#line").html();
var LISTmini = $("#mini");
var ITEM_TEMPLATEmini = $('#pr').html();
var one = $("#buym");
var two = $("#buyp").html();
addItem("Banana");
addItem("Pineapple");
addItem("Avocado");

function addItem(title) {
    var no = $(two);
    var t = $(ITEM_TEMPLATEmini);
    t.find("#name").text(title);
    LISTmini.append(t);
    var node = $(ITEM_TEMPLATE);
    node.find("#minus").prop('disabled', true);
    node.find("#notb").css({ display: "none" });
    node.find("#input_pr").css({ display: "none" });
    node.find("#buyy").css({ display: "flex" });
    node.find(".product").text(title);
    no.find("#name").text(title);
    node.find("#delete").click(function() {
        node.remove();
        t.remove();
    });
    node.find("#plus").click(function() {
        var n = parseInt(node.find("#qty").text(), 10);
        node.find("#minus").prop('disabled', false);
        node.find("#qty").text(n + 1);
        node.find("#qty2").text(n + 1);
        t.find("#qty").text(n + 1);
    });
    node.find("#minus").click(function() {
        var n = parseInt(node.find("#qty").text(), 10);
        if (n > 1) {
            node.find("#minus").prop('disabled', false);
            node.find("#qty").text(n - 1);
            node.find("#qty2").text(n - 1);
            t.find("#qty").text(n - 1);
        } else {
            node.find("#minus").prop('disabled', true);
        }
        var k = parseInt(node.find("#qty").text(), 10);
        if (k > 1) {
            node.find("#minus").prop('disabled', false);

        } else {
            node.find("#minus").prop('disabled', true);
        }
    });
    node.find("#bought").click(function() {
        var nn = parseInt(node.find("#qty").text(), 10);
        no.find("#qty").text(nn);
        one.append(no);
        t.remove();
        node.find("#buyy").css({ display: "none" });
        node.find("#notb").css({ display: "flex" });

    });
    node.find("#not-bought").click(function() {
        t.find("#name").text(title);
        LISTmini.append(t);
        no.remove();
        node.find("#buyy").css({ display: "flex" });
        node.find("#notb").css({ display: "none" });

    });
    node.find("#change").click(function() {
        node.find("#change").css({ display: "none" });
        var text = node.find("#change").text();
        node.find("#input_text").val(text);
        node.find("#input_pr").css({ display: "flex" });
        node.find("#input_text").focus();
    });
    node.find("#input_pr").mouseout(function(event) {
        var name = node.find("#input_text").val();
        t.find("#name").text(name);
        node.find(".product").text(name);
        no.find("#name").text(name);
        node.find("#input_pr").css({ display: "none" });
        node.find("#change").css({ display: "flex" });
    });
    LIST.append(node);
}

$("#add").click(function() {
    var inputVal = document.getElementById("my-input").value;
    $("#my-input").val('');
    addItem(inputVal);

});
$(document).keyup(function(event) {
    if ($("#my-input").is(":focus") && event.key == "Enter") {
        var inputVal = document.getElementById("my-input").value;
        $("#my-input").val('');
        addItem(inputVal);

    }
});