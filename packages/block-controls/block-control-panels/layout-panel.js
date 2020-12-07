const { PanelBody } = wp.components;

const LayoutPanel = ( props ) => {

	let { attributes, setAttributes } = props;

	return (

		<PanelBody title="Layout & Spacing" initialOpen={false}>
			{props.children}
		</PanelBody>

	)

}

export default LayoutPanel;