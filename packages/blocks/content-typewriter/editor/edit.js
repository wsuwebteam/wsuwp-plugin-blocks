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

const { WsuTypewriter } = wsu_wds.components;

import { SpacingSelector } from '../../../block-controls';

const edit = ( { className, attributes, setAttributes } ) => { 

	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
					{/* General Here! */}
				</PanelBody>
				<PanelBody title="Style" initialOpen={false}>
					<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>

			<WsuTypewriter />
		</>
	)

}



export default edit;