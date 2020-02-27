const { __ } = wp.i18n;
const { URLInputButton } = wp.editor;
const { URLInput } = wp.editor;
const { PlainText } = wp.editor;
const { RichText } = wp.editor;
import { SelectControl } from '@wordpress/components';


const edit = ( { className, attributes, setAttributes } ) => {

	const { level } = attributes;

	function setLevel( event ) {
        const selected = event.target.querySelector( 'option:checked' );
        setAttributes( { level: selected.value } );
        event.preventDefault();
    }

	return (
		<div className="wsu-b-heading__wrapper">
			<form onSubmit={ setLevel } className={ 'wsu-b-heading__level' }>
                <select value={ level } onChange={ setLevel }>
                    <option value="2">H2</option>
                    <option value="3">H3</option>
                    <option value="4">H4</option>
                    <option value="5">H5</option>
                </select>
            </form>
			<RichText
				tagName={"h" + attributes.level }
				className={ 'wsu-b-heading__text' }
				value={ attributes.content }
				onChange={ ( content ) => setAttributes( { content } ) }
				multiline={'false'}
				allowedFormats={[]}
				placeholder={'Heading Here ...'}
			/>
		</div>
	)

}



export default edit;
