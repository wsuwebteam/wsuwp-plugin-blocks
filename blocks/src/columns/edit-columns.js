const { createHigherOrderComponent } = wp.compose;
const { AlignmentToolbar, BlockControls, InspectorControls, InnerBlocks } = wp.editor;
const { Fragment } = wp.element;

const columnsEditor =  createHigherOrderComponent( ( BlockEdit ) => {

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
		
		console.info( name );

		if( typeof name != 'undefined' && name === 'core/columns' ) {

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

export default columnsEditor;