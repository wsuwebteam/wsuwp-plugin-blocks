
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
const { registerBlockType } = wp.blocks;
const { addFilter } = wp.hooks;
const {
	Path,
	SVG,
	PanelBody,
	TextControl,
	ToggleControl,
} = wp.components;

/**
 *
 * Register Block
 * Register wsuwp-plugin-blocks/paragraph to block types.
 *
 */
const buttonIcon = (
	<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<Path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" />
	</SVG>
);

registerBlockType('wsuwp-plugin-blocks/button', {
	title: __('Button - in Dev'),
	description: __('Prompt visitors to take action with a button-style link.'),
	icon: buttonIcon,
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

// addFilter('blocks.getSaveContent.extraProps', 'wsuwp-plugin-blocks/paragraph-filters', setExtraPropsToBlockType);

