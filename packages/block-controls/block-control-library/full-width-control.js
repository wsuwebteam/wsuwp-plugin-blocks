const {
	ToggleControl,
} = wp.components;


const FullWidthControl = ( { attributes, setAttributes } ) => {

	return (
		<ToggleControl
			label="Full Width Background"
			checked={ attributes.fullWidth }
			onChange={ ( fullWidth ) => setAttributes( { fullWidth } ) }
		/>
	)

}

const fullWidthControlAtts = {
	fullWidth: {
		type: 'boolean',
		default: false,
	},
}

export { FullWidthControl, fullWidthControlAtts };