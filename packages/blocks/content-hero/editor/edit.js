const { __ } = wp.i18n;

const {
	RichText,
	MediaUpload,
	MediaUploadCheck,
	URLInput,
	InspectorControls,
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

import './style.scss';

import '@wsuwebteam/build-tools/js/helpers/ranges';
import { wsuRange } from '@wsuwebteam/build-tools/js/helpers/ranges';
import { SpacingSelector } from '../../../block-controls';

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
							value={attributes.imgCaption}
							onChange={(imgCaption) => setAttributes({ imgCaption })}
							placeholder={'Enter image caption text here.'}
						/>
						<Panel>
							<PanelBody title="Background" initialOpen={false}>
								{ attributes.imgSrc &&
									<BaseControl
										label="Focal Point Picker"
										help="Select where you would like the background to resize around."
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
											<BaseControl label="Replace Background Image">
												<Button isLink onClick={open}>Open Media Library</Button>
											</BaseControl>
										)}
									/>
								</MediaUploadCheck>
							</PanelBody>
							<PanelBody title="Button" initialOpen={false}>
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

								<SelectControl
									label="Button Style"
									value=''
									options={[
										{ label: 'Default', value: 'default' },
									]}
								/>
								
							</PanelBody>
						</Panel>
					</PanelBody>
					
					<PanelBody title="Style" initialOpen={false}>
						<SelectControl
							label="Display Style"
							value=''
							options={[
								{ label: 'Default', value: 'default' },
							]}
						/>
						<SelectControl
							label="Banner Height"
							value={attributes.verticalSpacing}
							options={[
								{ label: 'Default', value: 'default' },
								{ label: 'Extra Small', value: 'xsmall' },
								{ label: 'Small', value: 'small' },
								{ label: 'Medium', value: 'medium' },
								{ label: 'Large', value: 'large' },
								{ label: 'Full', value: 'full' },
							]}
							onChange={(verticalSpacing) => setAttributes({ verticalSpacing })}
						/>
						<SpacingSelector />
					</PanelBody>
				</InspectorControls>
			}
			<div className="wsu-c-block__banner__wrapper">
				<div className="wsu-c-hero__wrapper">
					<div className="wsu-c-hero__container" style={{ backgroundImage: "url(" + attributes.imgSrc + ")", backgroundPositionX: (attributes.imgFocalPoint.x * 100) + '%', backgroundPositionY: (attributes.imgFocalPoint.y * 100) + '%' }}>
						<div className="wsu-c-hero__content">
							<div className="wsu-c-hero__title">
								<RichText
									tagName="div"
									value={attributes.title}
									onChange={(title) => setAttributes({ title })}
									allowedFormats={[]}
									placeholder="Enter title text here"
								/>
							</div>
							<div className="wsu-c-hero__subtitle">
								<RichText
									tagName="div"
									value={attributes.subtitle}
									onChange={(subtitle) => setAttributes({ subtitle })}
									allowedFormats={[]}
									placeholder="Enter subtitle text here"
								/>
							</div>
							<div className="wsu-c-hero__caption">
								<RichText
									tagName="div"
									value={attributes.caption}
									onChange={(caption) => setAttributes({ caption })}
									allowedFormats={[]}
									placeholder={'Enter caption text here'}
								/>
							</div>
							<div href="#" className="wsu-c-button">
								<RichText
									tagName="div"
									value={attributes.buttonText}
									onChange={(buttonText) => setAttributes({ buttonText })}
									allowedFormats={[]}
									placeholder={'Button Text Here'}
								/>
							</div>
						</div>
						<div className="wsu-c-hero__image-caption">
							<RichText
								tagName="span"
								value={attributes.imgCaption}
								onChange={(imgCaption) => setAttributes({ imgCaption })}
								allowedFormats={[]}
								placeholder="Enter caption text here"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)

}



export default edit;