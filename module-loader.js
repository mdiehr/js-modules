var TextNodeler = (function (my) {
	// Private state
	var _private = {};

	// Public constructor
	my.Create = function(spec) {
		var engine = {};
		// Load each module
		ModuleCore(engine);
		ModuleDebugging(engine);
		ModuleColor(engine);
		ModuleClick(engine);
		// Seal the private state
		engine._seal();
		return engine.Create(spec);
	}

	return my;
}(TextNodeler || {}));