
const {
	TextControl,
} = wp.components;

const PaddingBottomControl = ( { attributes, setAttributes } ) => {

	return (
		<TextControl
			label="Padding Bottom"
			value={attributes.inlineStyle.paddingBottom}
			onChange={ ( paddingBottom ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'paddingBottom':paddingBottom } } )}
			placeholder={''}
		/>
	)
	
}


export default PaddingBottomControl