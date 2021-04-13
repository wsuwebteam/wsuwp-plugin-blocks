/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { URLInputButton } = wp.blockEditor;

import edit from "./edit";

import { 
	feedControlAtts,
	globalBlockAtts
} from '../../../block-controls/index';


import './style.scss'; 


registerBlockType(
	"wsuwp/news",
	{
		title: "News",
		category: "content",
		icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="2" width="16" height="4" rx="2"/><rect y="10" width="16" height="4" rx="2"/><rect y="18" width="16" height="4" rx="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 1C20.4477 1 20 1.44772 20 2V3H19C18.4477 3 18 3.44772 18 4C18 4.55228 18.4477 5 19 5H20V6C20 6.55228 20.4477 7 21 7C21.5523 7 22 6.55228 22 6V5H23C23.5523 5 24 4.55229 24 4C24 3.44772 23.5523 3 23 3H22V2C22 1.44772 21.5523 1 21 1Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 9C20.4477 9 20 9.44772 20 10V11H19C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H20V14C20 14.5523 20.4477 15 21 15C21.5523 15 22 14.5523 22 14V13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H22V10C22 9.44772 21.5523 9 21 9Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 17C20.4477 17 20 17.4477 20 18V19H19C18.4477 19 18 19.4477 18 20C18 20.5523 18.4477 21 19 21H20V22C20 22.5523 20.4477 23 21 23C21.5523 23 22 22.5523 22 22V21H23C23.5523 21 24 20.5523 24 20C24 19.4477 23.5523 19 23 19H22V18C22 17.4477 21.5523 17 21 17Z"/></svg>,
		attributes: {
			source: {
				type: 'string',
				default: 'insert',
			},
			type: {
				type: 'string',
				default: 'default',
			},
			itemsPerRow: {
				type: 'string',
				default: '3',
			},
			...globalBlockAtts,
			...feedControlAtts,
		},
		edit
	}
);
