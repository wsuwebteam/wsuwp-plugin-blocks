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
	"wsuwp/banner",
	{
		title: "Banner",
		category: "content",

		attributes: {
			img_src: {
				type: 'string',
				default: '',
			},
			title: {
				type: 'string',
				default: 'Odio et purus metus placerat neque.',
			},
			subtitle: {
				type: 'string',
				default: 'Consectetur adipiscing elit donec fringilla',
			},
			url: {
				type: 'string',
				default: '',
			},
			button_text: {
				type: 'string',
				default: 'Lorem Ipsum',
			},
			caption_text: {
				type: 'string',
				default: 'By consectetur adipiscing elit donec fringilla',
			}
		},

		edit

	}
);
