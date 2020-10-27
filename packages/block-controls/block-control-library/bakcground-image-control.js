const {
	ToggleControl,
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
						url={attributes.imgSrc}
						dimensions={attributes.imgDimensions}
						value={attributes.backgroundImageFocalPoint}
						onChange={(focalPoint) => setAttributes({ backgroundImageFocalPoint: focalPoint })}
					/>
				</BaseControl>
			}

			<MediaUploadCheck>
				<MediaUpload
					onSelect={(media) => setAttributes({ imgSrc: media.url })}
					// allowedTypes={ALLOWED_MEDIA_TYPES}
					// value={mediaId}
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
		type: 'boolean',
		default: false,
	},
	backgroundImageAlt: {
		type: 'boolean',
		default: false,
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