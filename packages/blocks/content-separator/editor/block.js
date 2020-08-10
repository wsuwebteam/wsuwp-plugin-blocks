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

import './style.scss';


registerBlockType(
	"wsuwp/separator",
	{
		title: "Separator",
		category: "content",

		attributes: {
			isHatched: {
				type: 'string',
				default: 'default',
			},
			showMoreIndicator: {
				type: 'string',
				default: 'default',	
			},
		},

		edit
	}
);