var TextBoxMaker = {
	// Public constructor
	Create: function(spec) {
		var engine = {};
		// Load each module
		ModuleCore(engine);
		ModuleDebugging(engine);
		ModuleColor(engine);
		ModuleClick(engine);
		// Return to caller
		return engine.Create(spec);
	}
};