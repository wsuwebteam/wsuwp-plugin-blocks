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

registerBlockType(
	"wsuwp-em/callout", 
	{
		title: "Callout (EM)",
		category: "content",
		icon: <svg width="12" height="31" viewBox="0 0 12 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.3076 17.7434C1.73446 17.4212 1.35629 16.8379 1.29607 16.1832L0.00841373 2.18318C-0.043086 1.62325 0.143496 1.06751 0.522449 0.652105C0.901403 0.236697 1.43772 0 2.00001 0H10C10.5623 0 11.0986 0.236697 11.4776 0.652105C11.8565 1.06751 12.0431 1.62325 11.9916 2.18318L10.7039 16.1832C10.6437 16.8379 10.2656 17.4212 9.69242 17.7434C9.11928 18.0656 8.4244 18.0855 7.83375 17.7967C7.28931 17.5304 6.66543 17.3815 6.00001 17.3815C5.33458 17.3815 4.7107 17.5304 4.16626 17.7967C3.57561 18.0855 2.88073 18.0656 2.3076 17.7434ZM12 24.9664C12 28.2191 9.53729 31 6.00001 31C2.46272 31 7.45053e-06 28.2191 7.45053e-06 24.9664C7.45053e-06 21.6245 2.51707 19 6.00001 19C9.48295 19 12 21.6245 12 24.9664ZM3.28767 16C3.89234 15.7043 4.5525 15.509 5.24335 15.4264C5.49198 15.3966 5.74459 15.3814 6.00001 15.3814C6.25543 15.3814 6.50804 15.3966 6.75667 15.4264C7.44751 15.509 8.10767 15.7043 8.71235 16L10 2H2.00001L3.28767 16ZM10 24.9664C10 27.1849 8.36364 29 6.00001 29C3.63637 29 2.00001 27.1849 2.00001 24.9664C2.00001 22.7143 3.63637 21 6.00001 21C8.36364 21 10 22.7143 10 24.9664Z"/></svg>,
		attributes: {
			imageSrc:{
				type: 'string',
				default: '',
			},
			imageAlt:{
				type: 'string',
				default: '',
			},
			imageSize:{
				type: 'string',
				default: 'default',
			},
			shape:{
				type: 'string',
				default: 'default',
			},
			style:{
				type: 'string',
				default: 'default',
			},
			link:{
				type: 'string',
				default: '',
			},
			eyebrowHeader:{
				type: 'string',
				default: '',
			},
			title:{
				type: 'string',
				default: '',
			},
			tag:{
				type: 'string',
				default: 'h3',
			},
			description:{
				type: 'string',
				default: '',
			},
			layout:{
				type: 'string',
				default: 'default',
			},
			verticalAlign:{
				type: 'string',
				default: 'default',
			}, 
			isNotched:{
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
			videoSrc: {
				type: 'string',
				default: '',
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
			titleSize: {
				type: 'string',
				default: 'default',
			},
			borderColor: {
				type: 'string',
				default: 'default',
			},
			bleedImage:{
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
			id: {
				type: 'string',
				default: ''
			},
		},

		edit,
		save

	}
);