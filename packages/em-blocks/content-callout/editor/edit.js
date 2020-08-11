import React from 'react';

const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	MediaUpload,
	MediaUploadCheck,
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

	let shapeOptions = [
		{ label: 'default', value: 'default' },
		{ label: 'square', value: 'square' },
		{ label: 'portrait', value: 'portrait' },
		{ label: 'landscape', value: 'landscape' },
		{ label: 'video', value: 'video' },
		{ label: 'circle', value: 'circle' },
	]

	let imageSizeOptions = [
		{ label: 'default', value: 'default' },
		{ label: 'xsmall', value: 'xsmall' },
		{ label: 'small', value: 'small' },
		{ label: 'medium', value: 'medium' },
		{ label: 'large', value: 'large' },
	]

	let layoutOptions = [
		{ label: 'default', value: 'default' },
		{ label: 'horizontal', value: 'horizontal' },
		{ label: 'vertical', value: 'vertical' },
	]


	return (
		<>
			<pre>E Callout</pre>

			<InspectorControls>
				<PanelBody title="General">
				<TextControl
						label="Eyebrow Header"
						value={attributes.eyebrowHeader}
						onChange={(eyebrowHeader) => setAttributes({ eyebrowHeader })}
						placeholder={'Enter title text here.'}
					/>
				<TextControl
						label="Title"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						placeholder={'Enter title text here.'}
					/>
					<TextControl
						label="Link"
						value={attributes.link}
						onChange={(link) => setAttributes({ link })}
						placeholder={'Enter URL here.'}
					/>
					{ attributes.imageSrc &&
						<BaseControl
							label="Focal Point Picker"
							help="Select where you would like the image to resize around."
						>
							<FocalPointPicker
								url={attributes.imageSrc}
								dimensions={attributes.imgDimensions}
								value={attributes.imgFocalPoint}
								onChange={(focalPoint) => setAttributes({ imgFocalPoint: focalPoint })}
							/>
						</BaseControl>
					}

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ imageSrc: media.url })}
							// allowedTypes={ALLOWED_MEDIA_TYPES}
							// value={mediaId}
							render={({ open }) => (
								<BaseControl label="Add/Replace Card Image">
									<Button isLink onClick={open}>Open Media Library</Button>
								</BaseControl>
							)}
						/>
					</MediaUploadCheck>
					<TextControl
						label="Button Text"
						value={attributes.buttonText}
						onChange={(buttonText) => setAttributes({ buttonText })}
						placeholder={'Enter button text here.'}
					/>
					<TextControl
						label="Button URL"
						value={attributes.buttonUrl}
						onChange={(buttonUrl) => setAttributes({ buttonUrl })}
						placeholder={'Enter button url here.'}
					/>
				</PanelBody>
				<PanelBody title="Display" initialOpen={false}>
					<SelectControl
						label="Layout"
						value={attributes.layout}
						onChange={ (layout) => setAttributes( { layout } ) }
						options={layoutOptions}
					/>
					<SelectControl
						label="Image Size"
						value={attributes.imageSize}
						onChange={ (imageSize) => setAttributes( { imageSize } ) }
						options={imageSizeOptions}
					/>
					<SelectControl
						label="Shape"
						value={attributes.shape}
						onChange={ (shape) => setAttributes( { shape } ) }
						options={shapeOptions}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	)

}

export default edit;