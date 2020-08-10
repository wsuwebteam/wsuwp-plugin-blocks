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
			<pre>EM Stat</pre>

			<InspectorControls>
				<PanelBody title="General"></PanelBody>
				<BaseControl label="Label Goes here">	

				</BaseControl>
			</InspectorControls>
		</>
	)

}

export default edit;