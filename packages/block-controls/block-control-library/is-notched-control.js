const {
	ToggleControl,
} = wp.components;


const IsNotchedControl = ( { attributes, setAttributes } ) => {

	return (
		<ToggleControl
			label="Is Notched"
			checked={ attributes.isNotched }
			onChange={ ( isNotched ) => setAttributes( { isNotched } ) }
		/>
	)

}

const isNotchedControlAtts = {
	isNotched: {
		type: 'boolean',
		default: false,
	},
}

export { IsNotchedControl, isNotchedControlAtts };