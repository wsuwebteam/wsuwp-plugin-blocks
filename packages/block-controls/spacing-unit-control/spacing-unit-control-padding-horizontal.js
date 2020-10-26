
const {
	PanelRow,
	TextControl,
} = wp.components;


const SpacingUnitControlPaddingHorizontal = ( { attributes, setAttributes } ) => {

	return (

		<PanelRow className="wsu-block-control__spacing-panel-row">
			<TextControl
				label="Padding Left"
				value={attributes.inlineStyle.paddingLeft}
				onChange={ ( paddingLeft ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'paddingLeft':paddingLeft } } )}
				placeholder={''}
			/>
			<TextControl
				label="Padding Right"
				value={attributes.inlineStyle.paddingRight}
				onChange={ ( paddingRight ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'paddingRight':paddingRight } } )}
				placeholder={''}
			/>
		</PanelRow>

	)
	
}

export default SpacingUnitControlPaddingHorizontal