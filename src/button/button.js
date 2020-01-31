/**
 * Block: Button
 *
 * Creates a WSU Design System button.
 */

const { registerBlockType } = window.wp.blocks;
const { RichText } = wp.editor;

registerBlockType('wsuwp-plugin-blocks/button', {
	title: 'Nics Test Block 2',
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
