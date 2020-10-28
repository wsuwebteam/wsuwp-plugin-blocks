const {
	TextControl,
} = wp.components;

const PaddingLeftControl = ( { attributes, setAttributes } ) => {

	return (
		<TextControl
			label="Padding Left"
			value={attributes.inlineStyle.paddingLeft}
			onChange={ ( paddingLeft ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'paddingLeft':paddingLeft } } )}
			placeholder={''}
		/>
	)
	
}


export default PaddingLeftControl 