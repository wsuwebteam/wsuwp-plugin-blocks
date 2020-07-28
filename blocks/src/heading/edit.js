const { __ } = wp.i18n;
const { URLInputButton } = wp.editor;
const { PlainText } = wp.editor;

const {
	PanelBody,
	TextControl,
	SelectControl,
} = wp.components;

const {
	RichText,
	URLInput,
	InspectorControls,
} = wp.blockEditor;


const edit = ( { className, attributes, setAttributes } ) => {

	const { level } = attributes;

	function setLevel( event ) {
        const selected = event.target.querySelector( 'option:checked' );
        setAttributes( { level: selected.value } );
        event.preventDefault();
    }

	return (
		<>
			{
				<InspectorControls>
					<PanelBody title="General">
						<SelectControl
							label="Display Style"
							value={attributes.style}
							onChange={ (style) => setAttributes( { style } ) }
							options={[
								{ label: 'Default', value: 'default' },
								{ label: 'Callout', value: 'callout' },
							]}
						/>
					</PanelBody>
				</InspectorControls>
			}
			<div className="wsu-b-heading__wrapper">
				<form onSubmit={ setLevel } className={ 'wsu-b-heading__level' }>
					<select value={ level } onChange={ setLevel }>
						<option value="h2">H2</option>
						<option value="h3">H3</option>
						<option value="h4">H4</option>
						<option value="h5">H5</option>
					</select>
				</form>
				<RichText
					tagName={"h" + attributes.level }
					className={ 'wsu-b-heading__text' }
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
					multiline={'false'}
					allowedFormats={[]}
					placeholder={'Heading Here ...'}
				/>
			</div>
		</>
	)

}



export default edit;
