/**
 *
 * WordPress Dependencies
 *
 */
const { registerBlockType } = wp.blocks;

import edit from './edit';
import { globalBlockAtts } from '../../../block-controls';

import './style.scss'; 

registerBlockType(
	'wsuwp/video',
	{
		title: 'Video',
		category: 'content',
		icon: 'video-alt3',
		attributes: {
			...globalBlockAtts,
			url: {
				type: 'string',
				default: ''
			},
		},
		edit
	}
);
