
/**
 *
 * Define constants
 *
 */
const { __ } = wp.i18n;
const {
	AlignmentToolbar,
	BlockControls,
	RichText,
} = wp.blockEditor;
const { registerBlockType } = window.wp.blocks;
const { addFilter } = wp.hooks;

/**
 *
 * Register Block
 * Register wsuwp-plugin-blocks/paragraph to block types.
 *
 */
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
	},
	supports: {
		className: false
	},
	example: {
		attributes: {
			content: __(
				'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing.'
			),
		}
	},
	edit: ({ attributes, className, setAttributes }) => {

		const { content } = attributes;

		const onChangeContent = (newContent) => {
			setAttributes({ content: newContent });
		};

		return (
			<>
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


/**
 *
 * Filter Class Name
 * className: undefined
 */

const setExtraPropsToBlockType = (props, blockType) => {
	const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false

	if (blockType.name === 'wsuwp-plugin-blocks/paragraph') {

		if (!notDefined) {

			return Object.assign(props, {
				className: notDefined ? '' : `${props.className}`,
			});

		}

	}

	return props;
};

addFilter('blocks.getSaveContent.extraProps', 'wsuwp-plugin-blocks/paragraph-filters', setExtraPropsToBlockType);

