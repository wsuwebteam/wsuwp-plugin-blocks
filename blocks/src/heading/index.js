/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { URLInputButton } = wp.editor;

import edit from "./editor";
//import save from "./save";

import './editor.scss';

registerBlockType(
	"wsuwp/heading",
	{
		title: "Heading",
		category: "content",

		attributes: {
			url: {
				type: 'string',
			},
			content: {
				type: 'string',
				default: '',
			},
			level: {
				type: 'string',
				default: '2',
			}
		},

		edit

	}
);
