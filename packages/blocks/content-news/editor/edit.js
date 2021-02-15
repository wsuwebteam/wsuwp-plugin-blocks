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
	FeedControls,
	SpacingPanelVertical
} from '../../../block-controls';


const CardControls = ( { attributes, setAttributes }  ) => {

	return (
		<PanelBody title="Card Options" initialOpen={false}>
			<SelectControl
				label="Items Per Row"
				value={attributes.itemsPerRow}
				onChange={ (itemsPerRow) => setAttributes( { itemsPerRow } ) }
				options={[{ label:'1',value:1},{label:'2',value:2},{label:'3',value:3},{label:'4',value:4}]}
			/>
		</PanelBody>
	)
} 


const edit = ( { className, attributes, setAttributes } ) => {

	const sourceOptions = [
		{ label: 'Insert Individual Stories', value: 'insert' },
		{ label: 'Feed From This Site', value: 'feed' },
		{ label: 'Feed From Another Site', value: 'feed_remote' },
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
				<pre>News</pre>
			</>
		)

	} else {

		let placeholders = [];
		let count = ( attributes.count < 5 ) ? attributes.count : 5;

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
						<SelectControl
							label="Display Type"
							value={attributes.type}
							onChange={ (type) => setAttributes( { type } ) }
							options={[{ label:'Default',value:'default'},{label:'Card',value:'card'}]}
						/>
						<FeedControls attributes={attributes} setAttributes={setAttributes} />
					</PanelBody>
					{ 'card' == attributes.type && <CardControls attributes={attributes} setAttributes={setAttributes} /> }
					<SpacingPanelVertical attributes={attributes} setAttributes={setAttributes} />
				</InspectorControls>
				<pre>News</pre>
			</>
		)

	}

}



export default edit;