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
} = wp.blockEditor;

const {
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

const { WsuCard } = wsu_wds.components;

import './style.scss';
import { spacing } from '../../../block-components';
import { SpacingSelector } from '../../../block-controls';
import {
	DefaultCard,
	DefaultCardControls,
	PersonCard,
	PersonCardControls,
	NewsCard,
	NewsCardControls,
	CustomCard,
	CustomCardControls
} from '../../../block-controls/card-type-controls';

const edit = ( { className, attributes, setAttributes } ) => {

	const cardTypes = [ 
		{ value: 'default', label: 'Default' },
		{ value: 'person', label: 'Person' },
		{ value: 'news', label: 'News' },
		{ value: 'custom', label: 'Custom' }
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
			
					<SelectControl
						label="Type"
						options={ cardTypes }
						onChange={ ( cardType ) => { setAttributes( { cardType } ) } }
						value={ attributes.cardType }
					/>

					{/* Show fields based on cardType */}

					{ attributes.cardType == 'default' && <DefaultCardControls attributes={attributes} setAttributes={setAttributes} /> }

					{ attributes.cardType == 'person' && <PersonCardControls attributes={attributes} setAttributes={setAttributes} /> }

					{ attributes.cardType == 'news' && <NewsCardControls attributes={attributes} setAttributes={setAttributes} /> }
					
					{ attributes.cardType == 'custom' && <CustomCardControls attributes={attributes} setAttributes={setAttributes} /> }

					<Panel>
						<PanelBody title="Image" initialOpen={ false }>
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
						</PanelBody>
					</Panel>
				</PanelBody>
				<PanelBody title="Style" initialOpen={false}>
					<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>

			{ attributes.cardType == 'default' && <DefaultCard attributes={attributes} setAttributes={setAttributes} /> }
			{ attributes.cardType == 'person' && <PersonCard attributes={attributes} setAttributes={setAttributes} /> }
			{ attributes.cardType == 'news' && <NewsCard attributes={attributes} setAttributes={setAttributes} /> }
			{ attributes.cardType == 'custom' && <CustomCard attributes={attributes} setAttributes={setAttributes} /> }
		</>
	)
}

export default edit;