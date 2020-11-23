const {
	PanelBody,
	TextControl,
	SelectControl,
	ToggleControl
} = wp.components;

const FeedControls = ( { attributes, setAttributes, taxonomyOptions } ) => {

	let feedSource = attributes.hasOwnProperty('feedSource') ? attributes.feedSource : {};
	let postType   = feedSource.hasOwnProperty('postType') ? feedSource.postType : 'post';
	let taxonomy   = feedSource.hasOwnProperty('taxonomy') ? feedSource.taxonomy : 'category';
	let termIds    = feedSource.hasOwnProperty('termIds') ? feedSource.termIds : '';
	let count      = feedSource.hasOwnProperty('count') ? feedSource.count : 5;
	let andLogic    = feedSource.hasOwnProperty('andLogic') ? feedSource.andLogic : false;

	taxonomyOptions = ( taxonomyOptions && Array.isArray( taxonomyOptions) ) ? taxonomyOptions : [{label:'Category',value:'category'},{label:'Tag',value:'tag'}];

	return (
		<PanelBody title="Feed Settings">
			<TextControl
				label="Content Type (post type)"
				value={postType}
				onChange={ (postType) => setAttributes( { feedSource: { ...feedSource, postType:postType } } ) }
				placeholder={'Enter post type here.'}
			/>
			<SelectControl
				label="Feed By (taxonomy)"
				value={taxonomy}
				onChange={ (taxonomy) => setAttributes( { feedSource: { ...feedSource, taxonomy:taxonomy } } ) }
				options={taxonomyOptions}
			/>
			<TextControl
				label="Term IDs"
				value={termIds}
				onChange={ (termIds) => setAttributes( { feedSource: { ...feedSource, termIds:termIds } } ) }
				placeholder={'Enter Term IDs here (5,6,7).'}
			/>
			<ToggleControl
				label="Use And logic"
				help='Content must include ALL terms'
				checked={ andLogic }
				onChange={ (andLogic) => setAttributes( { feedSource: { ...feedSource, andLogic:andLogic } } ) }
			/>
			<TextControl
				label="Count"
				value={count}
				onChange={ (count) => setAttributes( { feedSource: { ...feedSource, count:count } } ) }
				placeholder={'Enter # of items.'}
			/>			
		</PanelBody>
	)
	
	
};


export default FeedControls;
