const { 
	RichText,
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
} = wp.components;

const { WsuSeparator } = wsu_wds.components;

import { SpacingSelector,
	SpacingPanelVertical } from '../../../block-controls';

const edit = ( { className, attributes, setAttributes } ) => { 

	let styleOptions = [
		{ label: 'Default', value: 'default' },
		{ label: 'Crimson', value: 'crimson' },
	]

	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
					<SelectControl
							label="Style"
							value={attributes.style}
							onChange={ (style) => setAttributes( { style } ) }
							options={styleOptions}
						/>
				</PanelBody>
				<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>
			
			<WsuSeparator style={attributes.style} />
		</>
	)

}



export default edit;