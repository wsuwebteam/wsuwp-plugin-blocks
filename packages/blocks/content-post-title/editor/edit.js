const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { PostTitle } = wp.editor;

import { SpacingSelector } from '../../../block-controls';

const edit = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			{
				<InspectorControls>
					<PanelBody title="Style" initialOpen={false}>
						<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
					</PanelBody>
				</InspectorControls>
			}
			<PostTitle />
		</>
	)
}

export default edit;