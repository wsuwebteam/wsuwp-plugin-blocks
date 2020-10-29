import classnames from 'classnames';

const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls, InspectorControls, }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;
const { 
	ToggleControl,
	Panel,
	PanelBody,
} = wp.components;

import { 
	DisplayOptionsPanel,
	FontSizeControl,
	FontWeightControl,
	IndentControl,
} from '../../block-controls';

//restrict to specific block names
const allowedBlocks = [ 'core/paragraph' ];

const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const {
			name,
			attributes,
			setAttributes,
			isSelected,
		} = props;

		const {
			visibleOnMobile,
		} = attributes;
		
		
		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected && allowedBlocks.includes( name ) &&
					<InspectorControls>
						<DisplayOptionsPanel >
							<FontSizeControl attributes={attributes} setAttributes={setAttributes} />
							<FontWeightControl attributes={attributes} setAttributes={setAttributes} />
							<IndentControl attributes={attributes} setAttributes={setAttributes} />
						</DisplayOptionsPanel >
					</InspectorControls>
				}

			</Fragment>
		);
	};
}, 'withAdvancedControls');

function addAttributes( settings ) {
	
	//check if object exists for old Gutenberg version compatibility
	//add allowedBlocks restriction
	if( typeof settings.attributes !== 'undefined' && allowedBlocks.includes( settings.name ) ){
	
		settings.attributes = Object.assign( settings.attributes, {
			fontSize:{ 
				type: 'string',
				default: '',
			},
			fontWeight:{ 
				type: 'string',
				default: '',
			},
			indent:{ 
				type: 'string',
				default: '',
			}
		});
    
	}

	return settings;
}

function applyExtraClass( extraProps, blockType, attributes ) {

	const { fontSize, fontWeight, indent } = attributes;

	let empty = ['','default'];
	
	if ( allowedBlocks.includes( blockType.name ) ) {

		let classNames = [ extraProps.className ];

		if ( attributes.hasOwnProperty( 'fontSize' ) && ! empty.includes( attributes.fontSize ) ) {
			classNames.push( 'wsu-u-font-size--' + attributes.fontSize );
		}

		if ( attributes.hasOwnProperty( 'fontWeight' ) && ! empty.includes( attributes.fontWeight ) ) {
			classNames.push( 'wsu-u-font-weight--' + attributes.fontWeight );
		}

		if ( attributes.hasOwnProperty( 'indent' ) && ! empty.includes( attributes.indent ) ) {
			classNames.push( 'wsu-u-indent--' + attributes.indent );
		}

		extraProps.className = classNames.join( ' ' );

	}

	console.log( extraProps );

	return extraProps;
}


addFilter(
	'editor.BlockEdit',
	'editorskit/custom-advanced-control',
	withAdvancedControls
);

addFilter(
	'blocks.registerBlockType',
	'editorskit/custom-attributes',
	addAttributes
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'editorskit/applyExtraClass',
	applyExtraClass
);