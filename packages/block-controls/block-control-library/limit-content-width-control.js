const {
	ToggleControl,
} = wp.components;


const LimitContentWidthControl = ( { attributes, setAttributes } ) => {

	return (
		<ToggleControl
			label="Limit Content Width"
			checked={ attributes.limitContentWidth }
			onChange={ ( limitContentWidth ) => setAttributes( { limitContentWidth } ) }
		/>
	)

}

const limitContentWidthControlAtts = {
	limitContentWidth: {
		type: 'boolean',
		default: false,
	},
}

export { LimitContentWidthControl, limitContentWidthControlAtts };
