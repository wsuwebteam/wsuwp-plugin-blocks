import React from 'react';

const { TextControl, PanelBody, SelectControl } = wp.components;

const decoratorOptions = [
	{ label: 'Crimson Bar', value: 'crimson-bar' },
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
	let positionTop    = props.decorator.hasOwnProperty( 'positionTop' ) ? props.decorator.positionTop : '';
	let positionBottom = props.decorator.hasOwnProperty( 'positionBottom' ) ? props.decorator.positionBottom : '';
	let positionRight  = props.decorator.hasOwnProperty( 'positionRight' ) ? props.decorator.positionRight : '';
	let positionLeft   = props.decorator.hasOwnProperty( 'positionLeft' ) ? props.decorator.positionLeft : '';
	let width          = props.decorator.hasOwnProperty( 'width' ) ? props.decorator.width : '';
	let height         = props.decorator.hasOwnProperty( 'height' ) ? props.decorator.height : '';

	if ( ! label ) {

		return null;

	} else {

		return(

			<PanelBody title={label} initialOpen={false}>
				<TextControl
					label="Top"
					value={positionTop}
					onChange={ ( value ) => { props.updateDecorator( props.index, 'positionTop', value ) } }
				/>
				<TextControl
					label="Bottom"
					value={positionBottom}
				/>
				<TextControl
					label="Right"
					value={positionRight}
				/>
				<TextControl
					label="left"
					value={positionLeft}
				/>
				<TextControl
					label="Width"
					value={width}
				/>
				<TextControl
					label="Height"
					value={height}
				/>
				<button onClick={ ( event ) => { props.removeDecorator( props.index ) } } >Remove Decorator</button>
			</PanelBody>

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
			<PanelBody title="Decorators" initialOpen={false}>
				<SelectControl
					label="Select Decorator"
					value={this.state.selectedDecorator }
					
					options={decoratorOptions}
				/>
				<button onClick={ ( event ) =>{ this.addDecoratorToArray( this.state.selectedDecorator ) } } >+ Add</button>
				{ this.props.decorators.map( (decorator, index ) => { 
					return (<Decorator 
						decorator={ decorator } 
						index={index} 
						removeDecorator={ ( index ) => { this.removeDecorator( index ) } }
						updateDecorator={ ( index, property, value ) => { this.updateDecoratorArray( index, property, value ) } }
						/>);
					} ) }
			</PanelBody>
		)

	}

}

DecoratorControl.defaultProps = {
	decorators:[],
}


export default DecoratorControl;