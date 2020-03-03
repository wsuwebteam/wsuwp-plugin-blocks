const { createHigherOrderComponent } = wp.compose;
const { AlignmentToolbar, BlockControls, InspectorControls, InnerBlocks } = wp.editor;
const { Fragment } = wp.element;
//import edit from './edit';

 
const columnEditor =  createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {

		const {
            attributes: {
                content,
            },
			className,
			name,
        } = props;
 
        const onChangeContent = ( newContent ) => {
            props.setAttributes( { content: newContent } );
        };
 
        const onChangeAlignment = ( newAlignment ) => {
            props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
        };

		if( typeof name != 'undefined' && name === 'core/column' ) { 

			return (
				<>
					<InnerBlocks
						templateLock={ false }
					/>
				</>
			);

		} else {

			return <BlockEdit { ...props } />;

		}
    };
}, "columnsEditor" );

export default columnEditor;