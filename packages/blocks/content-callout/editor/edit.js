

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
} = wp.blockEditor;

const {
	Panel,
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

const { WsuCallout } = wsu_wds.components;

import '@wsuwebteam/web-design-system/packages/components/content-callout/style.scss';
import { SpacingSelector } from '../../../block-controls';

const edit = ( { className, attributes, setAttributes } ) => {

	let shapeOptions = [
		{ label: 'Default', value: 'default' },
		{ label: 'square', value: 'square' },
		{ label: 'portrait', value: 'portrait' },
		{ label: 'landscape', value: 'landscape' },
		{ label: 'video', value: 'video' },
		{ label: 'circle', value: 'circle' },
	]

	let imageSizeOptions = [
		{ label: 'Default', value: 'default' },
		{ label: 'xsmall', value: 'xsmall' },
		{ label: 'small', value: 'small' },
		{ label: 'medium', value: 'medium' },
		{ label: 'large', value: 'large' },
	]

	let layoutOptions = [
		{ label: 'Default', value: 'default' },
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
					<Panel>
						<PanelBody title="Image" initialOpen={false}>
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
						</PanelBody>
					</Panel>
				</PanelBody>
				<PanelBody title="Style" initialOpen={false}>
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
					<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>
			{console.log(attributes)}
			<WsuCallout
				imageAlt={attributes.imageAlt}
				imageSize={attributes.imageSize}
				imageSrc={attributes.imageSrc}
				shape={attributes.shape}
				link={attributes.link}
				title={
					<RichText
						tagName="span"
						className='wsu-c-callout__title-control'
						value={attributes.title }
						onChange={ ( title ) => setAttributes( { title } ) }
						multiline={'false'}
						allowedFormats={[]}
						placeholder='Title Text Here'
					/>
				}
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
			</WsuCallout>
		</>
	)

}



export default edit;