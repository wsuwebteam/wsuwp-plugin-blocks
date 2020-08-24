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
	"wsuwp/button",
	{
		title: "Button",
		category: "content",

		attributes: {
			buttonText: {
				type: 'string',
				default: '',
			},
			buttonUrl: {
				type: 'string',
				default: '',
			},
			shape: {
				type: 'string',
				default: 'default',
			},
			color: {
				type: 'string',
				default: 'default',
			},
			size: {
				type: 'string',
				default: 'default',
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
			buttonAlign: {
				type: 'string',
				default: 'default',
			},
			iconBefore: {
				type: 'string',
				default: '',
			},
			iconAfter: {
				type: 'string',
				default: '',
			}
		},

		edit

	}
);
