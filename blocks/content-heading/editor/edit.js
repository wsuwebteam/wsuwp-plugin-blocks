const { __ } = wp.i18n;
const { URLInputButton } = wp.editor;
const { PlainText } = wp.editor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	ToolbarGroup,
	DropdownMenu,
	Toolbar,
} = wp.components;

const {
	RichText,
	URLInput,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
} = wp.blockEditor;

import {
    more,
    arrowLeft,
    arrowRight,
    arrowUp,
	arrowDown,
	heading,
} from '@wordpress/icons';

import HeadingLevelIcon from './heading-level-icon';


const edit = ( { className, attributes, setAttributes } ) => {

	const { level } = attributes;

	function setLevel( event ) {
        const selected = event.target.querySelector( 'option:checked' );
        setAttributes( { level: selected.value } );
        event.preventDefault();
	}
	
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
							label="Display Style"
							value={attributes.style}
							onChange={ (style) => setAttributes( { style } ) }
							options={[
								{ label: 'Default', value: 'default' },
								{ label: 'Callout', value: 'callout' },
							]}
						/>
						<AlignmentToolbar
							value={ attributes.textAlign }
							onChange={ ( textAlign ) =>
								setAttributes( { textAlign: textAlign } )
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
			}
			<BlockControls>
			<Toolbar>
			<DropdownMenu
				icon={<HeadingLevelIcon level={attributes.level} />}
				label={<HeadingLevelIcon level="1" />}
				controls={ [
					{
						title: 'Level 2',
						icon: <HeadingLevelIcon level="2" />,
						onClick: () => setAttributes( { level:2 } ),
					},
					{
						title: 'Level 3',
						icon: <HeadingLevelIcon level="3" />,
						onClick: () => setAttributes( { level:3 } ),
					},
					{
						title: 'Level 4',
						icon: <HeadingLevelIcon level="4" />,
						onClick: () => setAttributes( { level:4 } ),
					},
					{
						title: 'Level 5',
						icon: <HeadingLevelIcon level="5" />,
						onClick: () => setAttributes( { level:5 } ),
					},
				] }
			/>
			</Toolbar>
			<AlignmentToolbar
							value={ attributes.textAlign }
							onChange={ ( textAlign ) =>
								setAttributes( { textAlign: textAlign } )
							}
						/>
			</BlockControls>
			<div className="wsu-b-heading__wrapper">
				<RichText
					tagName={"h" + attributes.level }
					className={ 'wsu-b-heading__text' }
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
					multiline={'false'}
					allowedFormats={[]}
					placeholder={'Heading Here ...'}
				/>
			</div>
		</>
	)

}



export default edit;
