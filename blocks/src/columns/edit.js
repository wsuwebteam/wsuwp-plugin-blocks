const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;

const BASETEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie nulla mi, ut dapibus ipsum pulvinar a. Pellentesque faucibus aliquam nibh. Pellentesque nec arcu cursus, euismod massa in, ornare urna. Nullam eu neque elementum, rutrum ante a, luctus lectus.';

const formats = {
	default: [
		['wsuwp/column', {}, [ [ 'core/paragraph', {},[] ]]],
	],
	single: [
		['wsuwp/column', {}, [[ 'core/paragraph', {  },[] ]]],
	],
	halves: [
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
	],
	thirds: [
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
	],
	quarters: [
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
	],
	sidebar_right: [
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
	],
	sidebar_left: [
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
		['wsuwp/column', {}, [[ 'core/paragraph', {},[] ]]],
	],
};

const GetTemplate = ( props ) => {

	let format = 'single';

	if ( props.attributes.hasOwnProperty('format') ) {
		
		format = props.attributes.format;

		format = format.replace( '-', '_' );

		if ( formats.hasOwnProperty( format ) ){

			return formats[format];

		}

	}

	return formats.default;

}

const ColumnsEdit = ( props ) => {

	let columnsTemplate = GetTemplate( props );

	let format = props.attributes.format;

	return (
		<div className={'wsu-c-column__wrapper wsu-u-no-js wsu-c-columns--' +  format }  >
			<InnerBlocks
				template={columnsTemplate }
				templateLock={ "insert" }
				allowedBlocks={ ['wsuwp/column'] }
			/>
		</div>
	)
}

export { ColumnsEdit }; 