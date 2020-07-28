const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
} = wp.editor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;


const edit = ( { className, attributes, setAttributes } ) => {

	let spacing = [
		{ label: 'Default', value: 'default' },
		{ label: 'None', value: 'none' },
		{ label: 'Xsmall', value: 'xsmall' },
		{ label: 'Small', value: 'small' },
		{ label: 'Medium', value: 'medium' },
		{ label: 'Medium-large', value: 'medium-large' },
		{ label: 'Large', value: 'large' },
		{ label: 'Xlarge', value: 'xlarge' },
	];

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ attributes.buttonAlign }
					onChange={ ( buttonAlign ) =>
						setAttributes( { buttonAlign: buttonAlign } )
					}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title="General">
					<TextControl
						label="Button Text"
						value={attributes.buttonText}
						onChange={(buttonText) => setAttributes({ buttonText })}
						placeholder={'Enter button text here.'}
					/>
					<BaseControl label="Button Link Destination">
						<URLInput
							id="bannerButtonLink"
							className={'wsu-c-block__banner__editor__content__link'}
							value={attributes.buttonUrl}
							onChange={(buttonUrl, post) => setAttributes({ buttonUrl })}
							placeholder={'Button Link'}
							isFullWidth
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody title="Display" initialOpen={false}>
					<SelectControl
						label="Shape"
						value={attributes.shape}
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Square', value: 'square' },
							{ label: 'Rounded', value: 'round' },
						]}
						onChange={ ( shape ) => setAttributes({ shape }) }
					/>
					<SelectControl
						label="Color"
						value={attributes.color}
						onChange={ ( color ) => setAttributes({ color }) }
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Crimson', value: 'crimson' },
							{ label: 'White', value: 'white' },
						]}
					/>
					<SelectControl
						label="Size"
						value={attributes.size}
						onChange={ ( size ) => setAttributes({ size }) }
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Small', value: 'small' },
							{ label: 'Medium', value: 'medium' },
							{ label: 'Large', value: 'large' },
						]}
					/>
					<AlignmentToolbar
						value={ attributes.buttonAlign }
						onChange={ ( buttonAlign ) =>
							setAttributes( { buttonAlign: buttonAlign } )
						}
					/>
				</PanelBody>
				<PanelBody title="Layout" initialOpen={false}>
					<SelectControl
						label="Padding Before"
						value={attributes.paddingBefore}
						onChange={ (paddingBefore) => setAttributes( { paddingBefore } ) }
						options={spacing}
					/>
					<SelectControl
						label="Padding After"
						value={attributes.paddingAfter}
						onChange={ (paddingAfter) => setAttributes( { paddingAfter } ) }
						options={spacing}
					/>
					<SelectControl
						label="Margin Before"
						value={attributes.marginBefore}
						onChange={ (marginBefore) => setAttributes( { marginBefore } ) }
						options={spacing}
					/>
					<SelectControl
						label="Margin After"
						value={attributes.marginAfter}
						onChange={ (marginAfter) => setAttributes( { marginAfter } ) }
						options={spacing}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="wsu-c-button__wrapper">
				<RichText
					tagName="div"
					className={ 'wsu-c-button' }
					value={ attributes.buttonText }
					onChange={ ( buttonText ) => setAttributes( { buttonText } ) }
					multiline={'false'}
					allowedFormats={[]}
					placeholder='Button Text Here ...'
				/>
				<URLInput
					className={ className }
					value={ attributes.buttonUrl }
					onChange={ ( buttonUrl, post ) => setAttributes( { buttonUrl } ) }
				/>
			</div>
		</>
	)

}



export default edit;
