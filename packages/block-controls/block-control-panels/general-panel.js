const { PanelBody } = wp.components;

const GeneralPanel = ( props ) => {

	let { attributes, setAttributes } = props;

	return (

		<PanelBody title="General" initialOpen={false}>
			{props.children}
		</PanelBody>

	)

}

export default GeneralPanel;