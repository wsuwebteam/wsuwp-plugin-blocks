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
					<TextControl
						label="Width"
						value={attributes.width}
						onChange={(width) => setAttributes({ width })}
						placeholder={''}
					/>
					<TextControl
						label="Height"
						value={attributes.height}
						onChange={(height) => setAttributes({ height })}
						placeholder={''}
					/>
					<TextControl
						label="Host URL"
						value={attributes.hostUrl}
						onChange={(hostUrl) => setAttributes({ hostUrl })}
						placeholder={''}
					/>
					<TextControl
						label="Site Root"
						value={attributes.siteRoot}
						onChange={(siteRoot) => setAttributes({ siteRoot })}
						placeholder={''}
					/>
					<TextControl
						label="Name"
						value={attributes.name}
						onChange={(name) => setAttributes({ name })}
						placeholder={''}
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
