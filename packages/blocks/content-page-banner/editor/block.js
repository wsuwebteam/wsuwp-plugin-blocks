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
	"wsuwp/page-banner",
	{
		title: "Page Banner", 
		category: "content",

		attributes: {
			imageSrc: {
				type: 'string',
				default: '',
			},
			imageAlt: {
				type: 'string',
				default: '',
			},
			imageCaption: {
				type: 'string',
				default: '',
			},
			backgroundColor: {
				type: 'string',
				default: 'default',
			},
			height: {
				type: 'string',
				default: 'default',
			},
			isFullBleed:{
				type: 'boolean',
				default: false,
			},
			isNotched:{
				type: 'boolean',
				default: false,
			},
			paddingBefore: {
				type: 'string',
				default: 'default',
			},
			paddingAfter: {
				type: 'string',
				default: 'default',
			},
			marginBefore: {
				type: 'string',
				default: 'default',
			},
			marginAfter: {
				type: 'string',
				default: 'default',
			},
			patterns: {
				type: 'string',
				default: '',
			},
			imgFocalPoint: {
				type: 'object',
				default: {
					x: 0.2,
					y: 0.5
				}
			},
			imgDimensions: {
				type: 'object',
				default: {
					width: 1070,
					height: 500
				}
			},
		},
		edit

	}
);
