const { __ } = wp.i18n;

const { InnerBlocks } = wp.editor;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

import EditOptions from './edit-options';

const columnFormats = [

	{
		label: 'Single',
		slug: 'single',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {  },[] ]]],
		]
	},
	{
		label: 'Halves',
		slug: 'halves',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Thirds',
		slug: 'thirds',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Quarters',
		slug: 'quarters',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Sidebar Right',
		slug: 'sidebar-right',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
	{
		label: 'Sidebar Left',
		slug: 'sidebar-left',
		icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		template: [
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
			['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		],
	},
];

const LayoutOption = ( layout, attributes, setAttributes  ) => {

	return (
		<li 
			className="wsu-c-columns-editor__option"
			onClick={ ( event ) => { setAttributes( { layout : layout.slug } ) } }
			>
			{layout.icon}
			<span className="wsu-c-columns-editor__option__label">{layout.label}</span>
		</li>
	);

}

const getColumnsTemplate = ( attributes ) => {

	let slug = ( attributes.layout ) ? attributes.layout : 'single';

	let template = [];

	columnFormats.forEach( ( layout ) => { 
			if ( slug == layout.slug ) {
				template = layout.template;
			}
		} 
	)

	return template;

}

const ColumnsEdit = ( { className, attributes, setAttributes } ) => {

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

	{ 
		if ( ! attributes.layout ) {

			return (
				<div className="wsu-c-columns-editor__wrapper">
					<div className="wsu-c-columns-editor__title">Select Column Layout</div>
					<ul className="wsu-c-columns-editor__options">
					{ columnFormats.map( ( layout ) => LayoutOption( layout, attributes, setAttributes ) ) }
					</ul>
				</div>
			)

		} else {
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
					<div className={'wsu-c-column__wrapper wsu-u-no-js wsu-c-columns--' + attributes.layout }  >
						<InnerBlocks
							template={ getColumnsTemplate( attributes ) }
							templateLock={ "insert" }
							allowedBlocks={ ['wsuwp/column'] }
						/>
					</div>
				</>
			)
		}
	}

}

export default ColumnsEdit;