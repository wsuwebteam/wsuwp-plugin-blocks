/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { URLInputButton } = wp.blockEditor;
const {
	Icon
} = wp.components;

import edit from "./edit";
import globalBlockAtts from '../../../block-controls/global-block-atts';

registerBlockType(
	"wsuwp-em/hero",
	{
		title: "Hero Banner (EM)",
		category: "content",
		icon: 'book-alt',
		attributes: {
			...globalBlockAtts,
			title: {
				type: 'string',
				default: '',
			},
			titleTag: {
				type: 'string',
				default: '',
			},
			titleAriaLabel: {
				type: 'string',
				default: '',
			},
			description: {
				type: 'string',
				default: '',
			},
			backgroundImageUrl: {
				type: 'string',
				default: 'https://s3.wp.wsu.edu/uploads/sites/2438/2020/08/Coug-Logo-on-Chinook-crop_8520.jpg'
			},
			decorators: {
				type: 'array',
				default: [],
			}
		},
		edit
	}
);
