const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
} = wp.editor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

import {
	empty,
	ContentButton
} from '../../../block-components/index';

import {
	SelectIcon
} from '../../../block-controls/index';

import { spacing } from '../../../block-components';


const edit = ( { className, attributes, setAttributes } ) => { 

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ attributes.buttonAlign }
					onChange={ ( buttonAlign ) =>
						setAttributes( { buttonAlign: buttonAlign } ) 
					}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title="General">
					<TextControl
						label="Button Text"
						value={attributes.buttonText}
						onChange={(buttonText) => setAttributes({ buttonText })}
						placeholder={'Enter button text here.'}
					/>
					<BaseControl label="Button Link Destination">
						<URLInput
							id="bannerButtonLink"
							className={'wsu-c-block__banner__editor__content__link'}
							value={attributes.buttonUrl}
							onChange={(buttonUrl, post) => setAttributes({ buttonUrl })}
							placeholder={'Button Link'}
							isFullWidth
						/>
					</BaseControl>
					<SelectIcon 
						label='Icon Before'
						icon={attributes.iconBefore}
						onchange={ ( value ) => { setAttributes( { iconBefore: value } ) } }
						 />
					<SelectIcon 
						label='Icon After'
						icon={attributes.iconAfter}
						onchange={ ( value ) => { setAttributes( { iconAfter: value } ) } }
						 />
				</PanelBody>
				<PanelBody title="Display" initialOpen={false}>
					<SelectControl
						label="Shape"
						value={attributes.shape}
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Square', value: 'square' },
							{ label: 'Rounded', value: 'round' },
						]}
						onChange={ ( shape ) => setAttributes({ shape }) }
					/>
					<SelectControl
						label="Color"
						value={attributes.color}
						onChange={ ( color ) => setAttributes({ color }) }
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Crimson', value: 'crimson' },
							{ label: 'White', value: 'white' },
						]}
					/>
					<SelectControl
						label="Size"
						value={attributes.size}
						onChange={ ( size ) => setAttributes({ size }) }
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Small', value: 'small' },
							{ label: 'Medium', value: 'medium' },
							{ label: 'Large', value: 'large' },
						]}
					/>
					<AlignmentToolbar
						value={ attributes.buttonAlign }
						onChange={ ( buttonAlign ) =>
							setAttributes( { buttonAlign: buttonAlign } )
						}
					/>
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
			<ContentButton 
				buttonText={attributes.buttonText}
				buttonUrl={attributes.buttonUrl}
				shape={attributes.shape}
				size={attributes.size}
				color={attributes.color}
				setAttributes={setAttributes} 
				className={className} 
			/>
		</>
	)

}



export default edit;
