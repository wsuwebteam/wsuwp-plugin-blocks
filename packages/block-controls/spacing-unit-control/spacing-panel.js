
const {
	Panel,
	PanelBody
} = wp.components;


const SpacingPanel = ( props ) => {

	return (

		<Panel>
			<PanelBody title="Spacing" initialOpen={false}>
				{props.children}
			</PanelBody>
		</Panel>

	)
	
}

export default SpacingPanel