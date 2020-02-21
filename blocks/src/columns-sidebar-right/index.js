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
	"wsuwp/columns-sidebar-right",
	{
		title: "Columns: Sidebar Right",
		category: "layout",
		
		attributes: {
			format: {
				type: 'string',
				default: 'sidebar-right',
			},
		},

		edit,
		save,

	}
);


