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
    node.find(".product").text(title);
    t.find("#name").text(title); //Set	product	title//Set	product	title
    node.find("#delete").click(function() {
        node.remove();
        t.remove();
    });
    LIST.append(node); //Add	to	the	end	of	the	list
}


var one = $("#buym");
var two = $("#buyp").html();

function move() {
    var no = $(two); //Create	new	HTML	node
    no.find("#name").text("blabla"); //Set	product	title
    one.append(no);
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

$("#bought").click(function() {
    move();
});