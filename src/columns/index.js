import assign from 'lodash.assign';
import { __ } from '@wordpress/i18n';
import { Path, SVG } from '@wordpress/components';

const { addFilter } = wp.hooks;

// Create whitelist for which blocks to enable these patterns on
const enableColumnPresetsOnBlock = [
	'core/columns'
];

const addColumnPresets = (settings, name) => {

	// Check if we're inside a whitelisted block
	if (!enableColumnPresetsOnBlock.includes(name)) {
		return settings;
	}

	// Assign new setting patterns
	settings.patterns = assign(settings.patterns,
		settings.patterns[0] = {
			name: 'two-columns-one-third-two-thirds',
			title: __('Two columns; one-third, two-thirds split'),
			icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z" /></SVG>,
			innerBlocks: [
				['core/column', { width: 33.33 }],
				['core/column', { width: 66.66 }],
			],
			scope: ['block'],
		},
		settings.patterns[1] = {
			name: 'two-columns-two-thirds-one-third',
			title: __('Two columns; two-thirds, one-third split'),
			icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z" /></SVG>,
			innerBlocks: [
				['core/column', { width: 66.66 }],
				['core/column', { width: 33.33 }],
			],
			scope: ['block'],
		},
		settings.patterns[2] = {
			name: 'two-columns-equal',
			title: __('Two columns; equal split'),
			icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z" /></SVG>,
			isDefault: true,
			innerBlocks: [
				['core/column'],
				['core/column'],
			],
			scope: ['block'],
		},
		settings.patterns[3] = {
			name: 'three-columns-equal',
			title: __('Three columns; equal split'),
			icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></SVG>,
			innerBlocks: [
				['core/column'],
				['core/column'],
				['core/column'],
			],
			scope: ['block'],
		},
		settings.patterns[4] = {
			name: 'four-columns-equal',
			title: __('Four columns; equal split'),
			icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M25,14h6v20h-6V14z M23,34h-6 V14h6V34z M9,14h6v20H9V14z M39,34h-6V14h6V34z" /></SVG>,
			innerBlocks: [
				['core/column', { width: 25 }],
				['core/column', { width: 25 }],
				['core/column', { width: 25 }],
				['core/column', { width: 25 }],
			],
			scope: ['block'],
		},
	);

	console.log(settings.patterns);

	return settings;
}

addFilter('blocks.registerBlockType', 'wsuwp-plugin-blocks', addColumnPresets);

