
const {
	Panel,
	PanelBody,
	SelectControl,
} = wp.components;

import { spacingOptions } from '../../block-components';

const SpacingSelector = ( props ) => {

	return (
		<Panel>
			<PanelBody title="Spacing" initialOpen={false}>
				<SelectControl
					label="Padding Before"
					value={props.paddingBefore}
					onChange={ (paddingBefore) => props.setAttributes( { paddingBefore } ) }
					options={spacingOptions}
				/>
				<SelectControl
					label="Padding After"
					value={props.paddingAfter}
					onChange={ (paddingAfter) => props.setAttributes( { paddingAfter } ) }
					options={spacingOptions}
				/>
				<SelectControl
					label="Margin Before"
					value={props.marginBefore}
					onChange={ (marginBefore) => props.setAttributes( { marginBefore } ) }
					options={spacingOptions}
				/>
				<SelectControl
					label="Margin After"
					value={props.marginAfter}
					onChange={ (marginAfter) => props.setAttributes( { marginAfter } ) }
					options={spacingOptions}
				/>
			</PanelBody>
		</Panel>
	)
};

export default SpacingSelector;