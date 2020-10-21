/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { URLInputimage } = wp.blockEditor;

import edit from "./edit";
import globalBlockAtts from '../../../block-controls/global-block-atts';

import './style.scss'; 

registerBlockType(
	"wsuwp/image",
	{
		title: "Image",
		category: "content",
		icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00031 6C9.10311 6 10.0003 6.8972 10.0003 8C10.0003 9.1028 9.10311 10 8.00031 10C6.89751 10 6.00031 9.1028 6.00031 8C6.00031 6.8972 6.89751 6 8.00031 6ZM8.00031 4C5.79121 4 4.00031 5.7909 4.00031 8C4.00031 10.2091 5.79121 12 8.00031 12C10.2094 12 12.0003 10.2091 12.0003 8C12.0003 5.7909 10.2095 4 8.00031 4Z"/><path d="M9.76431 2L10.2115 2.8944L10.7642 4H12.0003H14.0003V13.0236H2.00031V4H4.00031H5.23641L5.78921 2.8944L6.23641 2H9.76431ZM11.0003 0H5.00031L4.00031 2H2.00031C0.900305 2 0.000305176 2.9 0.000305176 4V13.0236C0.000305176 14.1236 0.900305 15.0236 2.00031 15.0236H14.0003C15.1003 15.0236 16.0003 14.1236 16.0003 13.0236V4C16.0003 2.9 15.1003 2 14.0003 2H12.0003L11.0003 0Z"/></svg>,
		attributes: {
			...globalBlockAtts,
			src: {
				type: 'string',
				default: ''
			},
			alt: {
				type: 'string',
				default: ''
			},
			srcType: {
				type: 'string',
				default: 'media'
			},
			width: {
				type: 'integer',
				default: 0
			},
			height: {
				type: 'integer',
				default: 0
			},
			naturalWidth: {
				type: 'integer',
				default: 0
			},
			naturalHeight: {
				type: 'integer',
				default: 0
			},
			alignment: {
				type: 'string',
				default: ''
			},
			ratio: {
				type: 'number',
				default: 1
			},
			naturalRatio: {
				type: 'number',
				default: 1
			},
			unit: {
				type: 'string',
				default: 'px'
			}
		},
		edit
	}
);
