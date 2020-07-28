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

const BASETEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie nulla mi, ut dapibus ipsum pulvinar a. Pellentesque faucibus aliquam nibh. Pellentesque nec arcu cursus, euismod massa in, ornare urna. Nullam eu neque elementum, rutrum ante a, luctus lectus.';

const formats = {
	default: [
		['wsuwp/column', {}, [ [ 'core/paragraph', {},[] ]]],
	],
	single: [
		['wsuwp/column', {}, [[ 'core/paragraph', {  },[] ]]],
	],
	halves: [
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
	],
	thirds: [
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
	],
	quarters: [
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
	],
	sidebar_right: [
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
	],
	sidebar_left: [
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
	],
};

const GetTemplate = ( attributes ) => {

	let format = 'single';

	if ( attributes.hasOwnProperty('format') ) {
		
		format = attributes.format;

		format = format.replace( '-', '_' );

		if ( formats.hasOwnProperty( format ) ){

			return formats[format];

		}

	}

	return formats.default;

}

const ColumnsEdit = ( { className, attributes, setAttributes } ) => {

	let columnsTemplate = GetTemplate( attributes );

	let format = attributes.format;

	let spacing = [
		{ label: 'Default', value: 'default' },
		{ label: 'None', value: 'none' },
		{ label: 'Xsmall', value: 'xsmall' },
		{ label: 'Small', value: 'small' },
		{ label: 'Medium', value: 'medium' },
		{ label: 'Medium-large', value: 'medium-large' },
		{ label: 'Large', value: 'large' },
		{ label: 'Xlarge', value: 'xlarge' },
	];

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
			<div className={'wsu-c-column__wrapper wsu-u-no-js wsu-c-columns--' +  format }  >
				<InnerBlocks
					template={columnsTemplate }
					templateLock={ "insert" }
					allowedBlocks={ ['wsuwp/column'] }
				/>
			</div>
		</>
	)
}

export { ColumnsEdit }; 