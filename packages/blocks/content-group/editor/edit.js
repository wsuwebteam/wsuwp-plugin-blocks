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
	ContentFullWidthControl, 
	BackgroundColorControl 
} from '../../../block-controls/';

const edit = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			{
				<InspectorControls>
					<PanelBody title="General" initialOpen={true}>
						<FullWidthControl attributes={attributes} setAttributes={setAttributes} />
						<ContentFullWidthControl attributes={attributes} setAttributes={setAttributes} />
					</PanelBody> 
					<PanelBody title="Background" initialOpen={false}>
						<BackgroundColorControl attributes={attributes} setAttributes={setAttributes} /> 
					</PanelBody>
					<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
					<DecoratorControl 
						decorators={attributes.decorators}
						onChange={ ( decoratorArray ) => { setAttributes( { decorators:decoratorArray } ) } }
						/>
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
