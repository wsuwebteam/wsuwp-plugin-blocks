const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
} = wp.editor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;


import './style.scss';


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
			<InspectorControls>
				<PanelBody title="General">
					{ attributes.imgSrc &&
						<BaseControl
							label="Focal Point Picker"
							help="Select where you would like the image to resize around."
						>
							<FocalPointPicker
								url={attributes.imgSrc}
								dimensions={attributes.imgDimensions}
								value={attributes.imgFocalPoint}
								onChange={(focalPoint) => setAttributes({ imgFocalPoint: focalPoint })}
							/>
						</BaseControl>
					}

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ imgSrc: media.url })}
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
						label="Title"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						placeholder={'Enter title text here.'}
					/>

					<TextControl
						label="Subtitle"
						value={attributes.subtitle}
						onChange={(subtitle) => setAttributes({ subtitle })}
						placeholder={'Enter subtitle text here.'}
					/>
					<TextControl
						label="Caption"
						value={attributes.caption}
						onChange={(caption) => setAttributes({ caption })}
						placeholder={'Enter caption text here.'}
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
			<div className="wsu-c-card__wrapper">
				<div className="wsu-c-card__container">
					<div className="wsu-c-card__content">
						<div className="wsu-c-card__photo-frame">
							<div className="wsu-c-card__photo-wrapper">
								<img
								className="wsu-c-card__photo"
								src={attributes.imgSrc}
								alt={attributes.imgCaption}
								data-object-fit=""
								/>
							</div>
						</div>
						<h3 className="wsu-c-card__heading">
							<RichText
									tagName="div"
									value={attributes.title}
									onChange={(title) => setAttributes({ title })}
									allowedFormats={[]}
									placeholder="Enter title text here"
								/></h3>
						<div className="wsu-c-card__subtitle">
							<RichText
									tagName="div"
									value={attributes.subtitle}
									onChange={(subtitle) => setAttributes({ subtitle })}
									allowedFormats={[]}
									placeholder="Enter subtitle text here"
								/></div>
						<div className="wsu-c-card__position-title"><RichText
									tagName="div"
									value={attributes.positionTitle}
									onChange={(positionTitle) => setAttributes({ positionTitle })}
									allowedFormats={[]}
									placeholder="Enter position text here"
								/></div>
						<p className="wsu-c-card__description">
							<RichText
									tagName="div"
									value={attributes.caption}
									onChange={(caption) => setAttributes({ caption })}
									allowedFormats={[]}
									placeholder={'Enter caption text here.'}
								/>
						</p>
					</div>
				</div>
			</div>

		</>
	)

}



export default edit;