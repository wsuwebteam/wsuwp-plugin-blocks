const { PanelBody } = wp.components;

const BackgroundOptionsPanel = ( props ) => {

	return (

		<div className="wsu-b-panel-background-options">
			<PanelBody title="Background Options" initialOpen={false}>
				{props.children}
			</PanelBody>
		</div>

	)

}

export default BackgroundOptionsPanel;