

import '@wsuwebteam/web-design-system/packages/components/content-callout/content-callout.scss';

import {
	ContentCallout,
	ge
} from '../../../block-components/index'

const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
	MediaUpload,
	MediaUploadCheck,
	InnerBlocks
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
		<InspectorControls>
				<PanelBody title="General">
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
					<TextControl
						label="Video Embed URL"
						value={attributes.videoSrc}
						onChange={(videoSrc) => setAttributes({ videoSrc })}
						placeholder={'Enter Video EMBED url here.'}
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
				<PanelBody title="layout" initialOpen={false}>
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
			<ContentCallout
				imageAlt={attributes.imageAlt}
				imageSize={attributes.imageSize}
				imageSrc={attributes.imageSrc}
				shape={attributes.shape}
				link={attributes.link}
				title={<RichText
					tagName="span"
					className='wsu-c-callout__title-control'
					value={attributes.title }
					onChange={ ( title ) => setAttributes( { title } ) }
					multiline={'false'}
					allowedFormats={[]}
					placeholder='Title Text Here ...'
				/>}
				tag={attributes.tag}
				description={attributes.description}
				layout={attributes.layout}
				verticalAlign={attributes.verticalAlign} 
				isNotched={attributes.isNotched}
				buttonText={attributes.buttonText}
				buttonUrl={attributes.buttonUrl}
				videoSrc={attributes.videoSrc}
				>
				<InnerBlocks
						templateLock={ false }
					/>
			</ContentCallout>
		</>
	)

}



export default edit;