const { __ } = wp.i18n;
const { URLInputButton } = wp.blockEditor;
const { URLInput } = wp.blockEditor;
const { PlainText } = wp.blockEditor;
const { RichText } = wp.blockEditor;


const edit = ( { className, attributes, setAttributes } ) => {

	//console.info(props);

	return (
		<div className="wsu-b-editor__search-bar__edit-wrapper">
			<div class="wsu-b-editor__search-bar">
				<input type="text" name="" value="" placeholder="Search" />
				<input type="submit" name="submit" value="Search" />
			</div>
		</div>
	)

}



export default edit;