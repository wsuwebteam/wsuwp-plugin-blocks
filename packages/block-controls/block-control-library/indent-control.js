const {
	SelectControl,
} = wp.components;


const indentOptions = [
	{ label: 'None', value: '' },
	{ label: 'Indent', value: 'indent' },
	{ label: 'Indent More', value: 'indent-more' },
]


const IndentControl = ( props ) => {

	let { attributes, setAttributes } = props;

	return (
		<SelectControl
			label="Indent"
			value={ attributes.indent }
			options={ indentOptions }
			onChange={ ( indent ) => setAttributes( { indent } ) }
		/>
	)

}

const indentControlAtts = {
	indent: {
		type: 'string',
		default: '',
	},
}

export { IndentControl, indentControlAtts };