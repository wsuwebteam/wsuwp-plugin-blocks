/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

import edit from "./edit";
import save from './save';

import './style.scss';

const TEMPLATE = [
	['core/heading', { width: 33.33 }, []],
]

registerBlockType(
	"wsuwp/column",
	{
		title: "WSU Column",
		parent: [ 'core/columns-single' ],
		category: "common",
		attributes: {
			format: {
				type: 'string',
				default: '',
			},
			backgroundColor: {
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
			}
		},

		edit,
		save,

	}
);