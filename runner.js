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
	var C = TextBoxMaker.Create({name:"lawngreen", color:"lawngreen"});
	C.debug();

	// Change color
	A.onClick(A.setColor.bind(A, "red"));

	// Add text
	B.onClick(B.display.bind(B, "Ouch!"));
	
	// Toggle
	var i = 0;
	C.onClick(function(){C.setColor(((++i%2)==1)?"green":"lawngreen")});

});