$("#add").click(function() {
    addItem("banana");
});
var LIST = $('#products-list');
var ITEM_TEMPLATE = $('#line').html();

function addItem(title) {
    var node = $(ITEM_TEMPLATE); //Create	new	HTML	node
    node.find(".product").text(title); //Set	product	title
    //Delete	Action
    node.find("#delete-button").click(function() {
        node.remove();
    });
    LIST.append(node); //Add	to	the	end	of	the	list
}