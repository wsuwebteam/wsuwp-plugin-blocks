/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	Icon
} = wp.components;

import './style.scss';
import edit from "./edit";
import save from './save';

registerBlockType(
	"wsuwp/columns",
	{
		title: "Columns",
		category: "layout",

		icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,

		attributes: {
			layout: {
				type: 'string',
				default: '',
			},
			backgroundColor: {
				type: 'string',
				default: 'default',
			},
			paddingBefore: {
				type: 'string',
				default: 'default',
			},
			paddingAfter: {
				type: 'string',
				default: 'default',
			},
			imageCaption: {
				type: 'string',
				default: '',
			},
			imgSrc: {
				type: 'string',
				default: '',
			},
			verticalSpacing: {
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
			id: {
				type: 'string',
				default: ''
			},
		},

		edit,
		save,
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'wsuwp/columns-halves' ],
					transform: (  attributes, innerBlocks ) => {
						return createBlock( 
							'wsuwp/columns', 
							{layout:'halves'},
							innerBlocks
						);
					},
				},
			]
		},

	}
);
