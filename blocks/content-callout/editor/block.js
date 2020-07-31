/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { URLInputButton } = wp.editor;

import edit from "./edit";
import save from "./save";

import './style.scss'; 


registerBlockType(
	"wsuwp/callout",
	{
		title: "Callout",
		category: "content",

		attributes: {
			imageSrc:{
				type: 'string',
				default: '',
			},
			imageAlt:{
				type: 'string',
				default: '',
			},
			imageSize:{
				type: 'string',
				default: 'default',
			},
			shape:{
				type: 'string',
				default: 'default',
			},
			link:{
				type: 'string',
				default: '',
			},
			title:{
				type: 'string',
				default: '',
			},
			tag:{
				type: 'string',
				default: 'h3',
			},
			description:{
				type: 'string',
				default: '',
			},
			layout:{
				type: 'string',
				default: 'default',
			},
			verticalAlign:{
				type: 'string',
				default: 'default',
			}, 
			isNotched:{
				type: 'boolean',
				default: false,
			},
			buttonText: {
				type: 'string',
				default: '',
			},
			buttonUrl: {
				type: 'string',
				default: '',
			},

		},

		edit,
		save

	}
);