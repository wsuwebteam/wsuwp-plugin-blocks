const { PanelBody } = wp.components;

const EmOptionsPanel = ( props ) => {

	let { attributes, setAttributes } = props;

	return (

		<div className="wsu-b-panel-em-options">
			<PanelBody title="EM Options" initialOpen={false}>
				{props.children}
			</PanelBody>
		</div>

	)

}

export default EmOptionsPanel;