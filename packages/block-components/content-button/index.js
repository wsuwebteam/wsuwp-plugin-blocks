const { __ } = wp.i18n;
const { 
	URLInput,
	RichText,
} = wp.blockEditor;


import {
	empty,
	getUtilityClasses,
} from '../index';

import '@wsuwebteam/web-design-system/packages/components/content-button/style.scss';

const ContentButton = ( props ) => {

	let {
		className,
		setAttributes,
		hideEmpty,
	} = props;

	if ( hideEmpty && empty( props.buttonText ) ) {

		return null;

	}

	let containerClasses = getUtilityClasses(
		[
			{ key:'color', prefix:'wsu-c-button--' },
			{ key:'size', prefix:'wsu-c-button--' },
			{ key:'shape', prefix:'wsu-c-button--' },
		],
		props,
		['wsu-c-button']
	)

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'marginBefore', classSlug:'margin-before' },
			{ key:'marginAfter', classSlug:'margin-after' },
			{ key:'marginLeft', classSlug:'margin-left' },
			{ key:'marginRight', classSlug:'margin-right' },
			{ key:'buttonAlign', classSlug:'textalign' },
		],
		props,
		['wsu-c-button__wrapper']
	)

	return (
		<div className={wrapperClasses}>
			<RichText
				tagName="div"
				className={ containerClasses }
				value={ props.buttonText }
				onChange={ ( buttonText ) => setAttributes( { buttonText } ) }
				multiline={'false'}
				allowedFormats={[]}
				placeholder='Button Text Here ...'
			/>
			<URLInput
				className={ className }
				value={ props.buttonUrl }
				onChange={ ( buttonUrl, post ) => setAttributes( { buttonUrl } ) }
			/>
		</div>
	)

}

ContentButton.defaultProps = {
	buttonText:'',
	buttonUrl: '',
	size: 'default',
	className: '',
	shape: 'default',
	color: 'default',
	tag: 'default',
	onClick: null,
	buttonAlign: 'default',
}

export default ContentButton;

