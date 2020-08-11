const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
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


const edit = ( { className, attributes, setAttributes } ) => {

	console.log(attributes);

	return (
		<>
			<pre>EM Callout</pre>

			<InspectorControls>
				<PanelBody title="General">
				{ attributes.imageSrc &&
					<BaseControl
						label="Focal Point Picker"
						help="Select where you would like the background to resize around."
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
			</InspectorControls>
		</>
	)

}

export default edit;