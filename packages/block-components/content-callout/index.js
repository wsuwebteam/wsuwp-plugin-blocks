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

	if ( empty( props.imageSrc ) || ! empty( props.videoSrc ) ) {
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
	videoSrc:'',
}

// Component Starts
const ContentCalloutVideo= ( props ) => {

	if ( empty( props.videoSrc  ) ) {
		return null;
	} 

	let videoSrc = props.videoSrc + '?&byline=0&title=0&portrait=0';

	return (
		<div className="wsu-c-callout__image-frame">
			<div className="wsu-c-callout__image-wrapper">
				<iframe
					className="wsu-c-callout__video"
					src={videoSrc}
					frameborder="0" 
					allow="autoplay; fullscreen" 
					allowfullscreen>
				</iframe>
			</div>
		</div>
	);

}

ContentCalloutVideo.defaultProps = {
	videoSrc:'',
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
					videoSrc={props.videoSrc}
					/>
				<ContentCalloutVideo
					videoSrc={props.videoSrc}
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
	videoSrc: '',
}

export default ContentCallout;