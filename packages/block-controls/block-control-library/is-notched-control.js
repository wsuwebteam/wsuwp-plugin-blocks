const {
	ToggleControl,
} = wp.components;


const IsNotchedControl = ( { attributes, setAttributes } ) => {

	return (
		<div style={{ marginTop: '1em' }}>
			<ToggleControl
				label="Is Notched"
				checked={ attributes.isNotched }
				onChange={ ( isNotched ) => setAttributes( { isNotched } ) }
			/>
		</div>
	)

}

const isNotchedControlAtts = {
	isNotched: {
		type: 'boolean',
		default: false,
	},
}

export { IsNotchedControl, isNotchedControlAtts };