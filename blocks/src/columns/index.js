import columnsEditor from './edit-columns';

wp.hooks.addFilter( 'editor.BlockEdit', 'wsuwp/blocks/columns', columnsEditor ); 