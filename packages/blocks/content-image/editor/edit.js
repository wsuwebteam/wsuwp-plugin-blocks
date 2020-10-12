const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
	URLPopover,
} = wp.blockEditor;

const {
	BaseControl,
	ButtonGroup,
	Button,
	Panel,
	PanelRow,
	PanelBody,
	TextControl,
	SelectControl,
	Placeholder,
	FormFileUpload,
	ResizableBox,
	__experimentalUnitControl
} = wp.components;

const { WsuImage, WsuHr, WsuHeading, WsuIcon, WsuP } = wsu_wds.components; 

import { SelectIcon, SpacingSelector } from '../../../block-controls';
import { empty } from '../../../block-components';

import './style.scss';

const edit = ( { className, attributes, setAttributes, isSelected, toggleSelection } ) => { 

	return (
		<>
			<BlockControls>
				<BlockAlignmentToolbar 
					onChange={(alignment) => setAttributes({ alignment: alignment })}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title="General">
					<SelectControl
						label="Image Source"
						value={ attributes.srcType }
						options={[
							{ label: 'Media Library', value: 'media' },
							{ label: 'Custom URL', value: 'url' },
						]}
						onChange={(srcType) => setAttributes({ srcType: srcType })}
					/>
					{ attributes.srcType == 'media' &&
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => setAttributes({ src: media.url, alt: media.alt })}
								allowedTypes="image/*"
								render={({ open }) => (
									<BaseControl
										label="Add/Update Image"
									>
										<Button isPrimary onClick={open}>Open Media Library</Button>
									</BaseControl>
								)}
							/>
						</MediaUploadCheck>
					}

					{ attributes.srcType == 'url' &&
						<TextControl
							label="Custom Image URL"
							value={ attributes.src }
							onChange={ ( src ) => setAttributes( { src: src } ) }
						/>
					}

					<WsuHr />

					<TextControl
						label="Alt Text"
						value={attributes.alt}
						onChange={(alt) => setAttributes({ alt })}
						placeholder={'Enter image alt text here.'}
					/>

					{/* IDEA: add lightbox view */}
					{/* IDEA: make images linkable */}
				</PanelBody>
				<PanelBody title="Style" initialOpen={false}>
					<PanelRow>
						<span>Width</span>
						{console.log('width ' + attributes.width)}
						<__experimentalUnitControl
							value={ attributes.width }
							units={[
								{ value: 'px', label: 'px', default: 0 },
								{ value: '%', label: '%', default: 0 },
							]}
							onChange={(value) => console.log(value)}
						/>
						
						<span>Height</span>
						{console.log('height ' + attributes.height)}
						<__experimentalUnitControl 
							value={ attributes.height }
							units={[
								{ value: 'px', label: 'px', default: 0 },
								{ value: '%', label: '%', default: 0 },
							]}
							onChange={(value) => console.log(value)}
						/>
					</PanelRow>

					<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>

			{ !attributes.src && 
				<>
					<Placeholder label="Image" instructions="Upload an image file, pick one from your media library, or add one with a URL." icon={ <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00031 6C9.10311 6 10.0003 6.8972 10.0003 8C10.0003 9.1028 9.10311 10 8.00031 10C6.89751 10 6.00031 9.1028 6.00031 8C6.00031 6.8972 6.89751 6 8.00031 6ZM8.00031 4C5.79121 4 4.00031 5.7909 4.00031 8C4.00031 10.2091 5.79121 12 8.00031 12C10.2094 12 12.0003 10.2091 12.0003 8C12.0003 5.7909 10.2095 4 8.00031 4Z"/><path d="M9.76431 2L10.2115 2.8944L10.7642 4H12.0003H14.0003V13.0236H2.00031V4H4.00031H5.23641L5.78921 2.8944L6.23641 2H9.76431ZM11.0003 0H5.00031L4.00031 2H2.00031C0.900305 2 0.000305176 2.9 0.000305176 4V13.0236C0.000305176 14.1236 0.900305 15.0236 2.00031 15.0236H14.0003C15.1003 15.0236 16.0003 14.1236 16.0003 13.0236V4C16.0003 2.9 15.1003 2 14.0003 2H12.0003L11.0003 0Z"/></svg> }>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => {
									setAttributes({ src: media.url, alt: media.alt, width: media.width, height: media.height })
								} }
								allowedTypes="image/*"
								render={({ open }) => (
									<Button isPrimary onClick={open}>Open Media Library</Button>
								)}
							/>
						</MediaUploadCheck>
					</Placeholder>
				</>
			}

			{ attributes.src && 
				<ResizableBox
					className={ "wsu-c-image-container wsu-c-image-container--" + attributes.alignment } 
					showHandle={ isSelected }
					enable={{
						top: false,
						right: true,
						bottom: false,
						left: true,
						topRight: false,
						bottomRight: false,
						bottomLeft: false,
						topLeft: false
					}}
					onResizeStop={ ( event, direction, elt, delta ) => {
						console.log('delta height: ' + delta.height);
						console.log('delta Width: ' + delta.width);

						setAttributes( {
							height: parseInt( attributes.height + delta.height, 10 ),
							width: parseInt( attributes.width + delta.width, 10 ),
						} );

						console.log('new height: ' + attributes.height);
						console.log('new Width: ' + attributes.width);
						toggleSelection( true );
					} }
				>
					<WsuImage 
						src={ attributes.src }
						alt={ attributes.alt }
					/>
				</ResizableBox>
			}

			
		</>
	)
}

export default edit;
