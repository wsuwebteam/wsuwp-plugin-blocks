/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType, registerBlockCollection } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { URLInputButton } = wp.blockEditor;

import edit from "./edit";

import './style.scss';

registerBlockType(
	"wsuwp-em/stat",
	{
		title: "Stat (EM)",
		category: "content",
		icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 -1.04907e-06L24 23.9999L48 23.9999C48 23.1233 47.953 22.2576 47.8614 21.4053C46.6593 10.2231 37.7768 1.34067 26.5946 0.138619C25.7423 0.0469997 24.8766 -1.01075e-06 24 -1.04907e-06ZM26.5946 2.75025L26.5946 21.4053L45.2497 21.4053C44.0719 11.6576 36.3423 3.92806 26.5946 2.75025ZM24 26.5945C22.5671 26.5945 21.4054 25.4329 21.4054 23.9999L21.4054 0.138617C20.5254 0.233211 19.6597 0.375369 18.8108 0.562468C8.05056 2.93412 4.82653e-06 12.5269 4.32503e-06 24C3.74564e-06 37.2548 10.7452 48 24 48C35.4731 48 45.0659 39.9494 47.4375 29.1891C47.6246 28.3402 47.7668 27.4745 47.8614 26.5945L24 26.5945ZM44.7726 29.1891L24 29.1891C21.1341 29.1891 18.8108 26.8658 18.8108 23.9999L18.8108 3.22737C9.49723 5.54589 2.5946 13.9683 2.5946 24C2.5946 35.8219 12.1781 45.4054 24 45.4054C34.0317 45.4054 42.4542 38.5027 44.7726 29.1891Z"/></svg>,
		attributes: {
			value: {
				type: 'string',
				default: ''
			},
			label: {
				type: 'string',
				default: '',
			},
			description: {
				type: 'string',
				default: '',
			},
			prefix: {
				type: 'string',
				default: '',
			},
			suffix: {
				type: 'string',
				default: '',
			},
			separator: {
				type: 'string',
				default: ',',
			},
			duration: {
				type: 'number',
				default: 1.5,
			},
			alignment: {
				type: 'string',
				default: 'default'
			},
			isDark: {
				type: 'boolean',
				default: false,
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
		},

		edit
	}
);