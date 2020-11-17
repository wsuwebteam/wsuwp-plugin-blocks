
const {
	MediaUpload,
	MediaUploadCheck,
} = wp.blockEditor;

const {
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;


const BackgroundImageControl = ( { attributes, setAttributes } ) => {

	return (
		<>
			{ attributes.backgroundImageSrc &&
				<BaseControl
					label="Focal Point Picker"
					help="Select where you would like the background to resize around."
				>
					<FocalPointPicker
						url={attributes.backgroundImageSrc}
						dimensions={attributes.backgroundImageDimensions}
						value={attributes.backgroundImageFocalPoint}
						onChange={(focalPoint) => setAttributes({ backgroundImageFocalPoint: focalPoint })}
					/>
				</BaseControl>
			}
			<MediaUploadCheck>
				<MediaUpload
					onSelect={(media) => setAttributes({ backgroundImageSrc: media.url })}
					render={({ open }) => (
						<BaseControl label="Replace Background Image">
							<Button isLink onClick={open}>Open Media Library</Button>
						</BaseControl>
					)}
				/>
			</MediaUploadCheck>
		</>
	)

}

const backgroundImageControlAtts = {
	backgroundImageSrc: {
		type: 'string',
		default: '',
	},
	backgroundImageAlt: {
		type: 'string',
		default: '',
	},
	backgroundImageFocalPoint: {
		type: 'object',
		default: { x:50,y:50},
	},
	backgroundImageDimensions: {
		type: 'object',
		default: {
			width: 1070,
			height: 500
		}
	},
}

export { BackgroundImageControl, backgroundImageControlAtts };