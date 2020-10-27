const {
	ToggleControl,
} = wp.components;


const BleedLeftControl = ( { attributes, setAttributes } ) => {

	return (
		<ToggleControl
			label="Bleed Left"
			checked={ attributes.bleedLeft }
			onChange={ ( bleedLeft ) => setAttributes( { bleedLeft } ) }
		/>
	)

}

const bleedLeftControlAtts = {
	bleedLeft: {
		type: 'boolean',
		default: false,
	},
}

export { BleedLeftControl, bleedLeftControlAtts };