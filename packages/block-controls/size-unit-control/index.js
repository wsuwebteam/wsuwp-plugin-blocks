
const {
	Button,
	ButtonGroup,
	SelectControl,
	__experimentalNumberControl
} = wp.components;

const NumberControl = __experimentalNumberControl;

import './style.scss';

const imageSizePresets = [ 25, 33.33, 50, 66.66, 75, 100 ];

const SizeUnitControl = ( props ) => {

	function updateDimensions( nextWidth, nextHeight ) {
		return () => {
			props.setAttributes( { width: nextWidth, height: nextHeight } );
		};
	}

	return (
		<>
			<div className="wsu-control__size-unit-control">
				<NumberControl
					label="Width"
					isShiftStepEnabled={ true }
					shiftStep={ 10 }
					value={ props.attributes.width }
					onChange={ ( width ) => {
						props.setAttributes({ 
							width: width,
							height: parseInt(width * props.attributes.ratio, 10)
						});
					}}
				/>

				<NumberControl
					label="Height"
					isShiftStepEnabled={ true }
					shiftStep={ 10 }
					value={ props.attributes.height }
					onChange={ ( height ) => {
						props.setAttributes({ 
							height: height,
							width: parseInt(height * props.attributes.ratio, 10)
						});
					}}
				/>
				
				<SelectControl
					label="Unit"
					value={ props.attributes.unit }
					options ={[
						{ label: 'px', value: 'px' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					]}
					onChange={ ( unit ) => {
						if ( unit !== props.attributes.unit ) {
							props.setAttributes( { unit } );
						}
					}}
				/>
			</div>
			<div className="wsu-control__size-unit-control">
				<ButtonGroup className="button-group">
					{ imageSizePresets.map( ( scale ) => {
						const scaledWidth = Math.round( props.attributes.naturalWidth * ( scale / 100 ) );
						const scaledHeight = Math.round( props.attributes.naturalHeight * ( scale / 100 ) );

						return (
							<Button
								isSmall
								onClick={ updateDimensions( scaledWidth, scaledHeight ) }
							>
								{ Math.round(scale) }%
							</Button>
						)
					})}
				</ButtonGroup>
			</div>
		</>
	)
};

export default SizeUnitControl;