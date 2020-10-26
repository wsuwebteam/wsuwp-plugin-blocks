
const {
	PanelRow,
	TextControl,
} = wp.components;

import { 
	SpacingUnitControlMarginVertical, 
	SpacingUnitControlPaddingVertical,
} from './index';
import { checkPropTypes } from 'prop-types';


const SpacingUnitControlVertical = ( props ) => {

	let { attributes, setAttributes } = props;

	return (

		<>
			<SpacingUnitControlMarginVertical attributes={attributes} setAttributes={setAttributes} />
			<SpacingUnitControlPaddingVertical attributes={attributes} setAttributes={setAttributes} />
			{props.children}
		</>

	)
	
}


export default SpacingUnitControlVertical