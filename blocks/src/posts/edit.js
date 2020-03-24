const { __ } = wp.i18n;
const { URLInputButton } = wp.editor;
const { URLInput } = wp.editor;
const { PlainText } = wp.editor;
const { RichText } = wp.editor;

import { CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';


const edit = ( { className, attributes, setAttributes } ) => {

	const [ isChecked, setChecked ] = useState( true );

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
			<CheckboxControl
                className="check_items"
                label={'Show Image'}
                checked={attributes.show_img }
                onChange={ ( check ) => {
                    setAttributes( { attributes.show_img = check}) 
                    //setState({checked_obj})
                } }
            />
		</div>
	)

}



export default edit;
