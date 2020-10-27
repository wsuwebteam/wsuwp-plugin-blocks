const {
	ToggleControl,
} = wp.components;


const BleedRightControl = ( { attributes, setAttributes } ) => {

	return (
		<ToggleControl
			label="Bleed Right"
			checked={ attributes.bleedRight }
			onChange={ ( bleedRight ) => setAttributes( { bleedRight } ) }
		/>
	)

}

const bleedRightControlAtts = {
	bleedRight: {
		type: 'boolean',
		default: false,
	},
}

export { BleedRightControl, bleedRightControlAtts };
