var ModuleClick = function (my) {

	////////////////////////////////////////
	// Private variables

	// Queue of click events
	my._clickEvents = [];

	////////////////////////////////////////
	// Module initializer
	
	my._onInit(function(spec) {
		// Listen to clicks
		my._container.addEventListener('click', my._clicked)
	});

	////////////////////////////////////////
	// Private methods

	my._clicked = function(event) {
		console.log(my._debugName + " was clicked.");
		// Process the queue
		for (var i = 0; i < my._clickEvents.length; ++i) {
			my._clickEvents[i].call(null, event);
		}
	}

	my._onClick = function(func) {
		if (typeof func === 'function') {
			my._clickEvents.push(func);
		} else {
			console.error("onClick func was type " + (typeof func) + " instead of a function.");
		}
	}

	////////////////////////////////////////
	// Public methods

	my.TBMaker.prototype.onClick = my._onClick;

	return my;
};