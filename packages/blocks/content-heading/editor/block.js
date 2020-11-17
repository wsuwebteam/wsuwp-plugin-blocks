/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { URLInputButton } = wp.blockEditor;
import { heading as icon } from '@wordpress/icons';

import { 
	fontSizeControlAtts,
	fontWeightControlAtts,
	indentControlAtts,
} from '../../../block-controls';

import edit from "./edit";
//import save from "./save";
import globalBlockAtts from '../../../block-controls/global-block-atts';

import './style.scss';

registerBlockType(
	"wsuwp/heading",
	{
		title: "Heading",
		category: "content",
		icon,
		attributes: {
			...globalBlockAtts,
			...fontSizeControlAtts,
			...fontWeightControlAtts,
			...indentControlAtts,
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
		},
		edit
	}
);


