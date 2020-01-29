import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('wsuwp-plugin-blocks/button', {
	title: 'Nics Test Block',
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'a',
		},
	},
	example: {
		attributes: {
			content: 'Hello World my name is Erik',
		},
	},
	edit: (props) => {
		const { attributes: { content }, setAttributes, className } = props;
		const onChangeContent = (newContent) => {
			setAttributes({ content: newContent });
		};
		return (
			<RichText
				tagName="p"
				className={className}
				onChange={onChangeContent}
				value={content}
			/>
		);
	},
	save: (props) => {
		return <RichText.Content tagName="p" value={props.attributes.content} />;
	},
});
