
/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const { Path, SVG } = wp.components;
const { withState } = wp.compose;

/**
 *
 * Local Dependencies
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
		buttonContent: {
			type: 'string',
			source: 'html',
			selector: '.wsu-c-button'
		}
	},
	supports: {
		className: false
	},
	example: {
		attributes: {
			buttonContent: __(
				'Learn More'
			),
		}
	},
	edit: (props) => {

		const {
			attributes: { buttonContent },
			attributes: { buttonUrl },
			className,
			setAttributes
		} = props;

		const onChangeButtonContent = (newButtonContent) => {
			setAttributes({ buttonContent: newButtonContent });
		};

		return (
			<>
				<div className="wsu-c-button">
					<RichText
						placeholder={__('Add Button Label Text...', 'wsuwp-plugin-blocks')}
						value={buttonContent}
						onChange={onChangeButtonContent}
						allowedFormats={['core/link']}
						multiline={'false'}
					/>
				</div>
			</>
		);
	},
	save: (props) => {
		return (
			<>
				<div className="wsu-c-button">
					<RichText.Content value={props.attributes.buttonContent} />
				</div>
			</>
		);
	},
});
