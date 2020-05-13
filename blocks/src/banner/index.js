/**
 *
 * WordPress Dependencies
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { URLInputButton } = wp.editor;

const {
	Icon
} = wp.components;

import edit from "./editor";
//import save from "./save";

import './editor.scss';


registerBlockType(
	"wsuwp/banner",
	{
		title: "Banner",
		icon: <Icon icon={
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6V18H22V6H2ZM1 4C0.447715 4 0 4.44772 0 5V19C0 19.5523 0.447716 20 1 20H23C23.5523 20 24 19.5523 24 19V5C24 4.44772 23.5523 4 23 4H1Z" fill="#555D66" />
				<line x1="3" y1="8.5" x2="9" y2="8.5" stroke="#555D66" />
				<line x1="3" y1="10.5" x2="11" y2="10.5" stroke="#555D66" />
				<line x1="3" y1="12.5" x2="11" y2="12.5" stroke="#555D66" />
				<line x1="3" y1="15" x2="8" y2="15" stroke="#555D66" stroke-width="2" />
				<path d="M19.0714 9.5C19.0714 10.8789 17.9183 12 16.5 12C15.0817 12 13.9286 10.8789 13.9286 9.5C13.9286 8.12109 15.0817 7 16.5 7C17.9183 7 19.0714 8.12109 19.0714 9.5Z" fill="#555D66" />
				<path d="M20.1 17H12.9C12.4018 17 12 16.6641 12 16.25V15.5C12 14.2578 13.2094 13.25 14.7 13.25C15.158 13.25 15.4192 13.5625 16.5 13.5625C17.5487 13.5625 17.8661 13.25 18.3 13.25C19.7906 13.25 21 14.2578 21 15.5V16.25C21 16.6641 20.5982 17 20.1 17Z" fill="#555D66" />
			</svg>

		} />,
		category: "content",

		attributes: {
			img_src: {
				type: 'string',
				default: '',
			},
			img_focal_point: {
				type: 'object',
				default: {
					x: 0.2,
					y: 0.5
				}
			},
			img_dimensions: {
				type: 'object',
				default: {
					width: 1070,
					height: 500
				}
			},
			img_caption: {
				type: 'string',
				default: 'By consectetur adipiscing elit donec fringilla'
			},
			title: {
				type: 'string',
				default: 'Odio et purus metus placerat neque.',
			},
			subtitle: {
				type: 'string',
				default: 'Consectetur adipiscing elit donec fringilla',
			},
			url: {
				type: 'string',
				default: '',
			},
			button_text: {
				type: 'string',
				default: 'Lorem Ipsum',
			},
			caption_text: {
				type: 'string',
				default: 'By consectetur adipiscing elit donec fringilla',
			}
		},

		edit

	}
);
