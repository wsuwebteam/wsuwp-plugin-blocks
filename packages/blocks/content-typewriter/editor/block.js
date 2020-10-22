/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { URLInputButton } = wp.blockEditor;

import edit from "./edit";
import globalBlockAtts from '../../../block-controls/global-block-atts';

import './style.scss'; 


registerBlockType(
	"wsuwp/typewriter",
	{
		title: "Typewriter Effect",
		category: "content",
		icon: 'book-alt',
		attributes: {
			...globalBlockAtts,
		},
		edit
	}
);
