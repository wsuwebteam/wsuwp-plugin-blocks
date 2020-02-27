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


registerBlockType(
	"wsuwp/post-title",
	{
		title: "Post Title",
		category: "content",

		attributes: {},

		edit

	}
);
