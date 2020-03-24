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

import './edit.scss';


registerBlockType(
	"wsuwp/search-bar",
	{
		title: "Search Bar",
		category: "content",

		attributes: {
			placeholder: {
				type: 'string',
			},
		},

		edit

	}
);
