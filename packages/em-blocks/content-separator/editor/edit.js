const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls
} = wp.blockEditor;

const {
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;


const edit = ( { className, attributes, setAttributes } ) => {

	console.log(attributes);

	return (
		<>
			<pre>EM Separator</pre>

			<InspectorControls>
				<PanelBody title="General"></PanelBody>
				<BaseControl label="Button Link Destination">	
					<ToggleControl
						label="Use Hatched Background"
						help={ attributes.isHatched ? 'Has hatched background.' : 'No hatched background.' }
						checked={ attributes.isHatched !== 'default' ? true : false}
						onChange={ () => setAttributes( {isHatched: true})}
					/>
				</BaseControl>
			</InspectorControls>
		</>
	)

}

export default edit;