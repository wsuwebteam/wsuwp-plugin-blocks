const { __ } = wp.i18n;
const { URLInputButton } = wp.editor;
const { URLInput } = wp.editor;
const { PlainText } = wp.editor;
const { RichText } = wp.editor;


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