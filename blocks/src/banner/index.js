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
			imgSrc: {
				type: 'string',
				default: '',
			},
			title: {
				type: 'string',
				default: 'Odio et purus metus placerat neque.',
			},
			subTitle: {
				type: 'string',
				default: 'Consectetur adipiscing elit donec fringilla',
			},
			url: {
				type: 'string',
				default: '',
			},
			buttonText: {
				type: 'string',
				default: 'Lorem Ipsum',
			}
		},

		edit

	}
);
