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
import save from './save';
import globalBlockAtts from '../../../block-controls/global-block-atts';

import './style.scss'; 


registerBlockType(
	"wsuwp/quote",
	{
		title: "Quote",
		category: "content",
		icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 9H7V7H17V9Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 11H7V10H10V11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 13H7V12H17V13Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 15H7V14H17V15Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 17H7V16H13V17Z"/></svg>,
		attributes: {
			...globalBlockAtts,
			name: {
				type: 'string',
				default: '',
			},
			title: {
				type: 'string',
				default: '',
			},
			cite: {
				type: 'string',
				default: '',
			},
			citeUrl: {
				type: 'string',
				default: '',
			},
			citeAlign: {
				type: 'string',
				default: 'default',
			},
			color: {
				type: 'string',
				default: 'default',
			},
			textSize: {
				type: 'string',
				default: 'default',
			},
			width: {
				type: 'string',
				default: 'default',
			},
		},
		edit,
		save
	}
);
