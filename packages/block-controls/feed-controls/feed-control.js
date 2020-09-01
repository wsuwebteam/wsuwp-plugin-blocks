const {
	PanelBody,
	TextControl,
	SelectControl,
} = wp.components;

const FeedControls = ( { attributes, setAttributes, taxonomyOptions } ) => {

	return (
		<PanelBody title="Feed Settings">
			<TextControl
				label="Content Type (post type)"
				value={attributes.postType}
				onChange={(postType) => setAttributes({ postType })}
				placeholder={'Enter post type here.'}
			/>
			<SelectControl
				label="Feed By (taxonomy)"
				value={attributes.taxonomy}
				onChange={ (taxonomy) => setAttributes( { taxonomy } ) }
				options={taxonomyOptions}
			/>
			<TextControl
				label="Term IDs"
				value={attributes.termIds}
				onChange={ (termIds) => setAttributes({ termIds })}
				placeholder={'Enter Term IDs here (5,6,7).'}
			/>
			<TextControl
				label="Count"
				value={attributes.count}
				onChange={ (count) => setAttributes( { count } ) }
				placeholder={'Enter # of items.'}
			/>				
		</PanelBody>
	)
	
	
};

FeedControls.defaultProps = {
	attributes: {},
	setAttributes: () => {return false },
	taxonomyOptions: [ 
		{ label: 'Category', value: 'category' },
		{ label: 'Tag', value: 'tag' },
	],
}


export default FeedControls;
