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

import { 
	bleedLeftControlAtts, 
	bleedRightControlAtts, 
	backgroundColorControlAtts,
	fullWidthControlAtts,
	indentControlAtts,
	isNotchedControlAtts,
	limitContentWidthControlAtts,
} from '../../../block-controls/';


registerBlockType(
	"wsuwp/group",
	{
		title: "WSU Content Group",
		category: "content",
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M41 14C41 12.8954 40.1046 12 39 12H9C7.89543 12 7 12.8954 7 14V34C7 35.1046 7.89543 36 9 36H39C40.1046 36 41 35.1046 41 34V14ZM39 34V14H9V34H39Z" /></svg>,
		attributes: {
			...globalBlockAtts,
			...fullWidthControlAtts,
			...limitContentWidthControlAtts,
			...backgroundColorControlAtts,
			...indentControlAtts,
			...isNotchedControlAtts,
			decorators: {
				type: 'array',
				default: [],
			},
		},
		edit,
		save,
	}
);