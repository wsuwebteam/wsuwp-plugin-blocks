const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;

import { SpacingSelector } from '../../../block-controls';

const edit = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			{
				<InspectorControls>
					<PanelBody title="Style" initialOpen={false}>
						<SpacingSelector />
					</PanelBody>
				</InspectorControls>
			}
			<div className="wsu-b-editor__search-bar__edit-wrapper">
				<div class="wsu-b-editor__search-bar">
					<input type="text" name="" value="" placeholder="Search" />
					<input type="submit" name="submit" value="Search" />
				</div>
			</div>
		</>
	)
}

export default edit;