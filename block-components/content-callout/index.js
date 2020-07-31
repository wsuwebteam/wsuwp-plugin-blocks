const { __ } = wp.i18n;
const { 
	URLInput,
	RichText,
} = wp.editor;


import {
	empty,
	getUtilityClasses,
	ContentButton,
} from '../index';

import '@wsuwebteam/web-design-system/packages/components/content-callout/content-callout.scss';

const ContentCalloutLink = ( props ) => {

	if ( props.link ) {

		return (
			<a href={props.link} className={props.className}>
				{props.children}
			</a>
		)
	} else {
		return props.children;
	}
}

// Component Starts
const ContentCalloutImg = ( props ) => {

		if (empty(props.imageSrc)) {
			return null;
		}

		return (
			<div className="wsu-c-callout__image-frame">
				<div className="wsu-c-callout__image-wrapper">
					<ContentCalloutLink link={props.link} className="wsu-c-callout__image-link" >
					<img className="wsu-c-callout__image" src={props.imageSrc} alt={props.imageAlt} />
					</ContentCalloutLink>
				</div>
			</div>
		);
}

ContentCalloutImg.defaultProps = {
	imageSrc:'',
	imageAlt:'',
	link:'',
}

const ContentCalloutTitle = ( props ) => {

	if (empty(props.title)) {
		return null;
	}

	let Tag = props.tag;

	return (
		<Tag className="wsu-c-callout__title"><ContentCalloutLink link={props.link}  className="wsu-c-callout__title-link" >{props.title}</ContentCalloutLink></Tag>
	);
}

ContentCalloutTitle.defaultProps = {
	title:'',
	tag:'h3',
	link:'',
}


const ContentCallout = ( props ) => {

	let {
		className,
		setAttributes,
		hideEmpty,
	} = props;


	let wrapperClasses = getUtilityClasses(
		[
			{ key:'imageSize', prefix:'wsu-c-callout__image--' },
			{ key:'shape', prefix:'wsu-c-callout__image--' },
			{ key:'layout', prefix:'wsu-c-callout__layout--' },
			{ key:'verticalAlign', prefix:'wsu-c-callout__vertical-align--' },
			{ key:'isNotched', prefix:'wsu-c-callout__image--', isBool:true, value:'notched' },
		],
		props,
		['wsu-c-callout__wrapper']
	)

	return (
		<div className={wrapperClasses}>
			<div className="wsu-c-callout__container">
				<ContentCalloutImg
					imageSrc={props.imageSrc}
					imageAlt={props.imageAlt}
					link={props.link}
					/>
				<div className="wsu-c-callout__content">
				<ContentCalloutTitle
					title={props.title}
					tag={props.tag}
					link={props.link}
					/>
				<div className='wsu-c-callout__description'>
					{props.children}
				</div>
				<ContentButton
					buttonUrl={props.buttonUrl}
					buttonText={props.buttonText} 
					size='small'
					color='white'
					shape='round'
					hideEmpty={true}
					/>
				</div>
			</div>
		</div>
	)

}

ContentCallout.defaultProps = {
	imageSrc:'',
	imageAlt:'',
	imageSize:'default',
	shape:'default',
	link:'',
	title:'',
	tag:'h3',
	description:'',
	layout:'default',
	verticalAlign:'default', 
	isNotched:false,
	buttonText: '',
	buttonUrl: '',
}

export default ContentCallout;