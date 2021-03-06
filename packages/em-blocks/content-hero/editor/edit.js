const { __ } = wp.i18n;

const {
	RichText,
	MediaUpload,
	MediaUploadCheck,
	URLInput,
	InnerBlocks,
	InspectorControls,
} = wp.blockEditor;

const {
	Panel,
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

const { EmHero } = wsu_wds.emComponents;

import './style.scss';

import '@wsuwebteam/build-tools/js/helpers/ranges';
import { wsuRange } from '@wsuwebteam/build-tools/js/helpers/ranges';
import { SpacingSelector, DecoratorControl,
	SpacingPanelVertical } from '../../../block-controls';

const edit = ({ className, attributes, setAttributes }) => {

	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
					<TextControl
						label="Title"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						placeholder={'Add title text'}
					/>
					
					<TextControl
						label="TitleTag"
						value={attributes.titleTag}
						onChange={(titleTag) => setAttributes({ titleTag })}
						placeholder={'Add titleTag text'}
					/>

					<TextControl
						label="TitleAriaLabel"
						value={attributes.titleAriaLabel}
						onChange={(titleAriaLabel) => setAttributes({ titleAriaLabel })}
						placeholder={'Add titleAriaLabel text'}
					/>

					<TextControl
						label="Description"
						value={attributes.description}
						onChange={(description) => setAttributes({ description })}
						placeholder={'Add description text'}
					/>

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ backgroundImageUrl: media.url })}
							// allowedTypes={ALLOWED_MEDIA_TYPES}
							// value={mediaId}
							render={({ open }) => (
								<BaseControl label="Replace Background Image">
									<Button isLink onClick={open}>Open Media Library</Button>
								</BaseControl>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
				
				<DecoratorControl 
					decorators={attributes.decorators}
					onChange={ ( decoratorArray ) => { setAttributes( { decorators:decoratorArray } ) } }
				/>

				<PanelBody title="Style" initialOpen={false}>
					{/* TODO: Rework default template to be more flexible
						- Create typewriter component that allows text to be edited dynamically
						- Rebuild https://admission.wsu.edu/admitted-pullman/ using new typewriter block 
						- Rename label to Default :) 
					*/}
					<SelectControl
						label="Display Style"
						value={attributes.style}
						options={[
							{ label: 'Welcome #FutureCoug (Only used on Admitted and has a Hardcoded Title Field that is not editable at the moment)', value: 'default' },
							{ label: 'Boxed Background', value: 'boxed-background' },
						]}
						onChange={ ( style ) => { setAttributes( { style } ) } }
					/>
					<SelectControl
						label="Banner Height"
						value={attributes.verticalSpacing}
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Extra Small', value: 'xsmall' },
							{ label: 'Small', value: 'small' },
							{ label: 'Medium', value: 'medium' },
							{ label: 'Large', value: 'large' },
							{ label: 'Full', value: 'full' },
						]}
						onChange={(verticalSpacing) => setAttributes({ verticalSpacing })}
					/>
				</PanelBody>
				<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>

			<EmHero
				title={ attributes.title }
				titleTag={ attributes.titleTag }
				titleAriaLabel={ attributes.titleAriaLabel }
				description={ attributes.description }
				backgroundImageUrl={ attributes.backgroundImageUrl }
				style={ attributes.style }
			>
				<InnerBlocks
					templateLock={ false }
				/> 
			</EmHero>
		</>
	)

}



export default edit;