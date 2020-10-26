
const {
	PanelRow,
	TextControl,
} = wp.components;

import { 
	SpacingPanel,
	SpacingUnitControlVertical,
} from './index';


const SpacingPanelVertical = ( props ) => {

	let { attributes, setAttributes } = props;

	return (

		<SpacingPanel>
			<SpacingUnitControlVertical attributes={attributes} setAttributes={setAttributes} />
			{props.children}
		</ SpacingPanel>
	)
	
}


export default SpacingPanelVertical