const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;

const editColumn = ( props ) => {

	console.info(props);

	return (
		<div className="wsu-c-column wsu-u-no-js">
			<InnerBlocks
				templateLock={ false }
			/>
		</div>
	)

}

export default editColumn;
