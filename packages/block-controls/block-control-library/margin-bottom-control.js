
const {
	TextControl,
} = wp.components;

const MarginBottomControl = ( { attributes, setAttributes } ) => {

	return (
		<TextControl
			label="Margin Bottom"
			value={attributes.inlineStyle.marginBottom}
			onChange={ ( marginBottom ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'marginBottom':marginBottom } } )}
			placeholder={''}
		/>
	)
	
}


export default MarginBottomControl