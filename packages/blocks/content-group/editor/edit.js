const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;

const {
	PanelBody,
} = wp.components;

const {
	InspectorControls,
} = wp.blockEditor;

import { 
	DecoratorControl,
	SpacingPanelVertical
} from '../../../block-controls';

import { 
	FullWidthControl,
	LimitContentWidthControl, 
	BackgroundColorControl,
	IndentControl,
	DisplayOptionsPanel,
	EmOptionsPanel,
	LayoutPanel,
	MarginVerticalControlGroup,
	PaddingVerticalControlGroup,
	PaddingHorizontalControlGroup,
	BackgroundOptionsPanel,
	IsNotchedControl,
	MaxWidthControl,
} from '../../../block-controls/';

import './style.scss';

const edit = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			{
				<InspectorControls>
					<DisplayOptionsPanel>
						<FullWidthControl attributes={attributes} setAttributes={setAttributes} />
						<LimitContentWidthControl attributes={attributes} setAttributes={setAttributes} />
					</DisplayOptionsPanel> 
					<BackgroundOptionsPanel>
						<BackgroundColorControl attributes={attributes} setAttributes={setAttributes} /> 
					</BackgroundOptionsPanel>
					<LayoutPanel>
						<MarginVerticalControlGroup attributes={attributes} setAttributes={setAttributes} />
						<PaddingVerticalControlGroup attributes={attributes} setAttributes={setAttributes} />
						<PaddingHorizontalControlGroup attributes={attributes} setAttributes={setAttributes} />
						<MaxWidthControl attributes={attributes} setAttributes={setAttributes} />
						<IndentControl attributes={attributes} setAttributes={setAttributes} />
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
			<div className="wsu-c-group">
				<InnerBlocks
					templateLock={ false }
				/>
			</div>
		</>
	)
}

export default edit;
