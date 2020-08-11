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
	"wsuwp/em-separator",
	{
		title: "EM Separator",
		category: "content",
		attributes: {
			isHatched: {
				type: 'boolean',
				default: false,
			},
			showMoreIndicator: {
				type: 'boolean',
				default: false,
			},
		},

		edit
	}
);