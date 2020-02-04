import { __ } from '@wordpress/i18n';
const {
	AlignmentToolbar,
	BlockControls,
	RichText,
} = wp.blockEditor;
const { registerBlockType } = window.wp.blocks;

registerBlockType('wsuwp-plugin-blocks/paragraph', {
	title: __('Paragraph'),
	description: __('Start with the building block of all narrative.'),
	icon: 'editor-paragraph',
	category: 'common',
	attributes: {
		content: {
			source: 'html',
			selector: 'p'
		},
		alignment: {
			type: 'string' // TODO alignment attribute is not being passed into save (see https://modularwp.com/gutenberg-block-toolbar-control/)
		}

	},
	example: {
		attributes: {
			content: __(
				'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.'
			),
		}
	},
	edit: ({ attributes, className, setAttributes }) => {

		const { alignment } = attributes;
		const { content } = attributes;

		const onChangeContent = (newContent) => {
			setAttributes({ content: newContent });
		};

		const onChangeAlignment = (newAlignment) => {
			setAttributes({ alignment: newAlignment });
		};

		return (
			<>
				{/* <BlockControls>
					<AlignmentToolbar
						value={alignment}
						onChange={onChangeAlignment}
					/>
				</BlockControls> */}
				<RichText
					tagName="p"
					className={className}
					onChange={onChangeContent}
					value={content}
				/>
			</>
		);
	},
	save: ({ attributes }) => {
		return (
			<RichText.Content tagName="p" value={attributes.content} />
		);
	},
});
