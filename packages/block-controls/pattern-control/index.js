import React from 'react';

const { TextControl } = wp.components;

const PatternControl = (props) => {
	return (
		<>
			<TextControl
				label={props.label}
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder}
			/>
			<p>Options Include: wsu-c-pattern--angled-lines-crimson-top-left, wsu-c-pattern--plus-crimson-top-right, wsu-c-pattern--plus-crimson-bottom-right, wsu-c-pattern--plus-crimson-bottom-left, wsu-c-pattern--solid-crimson-bottom-left, wsu-c-pattern--solid-crimson-top-right.</p>
		</>
	)
}

export default PatternControl;