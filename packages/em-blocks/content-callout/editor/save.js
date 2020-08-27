const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;

const save = ( props ) => {

	console.info(props);

	return (
			<InnerBlocks.Content /> 
	)

}

export default save;