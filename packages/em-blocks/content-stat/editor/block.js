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
			value: {
				type: 'number',
				default: 0
			},
			label: {
				type: 'string',
				default: '',
			},
			description: {
				type: 'string',
				default: '',
			},
			prefix: {
				type: 'string',
				default: '',
			},
			suffix: {
				type: 'string',
				default: '',
			},
			separator: {
				type: 'string',
				default: ',',
			},
			duration: {
				type: 'number',
				default: 1.5,
			},
			alignment: {
				type: 'string',
				default: 'default'
			},
			isDark: {
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
		},

		edit
	}
);