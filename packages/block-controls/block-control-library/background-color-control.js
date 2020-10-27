const {
	SelectControl,
} = wp.components;


const backgroundColorContentOptions = [
	{ label: 'Default', value: '' },
	{ label: 'Gray 5%', value: 'gray-5' },
	{ label: 'Gray 10%', value: 'gray-10' },
	{ label: 'Gray 80%', value: 'gray-80' },
	{ label: 'Gray 90%', value: 'gray-90' },
]


const BackgroundColorControl = ( props ) => {

	let { attributes, setAttributes } = props;

	let backgroundColorOptions = ( props.hasOwnProperty( 'backgroundColorOptions' ) ) ? props.backgroundColorOptions : backgroundColorContentOptions;

	return (
		<SelectControl
			label="Background Color"
			value={ attributes.backgroundColor }
			options={ backgroundColorOptions }
			onChange={ ( backgroundColor ) => setAttributes( { backgroundColor } ) }
		/>
	)

}

const backgroundColorControlAtts = {
	backgroundColor: {
		type: 'string',
		default: '',
	},
}

export { BackgroundColorControl, backgroundColorControlAtts };