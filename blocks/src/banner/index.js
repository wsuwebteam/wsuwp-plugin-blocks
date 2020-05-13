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
				<g clip-path="url(#clip0)">
					<path d="M19.8962 14.6532L18.4399 13.0626H18.9982C19.1625 13.0626 19.3078 12.9747 19.377 12.833C19.4463 12.6917 19.4235 12.5296 19.3173 12.4103L17.893 10.8126H18.4197C18.5855 10.8126 18.735 10.7186 18.7999 10.5734C18.8641 10.4305 18.8338 10.2642 18.7226 10.1501L16.7125 8.085C16.6026 7.97162 16.3975 7.97162 16.2874 8.085L14.2771 10.1501C14.1659 10.2642 14.1358 10.4305 14.1998 10.5734C14.2647 10.7186 14.4143 10.8126 14.5802 10.8126H15.1069L13.6824 12.4106C13.5765 12.5298 13.5537 12.6917 13.6228 12.8332C13.6921 12.9747 13.8372 13.0626 14.0016 13.0626H14.56L13.1037 14.6532C12.9943 14.7726 12.9695 14.9361 13.0388 15.0797C13.1071 15.2212 13.2575 15.3126 13.4218 15.3126H15.9166V15.7424L15.3644 16.5932C15.2675 16.7802 15.4086 17.0003 15.6253 17.0003H17.3746C17.5913 17.0003 17.7324 16.7802 17.6354 16.5932L17.0833 15.7424V15.3126H19.5781C19.7424 15.3126 19.8927 15.2212 19.9611 15.0797C20.0304 14.9361 20.0056 14.7726 19.8962 14.6532Z" fill="#555D66" />
				</g>
				<defs>
					<clipPath id="clip0">
						<rect x="13" y="8" width="7" height="9" fill="white" />
					</clipPath>
				</defs>
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
