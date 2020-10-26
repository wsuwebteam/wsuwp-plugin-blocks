const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;

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
import { 
	SpacingSelector,
	DecoratorControl,
	SpacingPanelVertical
} from '../../../block-controls';

import { SpacingUnitControlPaddingHorizontal } from '../../../block-controls/spacing-unit-control/index';

const editColumn = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			{
				<InspectorControls>
					<PanelBody title="Style" initialOpen={false}>
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
						<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
					</PanelBody>
					<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
					<DecoratorControl 
						decorators={attributes.decorators}
						onChange={ ( decoratorArray ) => { setAttributes( { decorators:decoratorArray } ) } }
						/>
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
