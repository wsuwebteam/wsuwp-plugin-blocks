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

const { WsuBlockquote } = wsu_wds.components;

import { 
	SpacingSelector,
} from '../../../block-controls';


const edit = ( { className, attributes, setAttributes } ) => {


	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
					<TextControl
						label="Person Name (Citation)"
						value={attributes.name}
						onChange={(name) => setAttributes({ name })}
						placeholder={'Enter person name here.'}
					/>
					<TextControl
						label="Person Title (Citation)"
						value={attributes.title}
						onChange={(title) => setAttributes({ title })}
						placeholder={'Enter person title here.'}
					/>
					<TextControl
						label="Citation Text"
						value={attributes.cite}
						onChange={(cite) => setAttributes({ cite })}
						placeholder={'Enter citation here.'}
					/>
					<TextControl
						label="Citation URL"
						value={attributes.citeUrl}
						onChange={(citeUrl) => setAttributes({ citeUrl })}
						placeholder={'Enter citation url here.'}
					/>
				</PanelBody>
				<PanelBody title="Style" initialOpen={false}>
					<SelectControl
						label="Citation Align"
						value={attributes.citeAlign}
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'right' },
						]}
						onChange={ ( citeAlign ) => setAttributes({ citeAlign }) }
					/>
					<SelectControl
						label="Text Size"
						value={attributes.textSize}
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Small', value: 'small' },
							{ label: 'Medium', value: 'medium' },
							{ label: 'Medium Large', value: 'medium-large' },
							{ label: 'Large', value: 'large' },
						]}
						onChange={ ( textSize ) => setAttributes({ textSize }) }
					/>
					<SelectControl
						label="Width"
						value={attributes.width}
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'Small', value: 'small' },
							{ label: 'Medium', value: 'medium' },
							{ label: 'Medium Large', value: 'medium-large' },
							{ label: 'Large', value: 'large' },
						]}
						onChange={ ( width ) => setAttributes({ width }) }
					/>
					<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>
			<WsuBlockquote
				name={<RichText
					tagName="span"
					value={ attributes.name }
					onChange={ ( name) => setAttributes( { name } ) }
					multiline={'false'}
					allowedFormats={[]}
					placeholder='Person Name'
					/>}
				title={<RichText
					tagName="span"
					value={ attributes.title }
					onChange={ ( title ) => setAttributes( { title } ) }
					multiline={'false'}
					allowedFormats={[]}
					placeholder='Person Title'
					/>}
				cite={<RichText
					tagName="span"
					value={ attributes.cite }
					onChange={ ( cite ) => setAttributes( { cite } ) }
					multiline={'false'}
					allowedFormats={[]}
					placeholder='Citation'
					/>}
				citeUrl={attributes.citeUrl}
				textSize={attributes.textSize}
				citeAlign={attributes.citeAlign}
				>
				<InnerBlocks
					templateLock={ false }
					allowedBlocks={ ['core/paragraph','core/freeform','core/list'] }
				/>
			</WsuBlockquote>
		</>
	)


}



export default edit;