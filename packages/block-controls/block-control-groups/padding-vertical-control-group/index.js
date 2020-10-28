
const {
	PanelRow,
} = wp.components;

import './style.scss';

import { 
	PaddingTopControl,
	PaddingBottomControl,
} from '../../index';


const PaddingVerticalControlGroup = ( { attributes, setAttributes } ) => {

	return (

		<PanelRow  className="wsu-block-control__spacing-panel-row">
			<PaddingTopControl attributes={attributes} setAttributes={setAttributes} />
			<PaddingBottomControl attributes={attributes} setAttributes={setAttributes} />
		</PanelRow>

	)
	
}


export default PaddingVerticalControlGroup