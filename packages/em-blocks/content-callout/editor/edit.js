import React from 'react';

const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InnerBlocks,
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

import './style.scss';
import { PatternControl, spacing } from '../../../block-components';


const edit = ( { className, attributes, setAttributes } ) => {

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
		{ label: 'image-left', value: 'image-left' },
		{ label: 'image-right', value: 'image-right' },
	]

	return (
		<>
			<div class="wsu-b-wrapper">
				<pre>EM Callout</pre>
				<InnerBlocks
					templateLock={ false }
				/>
			</div>

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
						label="Caption"
						value={attributes.description}
						onChange={(description) => setAttributes({ description})}
						placeholder={'Enter caption here.'}
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
						label="Style"
						value={attributes.style}
						onChange={ (style) => setAttributes( { style } ) }
						options={
							[
								{label:'Default',value:'default'},
								{label:'Overlay',value:'overlay'},
							]
						}
					/>
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
					<SelectControl
						label="Border Color"
						value={attributes.borderColor}
						onChange={ (borderColor) => setAttributes( { borderColor } ) }
						options={
							[
								{label:'Default',value:'default'},
								{label:'Crimson',value:'crimson'},
								{label:'None',value:'none'},
							]
						}
					/>
					<ToggleControl
						label="Is Notched"
						help={ attributes.isNotched ? 'Has image notch.' : 'No image notch.' }
						checked={ attributes.isNotched }
						onChange={ ( value ) => setAttributes( {isNotched: value})}
					/>
					<ToggleControl
						label="Bleed Image"
						checked={ attributes.bleedImage }
						onChange={ (value) => setAttributes( {bleedImage: value})}
					/>
					<PatternControl
						label="Pattern Classes"
						value={attributes.patterns}
						onChange={(patterns) => setAttributes({ patterns})}
						placeholder={'Enter pattern classes here.'}
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
		</>
	)

}

export default edit;