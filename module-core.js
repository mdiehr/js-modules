var ModuleCore = function (my) {
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
	_private._container = null;
	_private._messages = [];
	_private._initQueue = [];
	
	// Public constructor
	my.Create = function(spec) {
		return new _private.Nodeler(spec);
	}

	// Call initializers functions and pass them the spec
	_private.initializeModules = function(spec) {
		for (var i = 0; i < _private._initQueue.length; ++i) {
			_private._initQueue[i].call(null, spec);
		}
	}

	// Places an initialization function into the queue
	_private._onInit = function(func) {
		if (typeof func === 'function') {
			_private._initQueue.push(func);
		} else {
			console.error("onInit func was type " + (typeof func) + " instead of a function.");
		}
	}

	// Private constructor of engine instance
	_private.Nodeler = function(spec) {
		_private._container = document.getElementById(spec.name);
		if (_private._container === null) {
			_private._container = document.createElement('div');
			_private._container.id = spec.name;
			document.body.appendChild(_private._container);
		}
		_private._container.classList.add("boxxler");
		_private.initializeModules(spec);
	}

	// Public methods
	_private.Nodeler.prototype.display = function(text) {
		return _private._displaySize(text, "18px");
	}

	_private.Nodeler.prototype.displayBig = function(text) {
		return _private._displaySize(text, "22px");
	}

	// Private methods
	_private._storeMessage = function(element, text) {
		_private._messages.push({"element":element, "text":text});
	}

	_private._makeParagraph = function(parent) {
		var paragraphElement = document.createElement('p');
		parent.appendChild(paragraphElement);
		return paragraphElement;
	}

	_private._displaySize = function(text, sizeStyle) {
		var pElem = _private._makeParagraph(_private._container);
		pElem.appendChild(document.createTextNode(text));
		_private._storeMessage(pElem, text);
		if (sizeStyle !== undefined)
			pElem.style.fontSize = sizeStyle;
		return pElem;
	}

	return my;
};