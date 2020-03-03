const { createHigherOrderComponent } = wp.compose;
const { RichText, AlignmentToolbar, BlockControls, InspectorControls } = wp.editor;
const { Fragment } = wp.element;
//import edit from './edit';

 
const paragraphEditor =  createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {

		const {
            attributes: {
                content,
                alignment,
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

		if( typeof name != 'undefined' && name === 'core/paragraph' ) {

			return (
				<>
				{
					<BlockControls>
						<AlignmentToolbar
							value={ alignment }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
				}
				<RichText
					className={ className }
					style={ { textAlign: alignment } }
					tagName="p"
					onChange={ onChangeContent }
					value={ content }
					placeholder='Start Writing ....'
				/>
				</>
			);

		} else {

			return <BlockEdit { ...props } />;

		}
    };
}, "removeEditor" );

export default paragraphEditor;