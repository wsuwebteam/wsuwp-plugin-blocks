/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { URLInputButton } = wp.editor;

import edit from "./edit";
import save from "./save";

import './style.scss';  


registerBlockType(
	"wsuwp/cards",
	{
		title: "Cards",
		category: "content",
		icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5C7 4.44772 7.44772 4 8 4H20C20.5523 4 21 4.44772 21 5V21C21 21.5523 20.5523 22 20 22H8C7.44772 22 7 21.5523 7 21V5Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2H20C21.6569 2 23 3.34314 23 5V21C23 22.6569 21.6569 24 20 24H8C6.34315 24 5 22.6569 5 21V5C5 3.34315 6.34314 2 8 2ZM8 4C7.44772 4 7 4.44772 7 5V21C7 21.5523 7.44772 22 8 22H20C20.5523 22 21 21.5523 21 21V5C21 4.44772 20.5523 4 20 4H8Z"/><path d="M3 3C3 2.44772 3.44772 2 4 2H16C16.5523 2 17 2.44772 17 3V19C17 19.5523 16.5523 20 16 20H4C3.44772 20 3 19.5523 3 19V3Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H16C17.6569 0 19 1.34314 19 3V19C19 20.6569 17.6569 22 16 22H4C2.34315 22 1 20.6569 1 19V3C1 1.34315 2.34314 0 4 0ZM4 2C3.44772 2 3 2.44772 3 3V19C3 19.5523 3.44772 20 4 20H16C16.5523 20 17 19.5523 17 19V3C17 2.44772 16.5523 2 16 2H4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C14 10.2091 12.2091 12 10 12C7.79086 12 6 10.2091 6 8C6 5.79086 7.79086 4 10 4C12.2091 4 14 5.79086 14 8ZM10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 18C5.89543 18 5 17.1046 5 16V13.1429C5 12.931 5.03365 12.7206 5.09969 12.5193C5.38336 11.6548 6.09958 11.0259 6.85842 10.643C7.67298 10.232 8.71659 10 10 10C11.2834 10 12.327 10.232 13.1416 10.643C13.9004 11.0259 14.6166 11.6548 14.9003 12.5193C14.9664 12.7206 15 12.931 15 13.1429V16C15 17.1046 14.1046 18 13 18H7ZM13 16H7V13.1429C7.125 12.7619 7.9 12 10 12C12.1 12 12.875 12.7619 13 13.1429V16Z"/></svg>,
		attributes: {
			asModal: {
				type: 'boolean',
				default: false,
			},
			cardsPerRow: {
				type: 'number',
				default: 0,
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
			},
			showTags: {
				type: 'boolean',
				default: false,
			},
			showAuthor: {
				type: 'boolean',
				default: false,
			},
			showPublishDate: {
				type: 'boolean',
				default: false,
			},
			showTitle: {
				type: 'boolean',
				default: false,
			},
			showImg: {
				type: 'boolean',
				default: false,
			},
			source: {
				type: 'string',
				default: '',
			},
			sourcePostType: {
				type: 'string',
				default: 'post',
			},
			sourceTaxonomy: {
				type: 'string',
				default: 'category',
			},
			sourceTerms: {
				type: 'string',
				default: '',
			},
			sourceLogic: {
				type: 'string',
				default: 'OR',
			},
			sourceOffset: {
				type: 'number',
				default: 0,
			},
			sourceExclude: {
				type: 'string',
				default: '',
			},
			sourceCount: {
				type: 'number',
				default: 3,
			},
		},
		edit,
		save

	}
);
