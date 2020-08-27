const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

import BlockOptionsSelect from '../../../block-components/block-options-select';
import { spacing } from '../../../block-components';

const getCardTemplate = ( cardsPerRow ) => {

	cardsPerRow = parseInt( cardsPerRow );

	switch ( cardsPerRow ) {

		case 2:
			return [['wsuwp/card', {}, []],['wsuwp/card', {}, []]];
		case 3:
				return [['wsuwp/card', {}, []],['wsuwp/card', {}, []],['wsuwp/card', {}, []]];
		case 4:
				return [['wsuwp/card', {}, []],['wsuwp/card', {}, []],['wsuwp/card', {}, []],['wsuwp/card', {}, []]];
		default:
			return [['wsuwp/card', {}, []]];
	}
}

const edit = ( { className, attributes, setAttributes } ) => {

	let options = [
		{
			label: '1 Card',
			value: 1,
			icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		},
		{
			label: '2 Cards',
			value: 2,
			icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		},
		{
			label: '3 Cards',
			value: 3,
			icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		},
		{
			label: '4 Cards',
			value: 4,
			icon: <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></svg>,
		},
	]

	if ( ! attributes.cardsPerRow ) {

		return (
			<BlockOptionsSelect
				options={options}
				onSelect={ (option) => { setAttributes( {'cardsPerRow': option.value } ) } }
				title='Cards Per Row'
				/>
		)

 	} else if ( attributes.source ) {

	} else {

		return (
			<div className={'wsu-g-cards__wrapper wsu-g-cards--' + attributes.cardsPerRow }  >
				<InnerBlocks
					template={ getCardTemplate( attributes.cardsPerRow ) }
					allowedBlocks={ ['wsuwp/card'] }
				/>
			</div>
		)

	}

	return (
		<>
			<InspectorControls>
				<PanelBody title="General">
					
				</PanelBody>
				
				<PanelBody title="Spacing" initialOpen={false}>
					<SelectControl
						label="Padding Before"
						value={attributes.paddingBefore}
						onChange={ (paddingBefore) => setAttributes( { paddingBefore } ) }
						options={spacing}
					/>
					<SelectControl
						label="Padding After"
						value={attributes.paddingAfter}
						onChange={ (paddingAfter) => setAttributes( { paddingAfter } ) }
						options={spacing}
					/>
					<SelectControl
						label="Margin Before"
						value={attributes.marginBefore}
						onChange={ (marginBefore) => setAttributes( { marginBefore } ) }
						options={spacing}
					/>
					<SelectControl
						label="Margin After"
						value={attributes.marginAfter}
						onChange={ (marginAfter) => setAttributes( { marginAfter } ) }
						options={spacing}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="wsu-c-cards__wrapper">
				<InnerBlocks
					allowedBlocks={ ['wsuwp/card'] }
				/>
			</div>
		</>
	)

}



export default edit;