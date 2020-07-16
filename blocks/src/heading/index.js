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

import './editor.scss';

registerBlockType(
	"wsuwp/heading",
	{
		title: "Heading",
		category: "content",
		icon,
		attributes: {
			"align": {
				"type": "string"
			},
			"content": {
				"type": "string",
				"default": ""
			},
			"level": {
				"type": "number",
				"default": 2
			},
			"placeholder": {
				"type": "string"
			}
		},

		edit

	}
);
