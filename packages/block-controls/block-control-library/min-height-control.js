
const {
	TextControl,
} = wp.components;


const MinHeightControl = ( { attributes, setAttributes } ) => {

	return (
		<TextControl
			label="Min Height"
			value={attributes.inlineStyle.minHeight}
			onChange={ ( minHeight ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'minHeight':minHeight } } )}
			placeholder={''}
		/>
	)
	
}

export default MinHeightControl