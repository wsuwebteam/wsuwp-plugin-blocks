/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { URLInputButton } = wp.editor;
import { heading as icon } from '@wordpress/icons';

import edit from "./edit";
//import save from "./save"; 


registerBlockType(
	"wsuwp/em-heading",
	{
		title: "EM Heading",
		category: "content",
		icon,
		attributes: {
			align: {
				"type": "string"
			},
			content: {
				"type": "string",
				"default": ""
			},
			link: {
				"type": "string",
				"default": ""
			},
			level: {
				"type": "number",
				"default": 2
			},
			style: {
				"type": "string",
				"default":'default'
			},
			textAlign: {
				type: 'string',
				default: 'default',
			},
			paddingBefore: {
				type: 'string',
				default: 'default',
			},
			paddingAfter: {
				type: 'string',
				default: 'default',
			},
			marginBefore: {
				type: 'string',
				default: 'default',
			},
			marginAfter: {
				type: 'string',
				default: 'default',
			},
		},

		edit

	}
);

