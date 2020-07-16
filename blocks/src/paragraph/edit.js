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
					onChange={ ( newContent )  => props.setAttributes( { content: newContent } ) }
					value={ content }
					placeholder='Start Writing ....'
					onMerge={ mergeBlocks }
					onReplace={ onReplace }
					onRemove={ onRemove }
					identifier="content"
				/>
				</>
			);

		} else {

			return <BlockEdit { ...props } />;

		}
    };
}, "removeEditor" );

export default paragraphEditor;