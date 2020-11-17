const {
	SelectControl,
} = wp.components;


const fontSizeOptions = [
	{ label: 'Default', value: '' },
	{ label: 'Fine Print', value: 'xsmall' },
	{ label: 'Small', value: 'small' },
	{ label: 'Medium', value: 'medium' },
	{ label: 'Medium Large', value: 'medium-large' },
	{ label: 'Large', value: 'large' },
	{ label: 'Extra Large', value: 'extra-large' },
]


const FontSizeControl = ( props ) => {

	let { attributes, setAttributes } = props;

	return (
		<SelectControl
			label="Font Size"
			value={ attributes.fontSize }
			options={ fontSizeOptions }
			onChange={ ( fontSize ) => setAttributes( { fontSize } ) }
		/>
	)

}

const fontSizeControlAtts = {
	fontSize: {
		type: 'string',
		default: '',
	},
}

export { FontSizeControl, fontSizeControlAtts };