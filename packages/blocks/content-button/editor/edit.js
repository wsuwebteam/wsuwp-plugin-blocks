const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
} = wp.blockEditor;

const {
	BaseControl,
	Panel,
	PanelBody,
	TextControl,
	SelectControl,
} = wp.components;

const { WsuButton } = wsu_wds.components; 

import { 
	SelectIcon, 
	SpacingSelector,
	SpacingPanelVertical } from '../../../block-controls';
import { empty } from '../../../block-components';

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
					<Panel>
						<PanelBody title="Icon" initialOpen={false}>
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
					</Panel>
				</PanelBody>
				<PanelBody title="Display Options" initialOpen={false}>
					<SelectControl
						label="Display Style"
						value={attributes.style}
						onChange={ ( style ) => setAttributes({ style }) }
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Link', value: 'link' },
						]}
					/>
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
					<BaseControl
						label="Alignment"
						help=""
					>
						<AlignmentToolbar
							value={ attributes.buttonAlign }
							onChange={ ( buttonAlign ) =>
								setAttributes( { buttonAlign: buttonAlign } )
							}
						/>
					</BaseControl>

					
				</PanelBody>
				<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>

			<WsuButton 
				buttonText={
					<RichText
						tagName="div"
						value={ attributes.buttonText }
						onChange={ ( buttonText ) => setAttributes( { buttonText } ) }
						multiline={'false'}
						allowedFormats={[]}
						placeholder='Add Button Text'
					/>
				}
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
