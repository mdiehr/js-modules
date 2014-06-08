// Go
document.addEventListener("DOMContentLoaded", function(event) {
	var A = TextNodeler.Create({name:"containerA"});
	A.display("Hello A!");
	A.displayBig("Big Hello!");
	A.debug();

	var B = TextNodeler.Create({name:"containerB"});
	B.display("Goodbye B!");
	B.displayBig("Big Goodbye!");
	B.debug();

	A.display("I should be in A");
	A.debug();
	B.display("I should be in B");
	B.debug();

});