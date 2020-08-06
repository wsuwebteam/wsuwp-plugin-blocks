wp.hooks.addFilter('blocks.registerBlockType', 'wsuwp/freeform', (settings, name) => {
	if ('core/freeform' == name ) {
	  settings.category = 'content';  
	}
  
	return settings;
  
});