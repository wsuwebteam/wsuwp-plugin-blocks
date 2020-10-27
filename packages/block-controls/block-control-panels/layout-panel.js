const {
	Panel,
	PanelBody
} = wp.components;


const LayoutPanel = ( props ) => {

	let { attributes, setAttributes } = props;

	return (

		<Panel className="wsu-b-layout-panel">
			<PanelBody title="Layout & Spacing" initialOpen={false}>
				{props.children}
			</PanelBody>
		</Panel>

	)

}

export default LayoutPanel;