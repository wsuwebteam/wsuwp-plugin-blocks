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
	"wsuwp/columns-thirds",
	{
		title: "Columns: Thirds",
		category: "layout",

		attributes: {
			format: {
				type: 'string',
				default: 'thirds',
			},
		},

		edit,
		save,

	}
);


