var ModuleClick = function (my) {
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

	// Queue of click events
	_private._clickEvents = [];

	_private._onInit(function(spec) {
		// Listen to clicks
		_private._container.addEventListener('click', _private._clicked)
	});

	_private._clicked = function(event) {
		console.log(_private._debugName + " was clicked.");
		// Process the queue
		for (var i = 0; i < _private._clickEvents.length; ++i) {
			_private._clickEvents[i].call(null, event);
		}
	}

	// Places a click function into the queue
	_private._onClick = function(func) {
		if (typeof func === 'function') {
			_private._clickEvents.push(func);
		} else {
			console.error("onClick func was type " + (typeof func) + " instead of a function.");
		}
	}

	// Public interface for click events
	_private.Nodeler.prototype.onClick = _private._onClick;

	return my;
};