const { __ } = wp.i18n;

const {
	RichText,
	MediaUpload,
	MediaUploadCheck,
	URLInput,
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

const edit = ({ className, attributes, setAttributes }) => {
	return (
		<>
			{
				<InspectorControls>
					<PanelBody title="General">
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

						<TextControl
							label="Image Caption"
							value={attributes.img_caption}
							onChange={(img_caption) => setAttributes({ img_caption })}
							placeholder={'Enter image caption text here.'}
						/>

						<TextControl
							label="Button Text"
							value={attributes.button_text}
							onChange={(button_text) => setAttributes({ button_text })}
							placeholder={'Enter button text here.'}
						/>

						<BaseControl label="Button Link Destination">
							<URLInput
								id="bannerButtonLink"
								className={'wsu-c-block__banner__editor__content__link'}
								value={attributes.url}
								onChange={(url, post) => setAttributes({ url })}
								placeholder={'Button Link'}
								isFullWidth
							/>
						</BaseControl>

						<SelectControl
							label="Display Style"
							value=''
							options={[
								{ label: 'Default', value: 'default' },
								{ label: 'San Juan', value: 'san-juan' },
								{ label: 'Olympic', value: 'olympic' }
							]}
						/>
					</PanelBody>

					<PanelBody title="Background" initialOpen={false}>
						<BaseControl
							label="Focal Point Picker"
							help="Select where you would like the background to resize around."
						>
							<FocalPointPicker
								url={attributes.img_src}
								dimensions={attributes.img_dimensions}
								value={attributes.img_focal_point}
								onChange={(focalPoint) => setAttributes({ img_focal_point: focalPoint })}
							/>
						</BaseControl>

						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => setAttributes({ img_src: media.url })}
								// allowedTypes={ALLOWED_MEDIA_TYPES}
								// value={mediaId}
								render={({ open }) => (
									<BaseControl label="Replace Background Image">
										<Button isLink onClick={open}>Open Media Library</Button>
									</BaseControl>
								)}
							/>
						</MediaUploadCheck>
					</PanelBody>
				</InspectorControls>
			}
			<div className="wsu-c-block__banner__wrapper">
				<div className="wsu-c-hero__wrapper">
					<div className="wsu-c-hero__container" style={{ backgroundImage: "url(" + attributes.img_src + ")", backgroundPositionX: (attributes.img_focal_point.x * 100) + '%', backgroundPositionY: (attributes.img_focal_point.y * 100) + '%' }}>
						<div className="wsu-c-hero__content">
							<div className="wsu-c-hero__title">
								<RichText
									tagName="div"
									value={attributes.title}
									onChange={(title) => setAttributes({ title })}
									allowedFormats={[]}
								/>
							</div>
							<div className="wsu-c-hero__subtitle">
								<RichText
									tagName="div"
									value={attributes.subtitle}
									onChange={(subtitle) => setAttributes({ subtitle })}
									allowedFormats={[]}
								/>
							</div>
							<div className="wsu-c-hero__caption">
								<RichText
									tagName="div"
									value={attributes.caption}
									onChange={(caption) => setAttributes({ caption })}
									allowedFormats={[]}
									placeholder={'Enter caption text here.'}
								/>
							</div>
							<div className="wsu-c-button wsu-button-sm">
								<a href="#" className="wsu-c-button_link">
									<RichText
										tagName="div"
										value={attributes.button_text}
										onChange={(button_text) => setAttributes({ button_text })}
										allowedFormats={[]}
									/>
								</a>
							</div>
						</div>
						<p className="wsu-c-hero__image-caption">
							<RichText
								tagName="div"
								value={attributes.img_caption}
								onChange={(img_caption) => setAttributes({ img_caption })}
								allowedFormats={[]}
							/>
						</p>
					</div>
				</div>
			</div>
		</>
	)

}



export default edit;
