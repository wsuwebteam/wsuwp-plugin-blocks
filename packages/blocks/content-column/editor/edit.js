const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;

const { WsuColumn } = wsu_wds.components;

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
	SpacingPanelVertical,
	BackgroundOptionsPanel,
	BackgroundImageControl,
	LayoutPanel,
	MarginVerticalControlGroup,
	PaddingVerticalControlGroup,
	MinHeightControl,
	EmOptionsPanel,
	IsNotchedControl,
} from '../../../block-controls';

import './style.scss';

import { SpacingUnitControlPaddingHorizontal } from '../../../block-controls/spacing-unit-control/index';

const editColumn = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			{
				<InspectorControls>
					<BackgroundOptionsPanel>
						<SelectControl
							label="Background Color"
							value={attributes.backgroundColor}
							onChange={ (backgroundColor) => setAttributes( { backgroundColor } ) }
							options={[
								{ label: 'Default', value: 'default' },
								{ label: 'White', value: 'white' },
								{ label: 'Gray 5%', value: 'gray-5' },
								{ label: 'Gray 10%', value: 'gray-10' },
							]}
						/>
						<BackgroundImageControl attributes={attributes} setAttributes={setAttributes} />
					</BackgroundOptionsPanel>
					<LayoutPanel>
						<MarginVerticalControlGroup attributes={attributes} setAttributes={setAttributes} />
						<PaddingVerticalControlGroup attributes={attributes} setAttributes={setAttributes} />
						<MinHeightControl attributes={attributes} setAttributes={setAttributes} />
					</LayoutPanel>
					<EmOptionsPanel>
						<DecoratorControl 
							decorators={attributes.decorators}
							onChange={ ( decoratorArray ) => { setAttributes( { decorators:decoratorArray } ) } }
						/>
						<IsNotchedControl attributes={attributes} setAttributes={setAttributes} />
					</EmOptionsPanel>
				</InspectorControls>
			}
			<WsuColumn>
				<InnerBlocks
					templateLock={ false }
				/>
			</WsuColumn>
		</>
	)
}

export default editColumn;
