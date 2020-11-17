
const {
	PanelRow,
} = wp.components;

import './style.scss';

import { 
	PaddingLeftControl,
	PaddingRightControl,
} from '../../index';


const PaddingHorizontalControlGroup = ( { attributes, setAttributes } ) => {

	return (

		<PanelRow  className="wsu-block-control__spacing-panel-row">
			<PaddingLeftControl attributes={attributes} setAttributes={setAttributes} />
			<PaddingRightControl attributes={attributes} setAttributes={setAttributes} />
		</PanelRow>

	)
	
}


export default PaddingHorizontalControlGroup