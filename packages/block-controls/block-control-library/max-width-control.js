
const {
	TextControl,
} = wp.components;


const MaxWidthControl = ( { attributes, setAttributes } ) => {

	return (
		<TextControl
			label="Max Width"
			value={attributes.inlineStyle.maxWidth}
			onChange={ ( maxWidth ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'maxWidth':maxWidth } } )}
			placeholder={''}
		/>
	)
	
}

export default MaxWidthControl