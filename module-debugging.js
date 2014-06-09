var ModuleDebugging = function (my) {
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

	// Private methods
	_private.TBMaker.prototype.debug = function() {
		this.display("My name is " + _private._debugName);
	}

	// Initialization hook for submodules
	_private._onInit(function(spec) {
		_private._debugName = spec.name;
	});

	return my;
};