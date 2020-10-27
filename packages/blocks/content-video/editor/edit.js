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

import { SelectIcon, SpacingSelector, SizeUnitControl } from '../../../block-controls';
import { empty } from '../../../block-components';

import './style.scss';

const edit = ( props ) => { 

	const { attributes, setAttributes, isSelected, toggleSelection } = props;

	const minWidth = attributes.naturalWidth < attributes.naturalHeight ? MIN_WIDTH : MIN_WIDTH * attributes.ratio;
	const minHeight = attributes.naturalHeight < attributes.naturalWidth ? MIN_WIDTH : MIN_WIDTH / attributes.ratio;
	
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
						label="Video Source"
						value={ attributes.srcType }
						options={[
							{ label: 'YouTube', value: 'youtube' },
							{ label: 'Vimeo', value: 'vimeo' },
							{ label: 'Custom URL', value: 'custom', disabled },
						]}
						onChange={(srcType) => setAttributes({ srcType: srcType })}
					/>
					
					{ attributes.srcType == 'media' &&
						<MediaUploadCheckControl attributes={attributes} setAttributes={setAttributes} />
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
					<SizeUnitControl attributes={attributes} setAttributes={setAttributes} />
					<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>

			<Placeholder label="Video" instructions="Add the URL for which your video is hosted!" icon="dashicons-video-alt3">
				<TextControl
					label="Url"
					value={ attributes.url }
					onChange={ ( url ) => setAttributes( { url: url } ) }
				/>
			</Placeholder>

		</>
	)
}

export default edit;
