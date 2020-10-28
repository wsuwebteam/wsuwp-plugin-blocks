
const {
	TextControl,
} = wp.components;

const PaddingTopControl = ( { attributes, setAttributes } ) => {

	return (
		<TextControl
			label="Padding Top"
			value={attributes.inlineStyle.paddingTop}
			onChange={ ( paddingTop ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'paddingTop':paddingTop } } ) }
			placeholder={''}
		/>
	)
	
}


export default PaddingTopControl