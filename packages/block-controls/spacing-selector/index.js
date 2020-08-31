
const {
	Panel,
	PanelBody,
	SelectControl,
} = wp.components;

import { spacingOptions } from '../../block-components';

const SpacingSelector = ( attributes, setAttributes ) => {
	return (
		<Panel>
			<PanelBody title="Spacing" initialOpen={false}>
				<SelectControl
					label="Padding Before"
					value={attributes.paddingBefore}
					onChange={ (paddingBefore) => setAttributes( { paddingBefore } ) }
					options={spacingOptions}
				/>
				<SelectControl
					label="Padding After"
					value={attributes.paddingAfter}
					onChange={ (paddingAfter) => setAttributes( { paddingAfter } ) }
					options={spacingOptions}
				/>
				<SelectControl
					label="Margin Before"
					value={attributes.marginBefore}
					onChange={ (marginBefore) => setAttributes( { marginBefore } ) }
					options={spacingOptions}
				/>
				<SelectControl
					label="Margin After"
					value={attributes.marginAfter}
					onChange={ (marginAfter) => setAttributes( { marginAfter } ) }
					options={spacingOptions}
				/>
			</PanelBody>
		</Panel>
	)
};

export default SpacingSelector;