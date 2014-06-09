var ModuleColor = function (my) {

	////////////////////////////////////////
	// Private variables

	my._color = "";

	////////////////////////////////////////
	// Module initializer

	my._onInit(function(spec) {
		console.log("ModuleColor spec: {color:color}");
		my._setColor(spec.color);
	});

	////////////////////////////////////////
	// Private methods

	my._setColor = function(color) {
		if (color != undefined) {
			my._color = color;
			my._container.style.backgroundColor = my._color;
		}
	}

	////////////////////////////////////////
	// Public methods

	my.TBMaker.prototype.setColor = my._setColor;

	return my;
};