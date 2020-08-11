/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType, registerBlockCollection } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { URLInputButton } = wp.editor;

import edit from "./edit";

import './style.scss';

registerBlockType(
	"wsuwp/em-stat",
	{
		title: "EM Stat",
		category: "content",
		attributes: {

		},

		edit
	}
);