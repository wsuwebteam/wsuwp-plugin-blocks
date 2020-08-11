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

const edit = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			<pre>EM Separator</pre>

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
						<BaseControl>	
							<ToggleControl
								label="Show More Indicator"
								help={ attributes.showMoreIndicator? 'Displays a "show more" indicator.' : 'No "show more" indicator is visible.' }
								checked={ attributes.showMoreIndicator }
								onChange={ (checked) => setAttributes({showMoreIndicator: checked}) }
							/>
						</BaseControl>
					</PanelBody>
			</InspectorControls>
		</>
	)

}

export default edit;