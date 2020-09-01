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

import { 
	SpacingSelector,
	FeedControls
} from '../../../block-controls';


const edit = ( { className, attributes, setAttributes } ) => {

	const sourceOptions = [
		{ label: 'Insert', value: 'insert' },
		{ label: 'Feed', value: 'feed' },
	]
	
	
	if ( 'insert' == attributes.source ) {

		return (
			<>
				<InspectorControls>
					<PanelBody title="General">
						<SelectControl
							label="Source"
							value={attributes.source}
							onChange={ (source) => setAttributes( { source } ) }
							options={sourceOptions}
						/>
					</PanelBody>
					<PanelBody title="Style" initialOpen={false}>
						<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
					</PanelBody>
				</InspectorControls>
				<div className="wsu-c-accordion-group">
					<InnerBlocks
						allowedBlocks={ [ 'wsuwp/accordion' ] }
						templateLock={ false }
					/>
				</div>
			</>
		)

	} else {

		let placeholders = [];
		let count = ( attributes.count < 5 ) ? attributes.count : 5;


		for ( i = 0; i < count; i++ ) {

			placeholders.push( <WsuAccordion title="Feed: Accordion Title Here"></WsuAccordion> )

		}

		return (
			<>
				<InspectorControls>
					<PanelBody title="General">
						<SelectControl
							label="Source"
							value={attributes.source}
							onChange={ (source) => setAttributes( { source } ) }
							options={sourceOptions}
						/>
						<FeedControls attributes={attributes} setAttributes={setAttributes} />
					</PanelBody>
					<PanelBody title="Style" initialOpen={false}>
						<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
					</PanelBody>
				</InspectorControls>
				<div className="wsu-c-accordion-group">
					{placeholders}
				</div>
			</>
		)

	}

}



export default edit;