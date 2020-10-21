
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

	const { attributes, setAttributes } = props;


	function updateDimensions( nextWidth, nextHeight ) {
		return () => {
			setAttributes( { width: nextWidth, height: nextHeight } );
		};
	}

	return (
		<>
			<SelectControl
				label="Sizing Type"
				value={ attributes.unit }
				options={[
					{ label: 'Responsive', value: '%' },
					{ label: 'Static', value: 'px' },
				]}
				onChange={ ( type ) => setAttributes( { unit: type } ) }
			/>

			{ attributes.unit == '%' && 
				<div className="wsu-control__size-unit-control">
					<ButtonGroup className="button-group">
						{ imageSizePresets.map( ( scale ) => {
							const scaledWidth = scale;
							const scaledHeight = 'auto';

							return (
								<Button
									isSmall
									isPressed={ ( scale == attributes.width ) ? true : false }
									onClick={ updateDimensions( scaledWidth, scaledHeight ) }
								>
									{ Math.round(scale) }%
								</Button>
							)
						})}
					</ButtonGroup>
				</div>
			}

			{ attributes.unit == 'px' && 
				<div className="wsu-control__size-unit-control-wrapper">
					<div className="wsu-control__size-unit-control">
						<NumberControl
							label="Width"
							isShiftStepEnabled={ true }
							shiftStep={ 10 }
							value={ attributes.width }
							onChange={ ( width ) => {
								setAttributes({ 
									width: width,
									height: parseInt(width * attributes.ratio, 10)
								});
							}}
						/>

						<NumberControl
							label="Height"
							isShiftStepEnabled={ true }
							shiftStep={ 10 }
							value={ attributes.height }
							onChange={ ( height ) => {
								setAttributes({ 
									height: height,
									width: parseInt(height * attributes.ratio, 10)
								});
							}}
						/>
					</div>
					<div className="wsu-control__size-unit-control">
						<ButtonGroup className="button-group">
							{ imageSizePresets.map( ( scale ) => {
								const newWidth = Math.round( attributes.scaledWidth * ( scale / 100 ) );
								const newHeight = Math.round( attributes.scaledHeight * ( scale / 100 ) );

								return (
									<Button
										isSmall
										onClick={ updateDimensions( newWidth, newHeight ) }
									>
										{ Math.round(scale) }%
									</Button>
								)
							})}
						</ButtonGroup>
					</div>
				</div>
			}
		</>
	)
};

const sizeUnitControlAtts = {
	width: {
		type: 'integer',
		default: 0
	},
	height: {
		type: 'integer',
		default: 0
	},
	naturalWidth: {
		type: 'integer',
		default: 0
	},
	naturalHeight: {
		type: 'integer',
		default: 0
	},
	scaledWidth: {
		type: 'integer',
		default: 0,
	},
	scaledHeight: {
		type: 'integer',
		default: 0,
	},
	ratio: {
		type: 'number',
		default: 1
	},
	naturalRatio: {
		type: 'number',
		default: 1
	},
	unit: {
		type: 'string',
		default: '%'
	},
};

export { sizeUnitControlAtts };
export default SizeUnitControl;