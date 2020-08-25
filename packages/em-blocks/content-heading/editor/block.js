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
	"wsuwp-em/heading",
	{
		title: "Heading (EM)",
		category: "content",
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.9507 2C28.9507 0.89543 29.8462 0 30.9507 0H46C47.1046 0 48 0.89543 48 2V46C48 47.1046 47.1046 48 46 48H30.9507C29.8462 48 28.9507 47.1046 28.9507 46V31.7829H19.0493V46C19.0493 47.1046 18.1538 48 17.0493 48H2C0.89543 48 0 47.1046 0 46V2C0 0.89543 0.89543 0 2 0H17.0493C18.1538 0 19.0493 0.89543 19.0493 2V15.5886H28.9507V2ZM30.9507 2H46V46H30.9507V29.7829H17.0493V46H2V2H17.0493V17.5886H30.9507V2Z"/></svg>,
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
			id: {
				type: 'string',
				default: ''
			},
		},

		edit

	}
);


