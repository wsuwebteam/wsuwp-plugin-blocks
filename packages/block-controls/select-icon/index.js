import React from 'react';

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

const SelectIcon = ( props ) => {

	let icons = [
		'',
		'alarm', 
		'alert-notification', 
		'arrow-down-carrot', 
		'arrow-down', 
		'arrow-left-carrot', 
		'arrow-left', 
		'arrow-right-carrot', 
		'arrow-right', 
		'arrow-up-carrot', 
		'arrow-up', 
		'attachment', 
		'basket', 
		'bookmark', 
		'calendar', 
		'cart', 
		'check', 
		'collapse', 
		'comment', 
		'contrast', 
		'credit-card', 
		'cut', 
		'discussion', 
		'document', 
		'download', 
		'edit', 
		'email', 
		'expand', 
		'favorite', 
		'feedback', 
		'filter', 
		'flag', 
		'gallery', 
		'graph', 
		'home', 
		'info', 
		'key', 
		'light-bulb', 
		'link', 
		'location', 
		'map-location', 
		'map', 
		'menu', 
		'minus-circle', 
		'minus', 
		'mobile', 
		'monitor', 
		'more-vertical', 
		'more', 
		'next', 
		'pause', 
		'phone', 
		'photos', 
		'play-circle', 
		'play', 
		'plus', 
		'pluse-circle', 
		'previous', 
		'print', 
		'profile-circle', 
		'profile', 
		'rate', 
		'refresh', 
		'save', 
		'search', 
		'secure', 
		'send', 
		'settings', 
		'share', 
		'social-facebook', 
		'social-instagram', 
		'social-linkedin', 
		'social-twitter', 
		'social-youtube', 
		'stop-circle', 
		'stop', 
		'tag', 
		'tent', 
		'time', 
		'trash', 
		'upload', 
		'video-slideshow', 
		'warning-caution', 
		'warning-stop', 
		'x-close', 
		'zoom-in', 
		'zoom-out'
	];

	let iconSelect = [];

	icons.forEach(
		( value, index ) => { 
			let icon = {
				label: value,
				value: value,
			}

			iconSelect.push( icon );
		}
	)

	return (
		<SelectControl
			label={props.label}
			value={props.icon}
			onChange={ ( icon ) => { props.onchange( icon ) } }
			options={iconSelect}
		/>
	)
}

SelectIcon.defaultProps = {
	label: 'Icon',
	className:'wsu-b-select-icon',
}

export default SelectIcon;
