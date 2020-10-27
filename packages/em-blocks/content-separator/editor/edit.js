const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls
} = wp.blockEditor;

const {
	Panel,
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

const { EmSeparator } = wsu_wds.emComponents;

import { SpacingSelector } from '../../../block-controls';

import { SpacingPanelVertical } from '../../../block-controls';

const edit = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			<EmSeparator
				isHatched={ attributes.isHatched }
				showMoreIndicator={ attributes.showMoreIndicator }
				className={ className }
			/>

			<InspectorControls>
				<PanelBody title="General">
					<BaseControl>
						<ToggleControl
							label="Use Hatched Background"
							help={ attributes.isHatched ? 'Has hatched background.' : 'No hatched background.' }
							checked={ attributes.isHatched }
							onChange={ (checked) => setAttributes({isHatched: checked}) }
						/>
					</BaseControl>
				</PanelBody>
				<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>
		</>
	)

}

export default edit;