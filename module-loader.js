var TextBoxMaker = {
	// Public constructor
	Create: function(spec) {
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
};