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
	PanelRow,
	ToggleControl,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl,
	CheckboxControl,
	RangeControl
} = wp.components;


const edit = ( { className, attributes, setAttributes } ) => {

	console.log(attributes);

	return (
		<>
			<pre>EM Stat</pre>

			<InspectorControls>
				<PanelBody title="General">
					<BaseControl>
						<TextControl
							label="Value / Number"
							value={ attributes.value }
							onChange={ (value) => setAttributes({ value: Number(value) }) }
							placeholder= { 100 }
							type="number"
						/>
						<TextControl
							label="Label"
							value={ attributes.label }
							onChange={ (label) => setAttributes({ label }) }
							placeholder= { 'Enter stat label here.' }
						/>
						<TextControl
							label="Description"
							value={ attributes.description }
							onChange={ (description) => setAttributes({ description }) }
							placeholder= { 'Enter stat description here.' }
						/>
						<TextControl
							label="Prefix"
							value={ attributes.prefix }
							onChange={ (prefix) => setAttributes({ prefix }) }
							placeholder= { 'Enter stat prefix here.' }
						/>
						<TextControl
							label="Suffix"
							value={ attributes.suffix }
							onChange={ (suffix) => setAttributes({ suffix }) }
							placeholder={ 'Enter stat suffix here.' }
						/>
						<TextControl
							label="Separator"
							value={ attributes.separator }
							onChange={ ( separator ) => setAttributes({ separator }) }
							placeholder={'Enter stat separator here.' }
						/>
						<RangeControl
							label="Animation Duration"
							value={ attributes.duration }
							onChange={ ( duration ) => setAttributes({ duration }) }
							min={ 0 }
							max={ 10 }
							step={ 0.5 }
							help="In seconds"
						/>
						<SelectControl
							label="Alignment"
							value=''
							options={[
								{
									label: 'Center',
									value: ''
								},
								{
									label: 'Left',
									value: 'alignLeft'
								},
								{
									label: 'Right',
									value: 'alignRight'
								}
							]}
						/>
						<ToggleControl
							label="Enable Dark Mode"
							help={ attributes.isDark ? 'Dark mode is enabled.' : 'Using default.' }
							checked={ attributes.isDark }
							onChange={ (checked) => setAttributes({isDark: checked}) }
						/>

					</BaseControl>
				</PanelBody>
			</InspectorControls>
		</>
	)

}

export default edit;