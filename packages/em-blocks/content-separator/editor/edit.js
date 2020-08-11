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
								checked={ attributes.isHatched !== 'default' ? true : false}
								onChange={ (current) => current !== true ? setAttributes( {isHatched: 'default'}) : setAttributes( {isHatched: true}) }
							/>
						</BaseControl>
						<BaseControl>	
							<ToggleControl
								label="Show More Indicator"
								help={ attributes.showMoreIndicator ? 'Displays a "show more" indicator.' : 'No indicator visible.' }
								checked={ attributes.showMoreIndicator !== 'default' ? true : false}
								onChange={ (current) => current !== true ? setAttributes( {showMoreIndicator: 'default'}) : setAttributes( {showMoreIndicator: true}) }
							/>
						</BaseControl>
					</PanelBody>
			</InspectorControls>
		</>
	)

}

export default edit;