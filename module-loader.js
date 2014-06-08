var TextNodeler = (function (my) {
	// Private state
	var _private = {};

	_private._load = function(spec) {
		var engine = {};
		ModuleCore(engine);
		ModuleDebugging(engine);
		engine._seal();
		return engine.Create(spec);
	}

	// Public constructor
	my.Create = function(spec) {
		return _private._load(spec);
	}

	return my;
}(TextNodeler || {}));