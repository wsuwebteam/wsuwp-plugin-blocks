
const {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	__experimentalNumberControl
} = wp.components;

const NumberControl = __experimentalNumberControl;

import { spacingOptions } from '../../block-components';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

import './style.scss';

const SizeUnitControl = ( props ) => {

	return (
		<div className="wsu-control__size-unit-control">
			<NumberControl
				label="Width"
				isShiftStepEnabled={ true }
				shiftStep={ 10 }
				value={ props.attributes.width }
				onChange={ ( width ) => {
					let preChangeWidth = props.attributes.width;

					// TODO
					// IF width is empty, reset to initial width
					if ( empty( width ) ) {
						props.setAttributes({ preChangeWidth });
					} else {
						props.setAttributes({ width })
					}
				}}
			/>

			<NumberControl
				label="Height"
				isShiftStepEnabled={ true }
				shiftStep={ 10 }
				value={ props.attributes.height }
				onChange={ ( height ) => {
					// TODO
					// IF height is empty, reset to initial height
					props.setAttributes( { height } )
				}}
			/>
			
			<SelectControl
				label="Unit"
				value={props.attributes.unit}
				options={[
					{ label: 'px', value: 'px' },
					{ label: '%', value: '%' },
					{ label: 'em', value: 'em' },
					{ label: 'rem', value: 'rem' },
					{ label: 'vw', value: 'vw' },
					{ label: 'vh', value: 'vh' },
				]}
				onChange={ ( unit ) => {
					// TODO
					// Check if unit is different

						// Set new attribute unit type
						props.setAttributes( { unit } ) 

						// Convert width/height to new unit type

						// Set new width/height values 
				}}
			/>
		</div>
	)
};

export default SizeUnitControl;