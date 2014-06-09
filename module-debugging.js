var ModuleDebugging = function (my) {

	////////////////////////////////////////
	// Private variables
	
	my._debugName = "";

	////////////////////////////////////////
	// Module initializer
	
	my._onInit(function(spec) {
		console.log("ModuleColor spec: {name:name}");
		my._debugName = spec.name;
	});

	////////////////////////////////////////
	// Public methods
	
	my.TBMaker.prototype.debug = function() {
		this.display("My name is " + my._debugName);
	}

	return my;
};