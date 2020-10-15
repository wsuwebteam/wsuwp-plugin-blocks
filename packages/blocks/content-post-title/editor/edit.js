const { InspectorControls } = wp.blockEditor;
const { 
	PanelBody,
	TextControl,
	ToggleControl,
} = wp.components;
const { PostTitle } = wp.editor;

import { SpacingSelector } from '../../../block-controls';

const { WsuArticleHeader } = wsu_wds.components;

const edit = ( { className, attributes, setAttributes } ) => {

	return (
		<>
			{
				<InspectorControls>
					<PanelBody title="General" initialOpen={true}>
						<TextControl
							label="Subtitle"
							value={attributes.subtitle}
							onChange={(subtitle) => setAttributes({ subtitle })}
							placeholder={'Enter subtile here.'}
							/>
						<ToggleControl
							label="Hide Author"
							help={ attributes.hideAuthor ? 'Hidden.' : 'Visible.' }
							checked={ attributes.hideAuthor }
							onChange={ (hideAuthor) => setAttributes({ hideAuthor }) }
						/>
						<ToggleControl
							label="Hide Publish Date"
							help={ attributes.hidePublishDate ? 'Hidden.' : 'Visible.' }
							checked={ attributes.hidePublishDate }
							onChange={ (hidePublishDate) => setAttributes({ hidePublishDate }) }
						/>
					</PanelBody>
					<PanelBody title="Style" initialOpen={false}>
						<SpacingSelector attributes={attributes} setAttributes={setAttributes} />
					</PanelBody>
				</InspectorControls>
			}
			<WsuArticleHeader 
				title={<PostTitle />}
				subtitle={attributes.subtitle}
				/>
		</>
	)
}

export default edit;