const { __ } = wp.i18n;
const { URLInputButton } = wp.editor;
const { URLInput } = wp.editor;
const { PlainText } = wp.editor;
const { RichText } = wp.editor;


const edit = ( { className, attributes, setAttributes } ) => {

	//console.info(props);

	return (
		<div className="wsu-c-button__wrapper">
			<RichText
				tagName="div"
				className={ 'wsu-c-button' }
				value={ attributes.content }
				onChange={ ( content ) => setAttributes( { content } ) }
				multiline={'false'}
				allowedFormats={[]}
			/>
			<URLInput
				className={ className }
				value={ attributes.url }
				onChange={ ( url, post ) => setAttributes( { url } ) }
			/>
		</div>
	)

}



export default edit;
