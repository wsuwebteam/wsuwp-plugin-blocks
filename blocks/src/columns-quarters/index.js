/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

import { ColumnsEdit as edit } from "../columns/edit";
import save from '../columns/save';

registerBlockType(
	"wsuwp/columns-quarters",
	{
		title: "Columns: Quarters",
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


