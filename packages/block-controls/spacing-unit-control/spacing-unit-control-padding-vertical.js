
const {
	PanelRow,
	TextControl,
} = wp.components;


const SpacingUnitControlPaddingVertical = ( { attributes, setAttributes } ) => {

	return (

		<PanelRow className="wsu-block-control__spacing-panel-row">
			<TextControl
				label="Padding Top"
				value={attributes.inlineStyle.paddingTop}
				onChange={ ( paddingTop ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'paddingTop':paddingTop } } )}
				placeholder={''}
			/>
			<TextControl
				label="Padding Bottom"
				value={attributes.inlineStyle.paddingBottom}
				onChange={ ( paddingBottom ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'paddingBottom':paddingBottom } } )}
				placeholder={''}
			/>
		</PanelRow>

	)
	
}

export default SpacingUnitControlPaddingVertical