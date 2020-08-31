/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

import edit from "./edit";
import save from './save';
import globalBlockAtts from '../../../block-controls/global-block-atts';

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
			...globalBlockAtts,
			format: {
				type: 'string',
				default: '',
			},
			backgroundColor: {
				type: 'string',
				default: 'default',
			},
		},
		edit,
		save,
	}
);