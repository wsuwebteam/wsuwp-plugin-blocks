
const {
	TextControl,
} = wp.components;

const PaddingRightControl = ( { attributes, setAttributes } ) => {

	return (
		<TextControl
			label="Padding Right"
			value={attributes.inlineStyle.paddingRight}
			onChange={ ( paddingRight ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'paddingRight':paddingRight } } )}
			placeholder={''}
		/>
	)
	
}


export default PaddingRightControl 