var LIST = $("#products-list");
var ITEM_TEMPLATE = $("#line").html();
var LISTmini = $("#mini");
var ITEM_TEMPLATEmini = $('#pr').html();
addItem("Banana");
addItem("Pineapple");
addItem("Avocado");

function addItem(title) {
    var t = $(ITEM_TEMPLATEmini); //Create	new	HTML	node
    t.find("#name").text(title); //Set	product	title


    LISTmini.append(t); //Add	to	the	end	of	the	list
    var node = $(ITEM_TEMPLATE); //Create	new	HTML	node
    var k = parseInt(node.find("#qty").text(), 10);
    node.find(".product").text(title);
    t.find("#name").text(title); //Set	product	title//Set	product	title
    node.find("#delete").click(function() {
        node.remove();
        t.remove();
    });
    node.find("#plus").click(function() {
        var n = parseInt(node.find("#qty").text(), 10);
        node.find("#minus").prop('disabled', false);
        node.find("#qty").text(n + 1);
        t.find("#qty").text(n + 1);
    });
    node.find("#minus").click(function() {
        var n = parseInt(node.find("#qty").text(), 10);
        if (n > 1) {
            node.find("#minus").prop('disabled', false);
            node.find("#qty").text(n - 1);
            t.find("#qty").text(n - 1);
        } else {
            node.find("#minus").prop('disabled', true);
        }
    });
    node.find("#bought").click(function() {
        var one = $("#buym");
        var two = $("#buyp").html();

        var no = $(two); //Create	new	HTML	node
        no.find("#name").text(title); //Set	product	title
        one.append(no);
        t.remove();
    });
    LIST.append(node); //Add	to	the	end	of	the	list
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