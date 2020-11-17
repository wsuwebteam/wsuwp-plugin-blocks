const {
	PanelBody
} = wp.components;


const DisplayOptionsPanel = ( props ) => {

	let { attributes, setAttributes } = props;

	return (

		<PanelBody title="Display Options" initialOpen={false}>
			{props.children}
		</PanelBody>

	)

}

export default DisplayOptionsPanel;