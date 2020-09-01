const { 
	RichText,
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
} = wp.components;

const { WsuAccordion } = wsu_wds.components;

import { SpacingSelector } from '../../../block-controls';

const edit = ( { className, attributes, setAttributes } ) => { 

	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
					<TextControl
						label="Title"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						placeholder={'Enter title here.'}
					/>
				</PanelBody>
				<PanelBody title="Style" initialOpen={false}>
					<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>
			<WsuAccordion 
				title={
					<RichText
						tagName="span"
						className="wsu-c-accordion__title-control"
						value={ attributes.title }
						onChange={ ( title ) => setAttributes( { title } ) }
						multiline={'false'}
						allowedFormats={[]}
						placeholder='Title Text Here ...'
					/>
				}
			>
				<InnerBlocks
					templateLock={ false }
				/>
			</WsuAccordion>
		</>
	)

}



export default edit;
