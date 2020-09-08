import React from 'react';

const { __ } = wp.i18n;
const { 
	BlockControls,
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	AlignmentToolbar,
} = wp.blockEditor;

const {
	Panel,
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

const { WsuPageBanner } = wsu_wds.components;

import './style.scss';
import { PatternControl } from '../../../block-components'; // TODO: Move PatternControl from block-components to block-controls
import { SpacingSelector } from '../../../block-controls';

const edit = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
					<TextControl
						label="Title"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						placeholder={'Add Title Text'}
					/>
					<TextControl
						label="Eyebrow Header"
						value={attributes.eyebrowHeader}
						onChange={(eyebrowHeader) => setAttributes({ eyebrowHeader })}
						placeholder={'Add Eyebrow Header Text'}
					/>
					<Panel>
						<PanelBody title="Background" initialOpen={false}>
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
										<BaseControl label="Add/Replace Image">
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
					<SelectControl
						label="Overlay"
						value={attributes.overlay}
						onChange={ (overlay) => setAttributes( { overlay } ) }
						options={
							[
								{ label: 'Default', value: 'default' },
								{ label: 'Gray', value: 'gray' },
								{ label: 'Black', value: 'black' },
							]
						}
					/>
					<SelectControl
						label="Title Tag"
						value={attributes.titleTag}
						onChange={ (titleTag) => setAttributes( { titleTag } ) }
						options={
							[
								{ label: 'H1', value: 'h1' },
								{ label: 'H2', value: 'h2' },
								{ label: 'H3', value: 'h3' },
								{ label: 'H4', value: 'h4' },
								{ label: 'H5', value: 'h5' },
								{ label: 'H6', value: 'h6' },
							]
						}
					/>
					{/* TODO: Abstract into reusable "accesibility warning" component */}
					{attributes.titleTag == 'h1' && 
						<div style={{background: '#fff491', padding: '16px', borderRadius: '10px', marginBottom: '16px'}}>
							<div style={{fontWeight: 'bold'}}>Accessibility Warning</div> 
							<p style={{marginBottom: '0'}}>Make sure that you are not using more than one H1 on your page! See <a href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html">WCAG 1.3.1 Info and Relationships</a> for more information.</p>
						</div>
					}
					<AlignmentToolbar
						value={ attributes.textAlign }
						onChange={ ( textAlign ) => setAttributes( { textAlign } ) }
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
					<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>
			
			<WsuPageBanner
				title={
					<RichText
						tagName="div"
						value={ attributes.title }
						onChange={ ( title ) => setAttributes( { title } ) }
						multiline={'false'}
						allowedFormats={[]}
						placeholder='Add Title Text'
					/>
				}
				eyebrowHeader={
					<RichText
						tagName="div"
						value={ attributes.eyebrowHeader }
						onChange={ ( eyebrowHeader ) => setAttributes( { eyebrowHeader } ) }
						multiline={'false'}
						allowedFormats={[]}
						placeholder='Add Eyebrow Header Text'
					/>
				}
				imageSrc={attributes.imageSrc}
				imageAlt={attributes.imageAlt}
				imageCaption={attributes.imageCaption}
				height={attributes.height}
				isNotched={attributes.isNotched}
				isFullBleed={attributes.isFullBleed}
				textAlign={attributes.textAlign}
				overlay={attributes.overlay}
				titleTag={attributes.titleTag}
			/>
		</>
	)
}

export default edit;