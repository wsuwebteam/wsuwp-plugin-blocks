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
import save from "./save";
import globalBlockAtts from '../../../block-controls/global-block-atts';

import './style.scss'; 


registerBlockType(
	"wsuwp/card",
	{
		title: "Card",
		category: "content",
		icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 1H18C19.6569 1 21 2.34314 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4C3 2.34315 4.34314 1 6 1ZM6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3H6ZM8.95601 11.5951C8.35989 10.8966 8 9.99032 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 9.99032 15.6401 10.8966 15.044 11.5951C15.0769 11.6108 15.1094 11.6268 15.1416 11.643C15.9004 12.0259 16.6166 12.6548 16.9003 13.5193C16.9664 13.7206 17 13.931 17 14.1429V17C17 18.1046 16.1046 19 15 19H9C7.89543 19 7 18.1046 7 17V14.1429C7 13.931 7.03365 13.7206 7.09969 13.5193C7.38336 12.6548 8.09958 12.0259 8.85842 11.643C8.89059 11.6268 8.92312 11.6108 8.95601 11.5951ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11ZM9 17H15V14.1429C14.875 13.7619 14.1 13 12 13C9.9 13 9.125 13.7619 9 14.1429V17Z"/></svg>,
		attributes: {
			...globalBlockAtts,
			cardType: {
				type: 'string',
				default: 'default'
			},
			imageCaption: {
				type: 'string',
				default: '',
			},
			imgSrc: {
				type: 'string',
				default: '',
			},
			imgSrc: {
				type: 'string',
				default: '',
			},
			imgFocalPoint: {
				type: 'object',
				default: {
					x: 0.2,
					y: 0.5
				}
			},
			imgDimensions: {
				type: 'object',
				default: {
					width: 1070,
					height: 500
				}
			},
			preTitle: {
				type: 'string',
				default: '',
			},
			title: {
				type: 'string',
				default: '',
			},
			subtitle: {
				type: 'string',
				default: '',
			},
			caption: {
				type: 'string',
				default: '',
			},
			link: {
				type: 'string',
				default: '',
			},
			asModal: {
				type: 'boolean',
				default: false,
			},
			buttonText: {
				type: 'string',
				default: '',
			},
			buttonUrl: {
				type: 'string',
				default: '',
			},
			showTags: {
				type: 'boolean',
				default: false,
			},
			showAuthor: {
				type: 'boolean',
				default: false,
			},
			date: {
				type: 'string',
				default: '',
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
			addressLine1: {
				type: 'string',
				default: ''
			},
			addressLine2: {
				type: 'string',
				default: ''
			},
			phoneNumber: {
				type: 'string',
				default: ''
			},
			email: {
				type: 'string',
				default: ''
			},
			website: {
				type: 'string',
				default: ''
			},
			authorName: {
				type: 'string',
				default: ''
			},
			authorUrl: {
				type: 'string',
				default: ''
			},
		},
		edit,
		save
	}
);
