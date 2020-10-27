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
import { GeneralPanel, LayoutPanel, SpacingUnitControlVertical} from '../../../block-controls';
import { empty } from '../../../block-components';

import './style.scss';

const edit = ( props ) => { 

	const { attributes, setAttributes, isSelected, toggleSelection } = props;
	
	return (
		<>
			<BlockControls>
				<BlockAlignmentToolbar 
					onChange={(alignment) => setAttributes({ alignment: alignment })}
				/>
			</BlockControls>
			<InspectorControls>
				<GeneralPanel>
					<TextControl
						label="Video Url"
						value={ attributes.url }
						onChange={ ( url ) => setAttributes( { url: url } ) }
						help="Make sure to include the full video URL (not a shortened version of it). Currently supports YouTube and Vimeo videos."
					/>
				</GeneralPanel>
			</InspectorControls>

			<Placeholder label="Video" instructions="Add the URL for which your video is hosted!" icon="video-alt3">
				<TextControl
					label="Video Url"
					value={ attributes.url }
					onChange={ ( url ) => setAttributes( { url: url } ) }
					help="Make sure to include the full video URL (not a shortendered version of it). Currently supports YouTube and Vimeo videos."
				/>
			</Placeholder>

		</>
	)
}

export default edit;
