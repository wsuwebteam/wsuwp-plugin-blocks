
const {
	TextControl,
} = wp.components;

const MarginTopControl = ( { attributes, setAttributes } ) => {

	return (
		<TextControl
			label="Margin Top"
			value={attributes.inlineStyle.marginTop}
			onChange={ ( marginTop ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'marginTop':marginTop } } )}
			placeholder={''}
		/>
	)
	
}


export default MarginTopControl