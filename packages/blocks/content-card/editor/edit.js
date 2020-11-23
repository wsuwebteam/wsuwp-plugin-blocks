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
import { SpacingSelector,
	SpacingPanelVertical } from '../../../block-controls';
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

	const cardTypeOptions = [ 
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
						options={ cardTypeOptions }
						onChange={ ( cardType ) => { setAttributes( { cardType: cardType } ) } }
						value={ attributes.cardType }
					/>

					{/* Show fields based on cardType */}

					{ attributes.cardType == 'default' && <DefaultCardControls attributes={attributes} setAttributes={setAttributes} /> }

					{ attributes.cardType == 'person' && <PersonCardControls attributes={attributes} setAttributes={setAttributes} /> }

					{ attributes.cardType == 'news' && <NewsCardControls attributes={attributes} setAttributes={setAttributes} /> }
					
					{ attributes.cardType == 'custom' && <CustomCardControls attributes={attributes} setAttributes={setAttributes} /> }

					<Panel>
						<PanelBody title="Image" initialOpen={ false }>
							{ attributes.imageSrc &&
								<BaseControl
									label="Focal Point Picker"
									help="Select where you would like the image to resize around."
								>
									<FocalPointPicker
										url={attributes.imageSrc}
										dimensions={attributes.imageDimensions}
										value={attributes.imageFocalPoint}
										onChange={(focalPoint) => setAttributes({ imageFocalPoint: focalPoint })}
									/>
								</BaseControl>
							}

							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => setAttributes({ imageSrc: media.url })}
									allowedTypes="image/*"
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
				<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>


			{ attributes.cardType == 'default' && <DefaultCard attributes={attributes} setAttributes={setAttributes} /> }

			{ attributes.cardType == 'person' && <PersonCard attributes={attributes} setAttributes={setAttributes} /> }

			{ attributes.cardType == 'news' && <NewsCard attributes={attributes} setAttributes={setAttributes} /> }

			{ attributes.cardType == 'custom' && <CustomCard attributes={attributes} setAttributes={setAttributes} InnerBlocks={InnerBlocks}/> }

		</>
	)
}

export default edit;