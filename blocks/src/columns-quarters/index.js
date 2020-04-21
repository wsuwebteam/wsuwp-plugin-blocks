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
	"wsuwp/columns-quarters",
	{
		title: "Columns: Quarters",
		icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M25,14h6v20h-6V14z M23,34h-6 V14h6V34z M9,14h6v20H9V14z M39,34h-6V14h6V34z" /></SVG>,
		category: "layout",

		attributes: {
			format: {
				type: 'string',
				default: 'quarters',
			},
		},

		edit,
		save,

	}
);


