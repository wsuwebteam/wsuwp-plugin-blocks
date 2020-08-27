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

import './style.scss';


registerBlockType(
	"wsuwp/search-bar",
	{
		title: "Search Bar",
		category: "content",
		icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 5V19H19V5H5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1716 13.7574C15.6951 12.967 16 12.0191 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16C12.0191 16 12.967 15.6951 13.7574 15.1716L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L15.1716 13.7574ZM14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11Z"/></svg>,
		attributes: {
			placeholder: {
				type: 'string',
				default: ''
			},
			id: {
				type: 'string',
				default: ''
			},
		},

		edit

	}
);