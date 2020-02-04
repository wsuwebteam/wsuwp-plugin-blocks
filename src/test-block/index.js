import { RichText } from '@wordpress/block-editor';

const { registerBlockType } = window.wp.blocks;

registerBlockType('wsuwp-plugin-blocks/test-block', {
	title: 'WSU Test Block',
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	example: {
		attributes: {
			content: 'Hello World',
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
