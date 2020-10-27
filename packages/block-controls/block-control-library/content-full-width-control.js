const {
	ToggleControl,
} = wp.components;


const ContentFullWidthControl = ( { attributes, setAttributes } ) => {

	return (
		<ToggleControl
			label="Full Width Content"
			checked={ attributes.contentFullWidth }
			onChange={ ( contentFullWidth ) => setAttributes( { contentFullWidth } ) }
		/>
	)

}

const contentFullWidthControlAtts = {
	contentFullWidth: {
		type: 'boolean',
		default: false,
	},
}

export { ContentFullWidthControl, contentFullWidthControlAtts };
