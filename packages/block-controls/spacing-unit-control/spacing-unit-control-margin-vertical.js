
const {
	PanelRow,
	TextControl,
} = wp.components;

import './style.scss';


const SpacingUnitControlMarginVertical = ( { attributes, setAttributes } ) => {

	return (

		<PanelRow  className="wsu-block-control__spacing-panel-row">
			<TextControl
				label="Margin Top"
				value={attributes.inlineStyle.marginTop}
				onChange={ ( marginTop ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'marginTop':marginTop } } )}
				placeholder={''}
			/>
			<TextControl
				label="Margin Bottom"
				value={attributes.inlineStyle.marginBottom}
				onChange={ ( marginBottom ) => setAttributes( { inlineStyle : { ...attributes.inlineStyle, 'marginBottom':marginBottom } } )}
				placeholder={''}
			/>
		</PanelRow>

	)
	
}


export default SpacingUnitControlMarginVertical