/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { Path, SVG } = wp.components;

import { ColumnsEdit as edit } from "../columns/edit";
import save from '../columns/save';

registerBlockType(
	"wsuwp/columns-sidebar-left",
	{
		title: "Columns: Sidebar Left",
		icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z" /></SVG>,
		category: "layout",

		attributes: {
			format: {
				type: 'string',
				default: 'sidebar-left',
			},
			backgroundColor: {
				type: 'string',
				default: 'default',
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


