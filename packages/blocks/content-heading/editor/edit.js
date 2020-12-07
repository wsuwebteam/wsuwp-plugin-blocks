const { __ } = wp.i18n;
const { URLInputButton } = wp.blockEditor;
const { PlainText } = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	ToolbarGroup,
	DropdownMenu,
	Toolbar,
	BaseControl
} = wp.components;

const {
	AlignmentToolbar,
	RichText,
	URLInput,
	InspectorControls,
	BlockControls,
} = wp.blockEditor;

const { WsuHeading } = wsu_wds.components;

import {
	more,
	arrowLeft,
	arrowRight,
	arrowUp,
	arrowDown,
	heading,
} from '@wordpress/icons';

import HeadingLevelIcon from './heading-level-icon';
import { 
	DisplayOptionsPanel,
	FontSizeControl,
	FontWeightControl,
	IndentControl,
	LayoutPanel,
	MarginVerticalControlGroup,
	PaddingVerticalControlGroup,
} from '../../../block-controls';


const edit = ( { className, attributes, setAttributes } ) => {

	const { level } = attributes;

	function setLevel( event ) {
		const selected = event.target.querySelector( 'option:checked' );
		setAttributes( { level: selected.value } );
		event.preventDefault();
	}

	return (
		<>
			{
				<InspectorControls>
					<PanelBody title="General">
						<TextControl
							label="Title"
							value={attributes.content}
							onChange={(content) => setAttributes({ content })}
							placeholder={'Enter tile here.'}
							/>
						<BaseControl label="Header Link">
							<URLInput
								id="header-link"
								className={'wsu-c-block-content-header__link'}
								value={attributes.link}
								onChange={(link, post) => setAttributes({ link })}
								placeholder={'Enter URL here.'}
								isFullWidth
							/>
						</BaseControl>
					</PanelBody>
					<DisplayOptionsPanel>
						<SelectControl
							label="Display Style" 
							value={attributes.style}
							onChange={ (style) => setAttributes( { style } ) }
							options={[
								{ label: 'Default', value: 'default' },
								{ label: 'Callout', value: 'callout' },
							]}
						/>
						<BaseControl label="Alignment">
							<AlignmentToolbar
								value={ attributes.textAlign }
								onChange={ ( textAlign ) =>
									setAttributes( { textAlign: textAlign } )
								}
							/>
						</BaseControl>
						<FontSizeControl attributes={attributes} setAttributes={setAttributes} />
						<FontWeightControl attributes={attributes} setAttributes={setAttributes} />
						<IndentControl attributes={attributes} setAttributes={setAttributes} />
					</DisplayOptionsPanel>
					<LayoutPanel>
						<MarginVerticalControlGroup attributes={attributes} setAttributes={setAttributes} />
						<PaddingVerticalControlGroup attributes={attributes} setAttributes={setAttributes} />
					</LayoutPanel>
				</InspectorControls>
			}
			<BlockControls>
				<Toolbar>
					<DropdownMenu
						icon={<HeadingLevelIcon level={attributes.level} />}
						label={<HeadingLevelIcon level="1" />}
						controls={ [
							{
								title: 'Level 2',
								icon: <HeadingLevelIcon level="2" />,
								onClick: () => setAttributes( { level:2 } ),
							},
							{
								title: 'Level 3',
								icon: <HeadingLevelIcon level="3" />,
								onClick: () => setAttributes( { level:3 } ),
							},
							{
								title: 'Level 4',
								icon: <HeadingLevelIcon level="4" />,
								onClick: () => setAttributes( { level:4 } ),
							},
							{
								title: 'Level 5',
								icon: <HeadingLevelIcon level="5" />,
								onClick: () => setAttributes( { level:5 } ),
							},
						] }
					/>
				</Toolbar>
				<AlignmentToolbar
					value={ attributes.textAlign }
					onChange={ ( textAlign ) =>
						setAttributes( { textAlign: textAlign } )
					}
				/>
			</BlockControls>

			<WsuHeading 
				tag={ 'h' + level }
				link={ attributes.link }
				style={ attributes.style }
				width={ attributes.width }
				textAlign={ attributes.textAlign }
			>
				<RichText
					className={ 'wsu-b-heading__text' }
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
					multiline={'false'}
					allowedFormats={[]}
					placeholder={'Add heading'}
				/>
			</WsuHeading>
		</>
	)
}



export default edit;
