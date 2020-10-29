const {
	SelectControl,
} = wp.components;


const fontWeightOptions = [
	{ label: 'Default', value: '' },
	{ label: 'Light', value: 'light' },
	{ label: 'Normal', value: 'normal' },
	{ label: 'Semi-bold', value: 'semi-bold' },
	{ label: 'Bold', value: 'bold' },
	{ label: 'Extra Bold', value: 'extra-bold' },
]


const FontWeightControl = ( props ) => {

	let { attributes, setAttributes } = props;

	return (
		<SelectControl
			label="Font Weight"
			value={ attributes.fontWeight }
			options={ fontWeightOptions }
			onChange={ ( fontWeight ) => setAttributes( { fontWeight } ) }
		/>
	)

}

const fontWeightControlAtts = {
	fontWeight: {
		type: 'string',
		default: '',
	},
}

export { FontWeightControl, fontWeightControlAtts };