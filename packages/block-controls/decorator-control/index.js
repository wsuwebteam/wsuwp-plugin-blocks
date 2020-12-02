import React from 'react';

const { 
	TextControl,
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	Button
} = wp.components;

const decoratorOptions = [
	{ label: 'Crimson Bar', value: 'crimson-bar' },
	{ label: 'Crimson Bar | Light', value: 'crimson-bar-light' },
	{ label: 'Angled Lines | Gray', value: 'angled-lines-gray' },
	{ label: 'Angled Lines | Crimson', value: 'angled-lines-crimson' },
	{ label: 'Plus | Gray', value: 'plus-gray' },
	{ label: 'Plus | Crimson', value: 'plus-crimson' },
	{ label: 'Text | White', value: 'text-white' },
	{ label: 'Text | Outline Gray', value: 'text-outline-gray' },
	{ label: 'Text | Outline Crimson', value: 'text-outline-crimson' },
	{ label: 'Cougar | White', value: 'cougar-head-white' },
	{ label: 'Cougar | Crimson', value: 'cougar-head-crimson' },
	{ label: 'Overlay | Crimson', value: 'overlay-crimson' },
	{ label: 'Overlay | gray', value: 'overlay-gray' },
	{ label: 'WSU Watermark Vert | White', value: 'wsu-watermark-vertical-white' },
	{ label: 'WSU Watermark Vert | Crimson', value: 'wsu-watermark-vertical-crimson' },
	{ label: 'WSU Watermark Vert | Gray', value: 'wsu-watermark-vertical-gray' },
];

const getDecoratorLabel =( slug ) => {

	let label = false;

	for ( const decorator of decoratorOptions ) {
		
		if ( slug === decorator.value ) {

			label = decorator.label;

			break;

		}

	}

	return label;

}


const Decorator = ( props ) => {

	let type           = props.decorator.hasOwnProperty( 'type' ) ? props.decorator.type : '';
	let label          = getDecoratorLabel( type );
	let text           = props.decorator.hasOwnProperty( 'text' ) ? props.decorator.text : '';
	let positionTop    = props.decorator.hasOwnProperty( 'positionTop' ) ? props.decorator.positionTop : '';
	let positionBottom = props.decorator.hasOwnProperty( 'positionBottom' ) ? props.decorator.positionBottom : '';
	let positionRight  = props.decorator.hasOwnProperty( 'positionRight' ) ? props.decorator.positionRight : '';
	let positionLeft   = props.decorator.hasOwnProperty( 'positionLeft' ) ? props.decorator.positionLeft : '';
	let width          = props.decorator.hasOwnProperty( 'width' ) ? props.decorator.width : '';
	let height         = props.decorator.hasOwnProperty( 'height' ) ? props.decorator.height : '';
	let hideOnMobile   = props.decorator.hasOwnProperty( 'hideOnMobile' ) ? props.decorator.hideOnMobile : false;
	let hideOnTablet   = props.decorator.hasOwnProperty( 'hideOnTablet' ) ? props.decorator.hideOnTablet : false;
	let hideOnDesktop  = props.decorator.hasOwnProperty( 'hideOnDesktop' ) ? props.decorator.hideOnDesktop : false;

	if ( ! label ) {

		return null;

	} else {

		return(

			<Panel>
				<PanelBody title={label} initialOpen={false}>
					<div style={{display: 'flex'}}>
						<TextControl
							label="Top"
							value={positionTop}
							onChange={ ( value ) => { props.updateDecorator( props.index, 'positionTop', value ) } }
						/>
						<TextControl
							label="Bottom"
							value={positionBottom}
							onChange={ ( value ) => { props.updateDecorator( props.index, 'positionBottom', value ) } }
						/>
					</div>
					<div style={{display: 'flex'}}>
						<TextControl
							label="Right"
							value={positionRight}
							onChange={ ( value ) => { props.updateDecorator( props.index, 'positionRight', value ) } }
						/>
						<TextControl
							label="left"
							value={positionLeft}
							onChange={ ( value ) => { props.updateDecorator( props.index, 'positionLeft', value ) } }
						/>
					</div>
					<div style={{display: 'flex'}}>
						<TextControl
							label="Width"
							value={width}
							onChange={ ( value ) => { props.updateDecorator( props.index, 'width', value ) } }
						/>
						<TextControl
							label="Height"
							value={height}
							onChange={ ( value ) => { props.updateDecorator( props.index, 'height', value ) } }
						/>
					</div>
					<TextControl
						label="Text"
						value={text}
						onChange={ ( value ) => { props.updateDecorator( props.index, 'text', value ) } }
					/>
					<ToggleControl
							label="Hide on Mobile"
							help={ hideOnMobile ? 'This will not be displayed on Mobile.' : null }
							checked={ hideOnMobile }
							onChange={ ( value ) => { props.updateDecorator( props.index, 'hideOnMobile', value ) } }
					/>
					<ToggleControl
							label="Hide on Tablet"
							help={ hideOnTablet ? 'This will not be displayed on Tablet.' : null }
							checked={ hideOnTablet }
							onChange={ ( value ) => { props.updateDecorator( props.index, 'hideOnTablet', value ) } }
					/>
					<ToggleControl
							label="Hide on Desktop"
							help={ hideOnDesktop ? 'This will not be displayed on Desktop.' : null }
							checked={ hideOnDesktop }
							onChange={ ( value ) => { props.updateDecorator( props.index, 'hideOnDesktop', value ) } }
					/>
					<Button 
						onClick={ ( event ) => { props.removeDecorator( props.index ) } } 
						isDestructive
					>
						Remove Decorator
					</Button>
				</PanelBody>
			</Panel>

		);

	}


	return (<div>Decorator</div>);

}

Decorator.defaultProps = {
	decorators:[],
}


class DecoratorControl extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			selectedDecorator:'crimson-bar'
		};
	}

	updateDecoratorArray( index, property, value ) {

		let decoratorArray = this.props.decorators;

		decoratorArray[index][property] = value;

		decoratorArray = decoratorArray.concat( [] );

		this.props.onChange( decoratorArray );

	}

	addDecoratorToArray( type ) {

		let newArray = [{
			type:type,
		}];

		let decoratorArray = this.props.decorators.concat( newArray );

		this.props.onChange( decoratorArray );

	}

	removeDecorator( index ) {

		let decoratorArray = this.props.decorators;

		decoratorArray.splice( index, 1 );

		decoratorArray = decoratorArray.concat( [] );

		this.props.onChange( decoratorArray );

	}

	render() {

		return (
			<Panel>
				<PanelBody title="Decorators" initialOpen={false}>
					<SelectControl
						label="Select Decorator"
						onChange={ ( value ) => { this.state.selectedDecorator = value } }
						options={ decoratorOptions }
					/>
					<Button 
						onClick={ ( event ) =>{ this.addDecoratorToArray( this.state.selectedDecorator ) } } 
						isSecondary
					>
						Add Decorator
					</Button>
					{ this.props.decorators.map( (decorator, index ) => { 
						return (
							<Decorator 
								decorator={ decorator } 
								index={index} 
								removeDecorator={ ( index ) => { this.removeDecorator( index ) } }
								updateDecorator={ ( index, property, value ) => { this.updateDecoratorArray( index, property, value ) } }
							/>
						);
					} ) }
				</PanelBody>
			</Panel>
		)

	}

}

DecoratorControl.defaultProps = {
	decorators: [],
}


export default DecoratorControl;