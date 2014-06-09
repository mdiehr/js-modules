// Go
document.addEventListener("DOMContentLoaded", function(event) {
	
	var A = TextBoxMaker.Create({name:"containerA", color:"lemonchiffon"});
	A.display("Hello A!");
	A.displayBig("Big Hello!");

	var B = TextBoxMaker.Create({name:"containerB", color:"lavender"});
	B.display("Goodbye B!");
	B.displayBig("Big Goodbye!");

	// Check that A's messages still show up in A
	A.display("I should be in A");
	A.debug();

	// Check that B's messages still show up in B
	B.display("I should be in B");
	B.debug();

	// Create a brand new message box and have it print its name
	TextBoxMaker.Create({name:"lawngreen", color:"lawngreen"}).debug();

	A.onClick(function(){A.setColor("red")});

	B.onClick(function(){B.display("Ouch!")});

});