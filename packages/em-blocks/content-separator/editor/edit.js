const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls
} = wp.blockEditor;

const {
	Panel,
	PanelBody,
	ToggleControl,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

const { EmSeparator } = wsu_wds.emComponents;

import { spacing } from '../../../block-components';

const edit = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			<EmSeparator
				isHatched={ attributes.isHatched }
				showMoreIndicator={ attributes.showMoreIndicator }
				className={ className }
			/>

			<InspectorControls>
					<PanelBody title="General">
						<BaseControl>	
							<ToggleControl
								label="Use Hatched Background"
								help={ attributes.isHatched ? 'Has hatched background.' : 'No hatched background.' }
								checked={ attributes.isHatched }
								onChange={ (checked) => setAttributes({isHatched: checked}) }
							/>
						</BaseControl>
						<BaseControl>	
							<ToggleControl
								label="Show More Indicator"
								help={ attributes.showMoreIndicator? 'Displays a "show more" indicator.' : 'No "show more" indicator is visible.' }
								checked={ attributes.showMoreIndicator }
								onChange={ (checked) => setAttributes({showMoreIndicator: checked}) }
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody title="Layout" initialOpen={false}>
						<SelectControl
							label="Padding Before"
							value={attributes.paddingBefore}
							onChange={ (paddingBefore) => setAttributes( { paddingBefore } ) }
							options={spacing}
						/>
						<SelectControl
							label="Padding After"
							value={attributes.paddingAfter}
							onChange={ (paddingAfter) => setAttributes( { paddingAfter } ) }
							options={spacing}
						/>
						<SelectControl
							label="Margin Before"
							value={attributes.marginBefore}
							onChange={ (marginBefore) => setAttributes( { marginBefore } ) }
							options={spacing}
						/>
						<SelectControl
							label="Margin After"
							value={attributes.marginAfter}
							onChange={ (marginAfter) => setAttributes( { marginAfter } ) }
							options={spacing}
						/>
					</PanelBody>
			</InspectorControls>
		</>
	)

}

export default edit;