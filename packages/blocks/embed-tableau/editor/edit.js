const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
} = wp.blockEditor;

const {
	BaseControl,
	Panel,
	PanelBody,
	TextControl,
	SelectControl,
} = wp.components;

const { WsuButton } = wsu_wds.components; 

import { 
	SelectIcon, 
	SpacingSelector,
	SpacingPanelVertical } from '../../../block-controls';
import { empty } from '../../../block-components';

const edit = ( { className, attributes, setAttributes } ) => {

	if ( '' == attributes.id ) {
		// If no id is set create one
		let randomId = 'tableau-embed-' + Math.floor( Math.random() * 100000 );

		setAttributes( { id:randomId } );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
					<TextControl
						label="View URL"
						value={attributes.viewUrl}
						onChange={(viewUrl) => setAttributes({ viewUrl })}
						placeholder={'Enter Tableau view URL here.'}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="wsu-e-tableau">
				<div class="wsu-e-tableau__logo">
				</div>
			</div>
		</>
	)
}

export default edit;
