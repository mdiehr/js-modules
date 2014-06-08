var TextNodeler = (function (my) {
	// Shared private state
	var _private = my._private = my._private || {},
		_seal = my._seal = my._seal || function () {
			delete my._private;
			delete my._seal;
			delete my._unseal;
		},
		_unseal = my._unseal = my._unseal || function () {
			my._private = _private;
			my._seal = _seal;
			my._unseal = _unseal;
		};

	// Private variables
	_private._debugName = "";

	// Initialization hook
	_private._initDebug = function(spec) {
		_private._debugName = spec.name;
		console.log("Debugging initialized with name " + _private._debugName)
	}
	_private._onInit.push(_private._initDebug);


	_private.Nodeler.prototype.debug = function() {
		this.display("My name is " + _private._debugName);
	}

	// Hide the private state from other files
	_seal();

	return my;
}(TextNodeler || {}));