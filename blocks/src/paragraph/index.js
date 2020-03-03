
import paragraphEditor from './edit';
 
//wp.hooks.addFilter( 'editor.BlockListBlock', 'wsuwp/blocks/paragraph', removeEditor );
wp.hooks.addFilter( 'editor.BlockEdit', 'wsuwp/blocks/paragraph', paragraphEditor );

wp.hooks.addFilter('blocks.registerBlockType', 'wsuwp/freeform', (settings, name) => {
	if ('core/paragraph' == name ) {
	  settings.category = 'content';  
	}
  
	return settings;
  
});