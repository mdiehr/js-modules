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
	_private._container = null;
	_private._messages = [];
	_private._onInit = [];
	
	// Public constructor
	my.Create = function(spec) {
		return new _private.Nodeler(spec);
	}

	// Private constructor
	_private.Nodeler = function(spec) {
		_private._container = document.getElementById(spec.name);
		_private._container.classList.add("boxxler");
		// Call initializers
		for (var i = 0; i < _private._onInit.length; ++i) {
			console.log("onInit:");
			if (typeof _private._onInit[i] === 'function') {
				_private._onInit[i].call(this, spec);
			}
		}
	}

	// Public methods
	_private.Nodeler.prototype.display = function(text) {
		return _private._displaySize(text, "18px");
	}

	_private.Nodeler.prototype.displayBig = function(text) {
		return _private._displaySize(text, "22px");
	}

	_private.Nodeler.prototype.debug = function() {
		this.display("My name is " + _private._name);
	}

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
}(TextNodeler || {}));