
const FormatOption = ( format, props ) => {

	return (
		<li 
			className="wsu-c-columns-editor__option"
			onClick={ ( event ) => props.onClick( { format : format.slug } ) }
			>
			{format.icon}
			<span className="wsu-c-columns-editor__option__label">{format.label}</span>
		</li>
	);

}

const EditOptions = ( props ) => {

	return (
		<div className="wsu-c-columns-editor__wrapper">
			<div className="wsu-c-columns-editor__title">Select Column Layout</div>
			<ul className="wsu-c-columns-editor__options">
			{ props.formats.map( format => FormatOption( format, props ) ) }
			</ul>
		</div>

	);

}

EditOptions.defaultProps = {
	formats: []
}

export default EditOptions;