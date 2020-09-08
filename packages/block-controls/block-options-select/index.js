import './style.scss'

const LayoutOption = ( option, onSelect  ) => {

	return (
		<li 
			className="wsu-g-block-options-select__option"
			onClick={ ( event ) => { onSelect( option ) } }
			>
			{option.icon}
			<span className="wsu-g-block-options-select__option__label">{option.label}</span>
		</li>
	);

}


const BlockOptionsSelect = ( props ) => {

	if ( props.options ) {

		return (
			<div className="wsu-g-block-options-select">
				<div className="wsu-g-block-options-select__title">{props.title}</div>
				<ul className="wsu-g-block-options-select__options">
				{ props.options.map( ( option ) => LayoutOption( option, props.onSelect ) ) }
				</ul>
			</div>
		)

	} else {

		return '';

	}

}

BlockOptionsSelect.defaultProps = {
	options:[],
}


export default BlockOptionsSelect
