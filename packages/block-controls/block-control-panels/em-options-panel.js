const {
	Panel,
	PanelBody
} = wp.components;


const EmOptionsPanel = ( props ) => {

	let { attributes, setAttributes } = props;

	return (

		<Panel className="wsu-b-panel-em-options">
			<PanelBody title="EM Options" initialOpen={false}>
				{props.children}
			</PanelBody>
		</Panel>

	)

}

export default EmOptionsPanel;