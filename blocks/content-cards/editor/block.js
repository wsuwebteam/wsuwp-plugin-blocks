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
