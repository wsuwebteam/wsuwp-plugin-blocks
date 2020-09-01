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
	"wsuwp/separator",
	{
		title: "Content Separator",
		category: "content",
		icon: <svg width="48" height="26" viewBox="0 0 48 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 13C0.25 12.2873 0.827795 11.7095 1.54054 11.7095H46.7095C47.4222 11.7095 48 12.2873 48 13C48 13.7127 47.4222 14.2905 46.7095 14.2905H1.54054C0.827795 14.2905 0.25 13.7127 0.25 13Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36.3851 2.67568H11.8649C11.1521 2.67568 10.5743 3.25347 10.5743 3.96622V5.90203C10.5743 6.61477 11.1521 7.19257 11.8649 7.19257H36.3851C37.0979 7.19257 37.6757 6.61477 37.6757 5.90203V3.96622C37.6757 3.25347 37.0979 2.67568 36.3851 2.67568ZM11.8649 0.094595C9.72663 0.094595 7.99324 1.82798 7.99324 3.96622V5.90203C7.99324 8.04026 9.72663 9.77365 11.8649 9.77365H36.3851C38.5234 9.77365 40.2568 8.04026 40.2568 5.90203V3.96622C40.2568 1.82798 38.5234 0.094595 36.3851 0.094595H11.8649Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36.3851 18.8074H11.8649C11.1521 18.8074 10.5743 19.3852 10.5743 20.098V22.0338C10.5743 22.7465 11.1521 23.3243 11.8649 23.3243H36.3851C37.0979 23.3243 37.6757 22.7465 37.6757 22.0338V20.098C37.6757 19.3852 37.0979 18.8074 36.3851 18.8074ZM11.8649 16.2264C9.72663 16.2264 7.99324 17.9597 7.99324 20.098V22.0338C7.99324 24.172 9.72663 25.9054 11.8649 25.9054H36.3851C38.5234 25.9054 40.2568 24.172 40.2568 22.0338V20.098C40.2568 17.9597 38.5234 16.2264 36.3851 16.2264H11.8649Z"/></svg>,
		attributes: {
			...globalBlockAtts,
			style: {
				type: 'string',
				default: 'default',
			},
			
		},
		edit
	}
);
