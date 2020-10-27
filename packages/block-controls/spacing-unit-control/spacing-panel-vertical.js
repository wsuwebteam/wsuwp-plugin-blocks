
const {
	PanelRow,
	TextControl,
} = wp.components;

import { 
	SpacingPanel,
	SpacingUnitControlVertical,
} from './index';

import { LayoutPanel } from '../index';


const SpacingPanelVertical = ( props ) => {

	let { attributes, setAttributes } = props;

	return (

		<LayoutPanel>
			<SpacingUnitControlVertical attributes={attributes} setAttributes={setAttributes} />
			{props.children}
		</ LayoutPanel>
	)
	
}


export default SpacingPanelVertical