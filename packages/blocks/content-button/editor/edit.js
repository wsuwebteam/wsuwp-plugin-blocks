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

import { SelectIcon, SpacingSelector } from '../../../block-controls';
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
				<PanelBody title="Style" initialOpen={false}>
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

					<SpacingSelector />
				</PanelBody>
			</InspectorControls>

			{/* TODO: Doesn't address changes of style options (utility classes) */}
			<div className={ 'wsu-c-button__wrapper' }>
				<RichText
					tagName="div"
					className={ 'wsu-c-button' }
					value={ attributes.buttonText }
					onChange={ ( buttonText ) => setAttributes( { buttonText } ) }
					multiline={'false'}
					allowedFormats={[]}
					placeholder='Button Text Here ...'
				/>
				<URLInput
					className={ className }
					value={ attributes.buttonUrl }
					onChange={ ( buttonUrl ) => setAttributes( { buttonUrl } ) }
				/>
			</div>
		</>
	)
}

export default edit;
