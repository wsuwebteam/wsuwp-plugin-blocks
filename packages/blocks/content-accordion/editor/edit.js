const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	FocalPointPicker,
	BaseControl
} = wp.components;

const { WsuAccordion } = wsu_wds.components;

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
			<InspectorControls>
				<PanelBody title="General">
					<TextControl
						label="Title"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						placeholder={'Enter title here.'}
					/>
				</PanelBody>
				<PanelBody title="Display" initialOpen={false}>
					
				
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
			<WsuAccordion 
				title={<RichText
					tagName="span"
					className="wsu-c-accordion__title-control"
					value={ attributes.title }
					onChange={ ( title ) => setAttributes( { title } ) }
					multiline={'false'}
					allowedFormats={[]}
					placeholder='Title Text Here ...'
				/>}
				>
				<InnerBlocks
						templateLock={ false }
					/>
			</WsuAccordion>
		</>
	)

}



export default edit;
