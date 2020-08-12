const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;

const {
	PanelBody,
	TextControl,
	SelectControl,
} = wp.components;

const {
	RichText,
	URLInput,
	InspectorControls,
} = wp.blockEditor;

import { spacing } from '../../../block-components';

const editColumn = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			{
				<InspectorControls>
					<PanelBody title="General">
						<SelectControl
							label="Background Color"
							value={attributes.backgroundColor}
							onChange={ (backgroundColor) => setAttributes( { backgroundColor } ) }
							options={[
								{ label: 'Default', value: 'default' },
								{ label: 'Gray 5%', value: 'gray-5' },
								{ label: 'Gray 10%', value: 'gray-10' },
							]}
						/>
					</PanelBody>
					<PanelBody title="Spacing" initialOpen={false}>
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
			}
			<div className="wsu-c-column wsu-u-no-js">
				<InnerBlocks
					templateLock={ false }
				/>
			</div>
		</>
	)

}

export default editColumn;
