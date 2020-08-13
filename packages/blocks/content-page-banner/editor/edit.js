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

	return (
		<>
			<pre>Page Banner</pre>
			<InspectorControls>
				<PanelBody title="General">
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
				<PanelBody title="Display" initialOpen={false}>
					<SelectControl
						label="Height"
						value={attributes.height}
						onChange={ (height) => setAttributes( { height } ) }
						options={
							[
								{ label: 'Default', value: 'default' },
								{ label: 'Xsmall', value: 'xsmall' },
								{ label: 'Small', value: 'small' },
								{ label: 'Medium', value: 'medium' },
								{ label: 'Medium-large', value: 'medium-large' },
								{ label: 'Large', value: 'large' },
								{ label: 'Xlarge', value: 'xlarge' },
								{ label: 'Full', value: 'full' },
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
						label="Bleed Left & Right"
						checked={ attributes.isFullBleed }
						onChange={ (value) => setAttributes( {isFullBleed: value})}
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