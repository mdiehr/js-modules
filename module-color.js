var ModuleColor = function (my) {
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
	_private._color = "";

	// When initializing, set the color to the spec
	_private._onInit(function(spec) {
		_private._setColor(spec.color);
	});

	// Private method for color
	_private._setColor = function(color) {
		if (color != undefined) {
			_private._color = color;
			_private._container.style.backgroundColor = _private._color;
		}
	}

	// Public interface for color
	_private.Nodeler.prototype.setColor = _private._setColor;

	return my;
};