const {
	Panel,
	PanelBody
} = wp.components;


const BackgroundOptionsPanel = ( props ) => {

	return (

		<Panel className="wsu-b-panel-background-options">
			<PanelBody title="Background Options" initialOpen={false}>
				{props.children}
			</PanelBody>
		</Panel>

	)

}

export default BackgroundOptionsPanel;