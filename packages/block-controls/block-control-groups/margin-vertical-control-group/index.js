
const {
	PanelRow,
} = wp.components;

import './style.scss';

import { 
	MarginTopControl,
	MarginBottomControl,
} from '../../index';


const MarginVerticalControlGroup = ( { attributes, setAttributes } ) => {

	return (

		<PanelRow  className="wsu-block-control__spacing-panel-row">
			<MarginTopControl attributes={attributes} setAttributes={setAttributes} />
			<MarginBottomControl attributes={attributes} setAttributes={setAttributes} />
		</PanelRow>

	)
	
}


export default MarginVerticalControlGroup