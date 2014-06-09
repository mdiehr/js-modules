var ModuleCore = function (my) {

	////////////////////////////////////////
	// Private variables

	my._container = null;
	my._messages = [];
	my._initQueue = [];
	
	////////////////////////////////////////
	// Engine initialization

	my.Create = function(spec) {
		return new my.TBMaker(spec);
	}

	// Call initializer functions and pass them the spec
	my.initializeModules = function(spec) {
		for (var i = 0; i < my._initQueue.length; ++i) {
			my._initQueue[i].call(null, spec);
		}
	}

	// Registers a module to be initialized with the spec
	my._onInit = function(func) {
		if (typeof func === 'function') {
			my._initQueue.push(func);
		} else {
			console.error("onInit func was type " + (typeof func) + " instead of a function.");
		}
	}

	// Engine instance constructor function
	my.TBMaker = function(spec) {
		my._container = document.getElementById(spec.name);
		if (my._container === null) {
			my._container = document.createElement('div');
			my._container.id = spec.name;
			document.body.appendChild(my._container);
		}
		my._container.classList.add("boxxler");
		my.initializeModules(spec);
	}

	////////////////////////////////////////
	// Public methods

	my.TBMaker.prototype.display = function(text) {
		return my._displaySize(text, "18px");
	}

	my.TBMaker.prototype.displayBig = function(text) {
		return my._displaySize(text, "22px");
	}

	////////////////////////////////////////
	// Private methods

	my._storeMessage = function(element, text) {
		my._messages.push({"element":element, "text":text});
	}

	my._makeParagraph = function(parent) {
		var paragraphElement = document.createElement('p');
		parent.appendChild(paragraphElement);
		return paragraphElement;
	}

	my._displaySize = function(text, sizeStyle) {
		var pElem = my._makeParagraph(my._container);
		pElem.appendChild(document.createTextNode(text));
		my._storeMessage(pElem, text);
		if (sizeStyle !== undefined)
			pElem.style.fontSize = sizeStyle;
		return pElem;
	}

	return my;
};