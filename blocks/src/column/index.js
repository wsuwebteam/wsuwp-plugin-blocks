import columnEditor from './edit';

wp.hooks.addFilter( 'editor.BlockEdit', 'wsuwp/blocks/column', columnEditor );