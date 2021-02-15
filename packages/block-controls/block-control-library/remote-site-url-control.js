const {
	TextControl,
} = wp.components;

const RemoteSiteUrlControl = ( { value, attributes, setAttributes, onChange } ) => {

	return (
		<TextControl
			label="Remote Site URL"
			value={value}
			onChange={ ( siteUrl ) => onChange( siteUrl ) }
			placeholder={''}
		/>
	)
	
}


export default RemoteSiteUrlControl