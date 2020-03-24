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
//import save from "./save";

import './editor.scss';


registerBlockType(
	"wsuwp/posts",
	{
		title: "Posts",
		category: "content",

		attributes: {
			count: {
				type: 'string',
			},
			display: {
				type: 'string',
			},
			show_img: {
				type: 'string',
			},
			show_title: {
				type: 'string',
			},
			show_excerpt: {
				type: 'string',
			},
			link: {
				type: 'string',
			},
		},

		edit

	}
);
