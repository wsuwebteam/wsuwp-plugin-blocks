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
import globalBlockAtts from '../../../block-controls/global-block-atts';

import './style.scss'; 

registerBlockType(
	"wsuwp/page-banner",
	{
		title: "Page Banner", 
		category: "content",
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="15" width="48" height="18"/><line x1="2.5" y1="12.5" x2="38.5" y2="12.5" stroke="#555D66" stroke-opacity="0.5" stroke-linecap="round"/><line x1="2.5" y1="8.5" x2="45.5" y2="8.5" stroke="#555D66" stroke-opacity="0.5" stroke-linecap="round"/><line x1="3" y1="4" x2="30" y2="4" stroke="#555D66" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/><line x1="2.5" y1="44.5" x2="19.5" y2="44.5" stroke="#555D66" stroke-opacity="0.5" stroke-linecap="round"/><line x1="25.5" y1="44.5" x2="42.5" y2="44.5" stroke="#555D66" stroke-opacity="0.5" stroke-linecap="round"/><line x1="2.5" y1="40.5" x2="22.5" y2="40.5" stroke="#555D66" stroke-opacity="0.5" stroke-linecap="round"/><line x1="25.5" y1="40.5" x2="45.5" y2="40.5" stroke="#555D66" stroke-opacity="0.5" stroke-linecap="round"/><line x1="3" y1="36" x2="15" y2="36" stroke="#555D66" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/><line x1="26" y1="36" x2="38" y2="36" stroke="#555D66" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/></svg>,
		attributes: {
			...globalBlockAtts,
			imageSrc: {
				type: 'string',
				default: '',
			},
			imageAlt: {
				type: 'string',
				default: '',
			},
			imageCaption: {
				type: 'string',
				default: '',
			},
			backgroundColor: {
				type: 'string',
				default: 'default',
			},
			height: {
				type: 'string',
				default: 'default',
			},
			isFullBleed:{
				type: 'boolean',
				default: false,
			},
			isNotched:{
				type: 'boolean',
				default: false,
			},
			patterns: {
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
			title: {
				type: 'string',
				default: ''
			},
			eyebrowHeader: {
				type: 'string',
				default: ''
			},
			overlay: {
				type: 'string',
				default: 'default'
			},
			textAlign: {
				type: 'string',
				default: 'default'
			},
			titleTag: {
				type: 'string',
				default: 'h2'
			},
			decorators: {
				type: 'array',
				default: [],
			}
		},
		edit

	}
);
