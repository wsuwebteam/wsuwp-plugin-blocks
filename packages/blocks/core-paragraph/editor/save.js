

import { RichText } from '@wordpress/block-editor';

const paragraphSaveElement = ( element, blockType, attributes ) => {
	if ( blockType.name !== 'core/paragraph' ) {
		return element;
	}

	if ( blockType.name === 'core/paragraph' ) {

		const { align, content, dropCap, direction, className } = attributes;
	
		return (
			<RichText.Content
				className={ className ? className : undefined }
				value={ content }
				dir={ direction }
			/>
		);
	}
}

wp.hooks.addFilter(
	'blocks.getSaveElement',
	'wsuwp/blocks',
	paragraphSaveElement
);