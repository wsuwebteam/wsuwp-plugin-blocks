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
import save from "./save";


registerBlockType(
	"wsuwp/em-callout", 
	{
		title: "EM Callout",
		category: "content", 

		attributes: {
			imageSrc:{
				type: 'string',
				default: '',
			},
			imageAlt:{
				type: 'string',
				default: '',
			},
			imageSize:{
				type: 'string',
				default: 'default',
			},
			shape:{
				type: 'string',
				default: 'default',
			},
			style:{
				type: 'string',
				default: 'default',
			},
			link:{
				type: 'string',
				default: '',
			},
			eyebrowHeader:{
				type: 'string',
				default: '',
			},
			title:{
				type: 'string',
				default: '',
			},
			tag:{
				type: 'string',
				default: 'h3',
			},
			description:{
				type: 'string',
				default: '',
			},
			layout:{
				type: 'string',
				default: 'default',
			},
			verticalAlign:{
				type: 'string',
				default: 'default',
			}, 
			isNotched:{
				type: 'boolean',
				default: false,
			},
			buttonText: {
				type: 'string',
				default: '',
			},
			buttonUrl: {
				type: 'string',
				default: '',
			},
			videoSrc: {
				type: 'string',
				default: '',
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
			titleSize: {
				type: 'string',
				default: 'default',
			},
			borderColor: {
				type: 'string',
				default: 'default',
			},
			bleedImage:{
				type: 'boolean',
				default: false,
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
			id: {
				type: 'string',
				default: ''
			},
		},

		edit,
		save

	}
);