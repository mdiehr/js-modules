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

	// permanent access to _private, _seal, and _unseal
	_private.container = null;
	_private.messages = [];

	_private.StoreMessage = function(element, text) {
		_private.messages.push({"element":element, "text":text});
	}

	_private.MakeParagraph = function(parent) {
		var paragraphElement = document.createElement('p');
		parent.appendChild(paragraphElement);
		return paragraphElement;
	}

	_private.displaySize = function(text, sizeStyle) {
		var pElem = _private.MakeParagraph(_private.container);
		pElem.appendChild(document.createTextNode(text));
		_private.StoreMessage(pElem, text);
		if (sizeStyle !== undefined)
			pElem.style.fontSize = sizeStyle;
		return pElem;
	}

	my.load = function(containerId) {
		_private.container = document.getElementById(containerId);
		_private.container.classList.add("boxxler");
		return my;
	}

	my.display = function(text) {
		return _private.displaySize(text, "18px");
	}

	my.displayBig = function(text) {
		return _private.displaySize(text, "22px");
	}

	// Hide the private state from other files
	_seal();

	return my;
}(TextNodeler || {}));