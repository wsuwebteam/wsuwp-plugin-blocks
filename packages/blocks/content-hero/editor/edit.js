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

const { WsuHero } = wsu_wds.components;

import './style.scss';

import '@wsuwebteam/build-tools/js/helpers/ranges';
import { wsuRange } from '@wsuwebteam/build-tools/js/helpers/ranges';
import { SpacingSelector, DecoratorControl,
	SpacingPanelVertical } from '../../../block-controls';

const edit = ({ className, attributes, setAttributes }) => {

	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
					<TextControl
						label="Title"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						placeholder={'Add title text'}
					/>
					<TextControl
						label="Subtitle"
						value={attributes.subtitle}
						onChange={(subtitle) => setAttributes({ subtitle })}
						placeholder={'Add subtitle text'}
					/>
					<TextControl
						label="Caption"
						value={attributes.caption}
						onChange={(caption) => setAttributes({ caption })}
						placeholder={'Add caption text'}
					/>
					<TextControl
						label="Image Caption"
						value={attributes.imageCaption}
						onChange={(imageCaption) => setAttributes({ imageCaption })}
						placeholder={'Add image caption text'}
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
								placeholder={'Add button text'}
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
				<DecoratorControl 
						decorators={attributes.decorators}
						onChange={ ( decoratorArray ) => { setAttributes( { decorators:decoratorArray } ) } }
						/>
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
				</PanelBody>
				<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>

			<WsuHero
				title={
					<RichText
						tagName="div"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						allowedFormats={[]}
						placeholder="Add Title Text"
					/>
				}
				titleTag="h2"
				subtitle={
					<RichText
						tagName="div"
						value={attributes.subtitle}
						onChange={(subtitle) => setAttributes({ subtitle })}
						allowedFormats={[]}
						placeholder="Add Subtitle Text"
					/>
				}
				caption={
					<RichText
						tagName="div"
						value={attributes.caption}
						onChange={(caption) => setAttributes({ caption })}
						allowedFormats={[]}
						placeholder={'Add Caption Text'}
					/>
				}
				buttonText={
					<RichText
						tagName="div"
						value={attributes.buttonText}
						onChange={(buttonText) => setAttributes({ buttonText })}
						allowedFormats={[]}
						placeholder={'Add Button Text'}
					/>
				}
				buttonUrl={attributes.buttonUrl}
				backgroundImage={attributes.imgSrc}
				imageCaption={
					<RichText
						tagName="span"
						value={attributes.imageCaption}
						onChange={(imageCaption) => setAttributes({ imageCaption })}
						allowedFormats={[]}
						placeholder="Add image caption text"
					/>
				}
				imageCaptionUrl={attributes.imageCaptionUrl}
				verticalSpacing={attributes.verticalSpacing}
				marginBefore={attributes.marginBefore}
				marginAfter={attributes.marginAfter}
				style={attributes.style}
			/>
		</>
	)

}



export default edit;