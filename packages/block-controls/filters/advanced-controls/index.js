/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { TextControl } = wp.components;

/**
 * Add Unique ID field to the advanced controls
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const addCustomAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const {
			name,
			attributes,
			setAttributes,
			isSelected,
		} = props;

		const {
			visibleOnMobile,
		} = attributes;
		
		
		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected &&
					<InspectorAdvancedControls>
						<TextControl
							label="Unique ID"
							help="Unique ID will be applied to this block's HTML container."
							value={attributes.id}
							onChange={(id) => setAttributes({ id })}
						/>
					</InspectorAdvancedControls>
				}

			</Fragment>
		);
	};
}, 'addCustomAdvancedControls');

addFilter(
	'editor.BlockEdit',
	'wsuwp/custom-advanced-control',
	addCustomAdvancedControls
);