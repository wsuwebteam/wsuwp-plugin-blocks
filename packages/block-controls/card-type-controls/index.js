const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} = wp.blockEditor;

const {
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl,
	DateTimePicker,
	Dropdown
} = wp.components;

const { dateI18n } = wp.date;

const { WsuCard, WsuHr } = wsu_wds.components;

import { empty } from '../../block-components';

const DefaultCard = ( props ) => {

	const { attributes, setAttributes } = props;

	return (
		<WsuCard
			{...attributes}
			cardType={'default'}
			title={
				<RichText
					tagName="div"
					value={attributes.title}
					onChange={(title) => setAttributes({ title })}
					allowedFormats={[]}
					placeholder="Add title"
				/>
			}
			subtitle={
				<RichText
					tagName="div"
					value={attributes.subtitle}
					onChange={(subtitle) => setAttributes({ subtitle })}
					allowedFormats={[]}
					placeholder="Add subtitle"
				/>
			}
			caption={
				<RichText
					tagName="div"
					value={attributes.caption}
					onChange={(caption) => setAttributes({ caption })}
					allowedFormats={[]}
					placeholder={'Add caption text'}
				/>
			}
			imgSrc={attributes.imgSrc}
			imgAlt={attributes.imgAlt}
			imgFocalPoint={attributes.imgFocalPoint}
		/>
	);
}

const DefaultCardControls = ( props ) => {
	return (
		<>
			<TextControl
				label="Title"
				value={props.attributes.title}
				onChange={(title) => props.setAttributes({ title })}
				placeholder={'Add title'}
			/>

			<TextControl
				label="Subtitle"
				value={props.attributes.subtitle}
				onChange={(subtitle) => props.setAttributes({ subtitle })}
				placeholder={'Add subtitle'}
			/>

			<TextControl
				label="Caption"
				value={props.attributes.caption}
				onChange={(caption) => props.setAttributes({ caption })}
				placeholder={'Add caption'}
			/>
		</>
	);
}

const PersonCard = ( props ) => {

	const { attributes, setAttributes } = props; 
	
	return (
		<WsuCard
			{...attributes}
			cardType={'person'}
			title={
				<RichText
					tagName="div"
					value={attributes.title}
					onChange={(title) => setAttributes({ title })}
					allowedFormats={[]}
					placeholder="Add person name"
				/>
			}
			subtitle={
				<RichText
					tagName="div"
					value={attributes.subtitle}
					onChange={(subtitle) => setAttributes({ subtitle })}
					allowedFormats={[]}
					placeholder="Add position"
				/>
			}
			caption={
				<RichText
					tagName="div"
					value={attributes.caption}
					onChange={(caption) => setAttributes({ caption })}
					allowedFormats={[]}
					placeholder={'Add caption text'}
				/>
			}
			addressLine1={
				<RichText
					tagName="div"
					value={attributes.addressLine1}
					onChange={(addressLine1) => props.setAttributes({ addressLine1 })}
					allowedFormats={[]}
					placeholder={'Add address line 1'}
				/>
			}
			addressLine2={
				<RichText
					tagName="div"
					value={attributes.addressLine2}
					onChange={(addressLine2) => props.setAttributes({ addressLine2 })}
					allowedFormats={[]}
					placeholder={'Add address line 2'}
				/>
			}
			phoneNumber={
				<RichText
					tagName="div"
					value={attributes.phoneNumber}
					onChange={(phoneNumber) => props.setAttributes({ phoneNumber })}
					allowedFormats={[]}
					placeholder={'Add phone number'}
				/>
			}
			email={
				<RichText
					tagName="div"
					value={attributes.email}
					onChange={(email) => props.setAttributes({ email })}
					allowedFormats={[]}
					placeholder={'Add email'}
				/>
			}
			website={
				<RichText
					tagName="div"
					value={attributes.website}
					onChange={(website) => props.setAttributes({ website })}
					allowedFormats={[]}
					placeholder={'Add website address'}
				/>
			}
			imgSrc={attributes.imgSrc}
			imgAlt={attributes.imgAlt}
			imgFocalPoint={attributes.imgFocalPoint}
		/>
	);
}

const PersonCardControls = ( props ) => {
	return (
		<>
			<TextControl
				label="Person Name"
				value={props.attributes.title}
				onChange={(title) => props.setAttributes({ title })}
				placeholder={'Add person name'}
			/>

			<TextControl
				label="Position Title"
				value={props.attributes.subtitle}
				onChange={(subtitle) => props.setAttributes({ subtitle })}
				placeholder={'Add position title'}
			/>

			<TextControl
				label="Caption"
				value={props.attributes.caption}
				onChange={(caption) => props.setAttributes({ caption })}
				placeholder={'Add caption'}
			/>

			<TextControl
				label="Address Line 1"
				value={props.attributes.addressLine1}
				onChange={(addressLine1) => props.setAttributes({ addressLine1 })}
				placeholder={'Add address line 1'}
			/>

			<TextControl
				label="Address Line 2"
				value={props.attributes.addressLine2}
				onChange={(addressLine2) => props.setAttributes({ addressLine2 })}
				placeholder={'Add address line 2'}
			/>

			<TextControl
				label="Phone Number"
				value={props.attributes.phoneNumber}
				onChange={(phoneNumber) => props.setAttributes({ phoneNumber })}
				placeholder={'Add phone number'}
			/>

			<TextControl
				label="Email"
				value={props.attributes.email}
				onChange={(email) => props.setAttributes({ email })}
				placeholder={'Add email address'}
			/>

			<TextControl
				label="Website"
				value={props.attributes.website}
				onChange={(website) => props.setAttributes({ website })}
				placeholder={'Add website address'}
			/>
		</>
	);
}

const NewsCard = ( props ) => {

	const { attributes, setAttributes } = props; 
	let date = (empty(attributes.date) ? '' : dateI18n(`${ 'n/j/y' }`, attributes.date));

	return (
		<WsuCard 
			cardType={'news'}
			title={
				<RichText
					tagName="div"
					value={attributes.title}
					onChange={(title) => setAttributes({ title })}
					allowedFormats={[]}
					placeholder={'Add title'}
				/>
			}
			caption={
				<RichText
					tagName="div"
					value={attributes.caption}
					onChange={(caption) => setAttributes({ caption })}
					allowedFormats={[]}
					placeholder={'Add caption text'}
				/>
			}
			imgSrc={attributes.imgSrc}
			imgAlt={attributes.imgAlt}
			imgFocalPoint={attributes.imgFocalPoint}
			// categories={[
			// 	{
			// 		'name': 'Sed category',
			// 		'url': '#' 
			// 	},
			// 	{
			// 		'name': 'Sed category',
			// 		'url': '#' 
			// 	}
			// ]}
			// tags={[
			// 	{
			// 		'name': 'Fames',
			// 		'url': '#'
			// 	},
			// 	{
			// 		'name': 'Tristique',
			// 		'url': '#'
			// 	},
			// 	{
			// 		'name': 'Malesuada',
			// 		'url': '#'
			// 	}
			// ]}
			authorName={attributes.authorName}
			authorUrl={attributes.authorUrl}
			date={date}
		/>
	);
}

const NewsCardControls = ( props ) => {

	return (
		<>
			<TextControl
				label="Title"
				value={props.attributes.title}
				onChange={(title) => props.setAttributes({ title })}
				placeholder={'Add title'}
			/>

			<TextControl
				label="Caption"
				value={props.attributes.caption}
				onChange={(caption) => props.setAttributes({ caption })}
				placeholder={'Add caption'}
			/>

			<WsuHr /> 

			<PanelRow>
				<span>Date</span>

				<Dropdown
					className="my-container-class-name"
					contentClassName="my-popover-content-classname"
					position="bottom right"
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button isTertiary onClick={ onToggle } aria-expanded={ isOpen }>
							{ (empty(props.attributes.date) ? 'Select date' : dateI18n(`${ 'M j, Y' } ${ 'g:i a' }`, props.attributes.date)) }
						</Button>
					) }
					renderContent={ () => (
						<div>
							<DateTimePicker
								currentDate={ props.attributes.date }
								onChange={ ( date ) => props.setAttributes( { date } ) }
								is12Hour={ true }
							/>
						</div>
					) }
				/>
			</PanelRow>

			<TextControl
				label="Author Name"
				value={props.attributes.authorName}
				onChange={(authorName) => props.setAttributes({ authorName })}
				placeholder={'Add author name'}
				help={(!empty(props.attributes.authorName) && empty(props.attributes.authorUrl) ) ? 'Author name is only displayed if a name and URL are included.' : '' }
			/>

			<TextControl
				label="Author Url"
				value={props.attributes.authorUrl}
				onChange={(authorUrl) => props.setAttributes({ authorUrl })}
				placeholder={'Add author url'}
			/>
		</>
	);
}

const CustomCard = ( props ) => {

	const { attributes, setAttributes, InnerBlocks } = props;

	return (
		<WsuCard 
			cardType={'custom'}
			title={
				<RichText
					tagName="div"
					value={attributes.title}
					onChange={(title) => setAttributes({ title })}
					allowedFormats={[]}
					placeholder="Add title"
				/>
			}
			subtitle={
				<RichText
					tagName="div"
					value={attributes.subtitle}
					onChange={(subtitle) => setAttributes({ subtitle })}
					allowedFormats={[]}
					placeholder="Add subtitle"
				/>
			}
			caption={ 
				<InnerBlocks
					templateLock={ false }
				/>
			}
			imgSrc={attributes.imgSrc}	
			imgAlt={attributes.imgAlt}
			imgFocalPoint={attributes.imgFocalPoint}
		/>
	);
}

const CustomCardControls = ( props ) => {
	return (
		<>
			<TextControl
				label="Title"
				value={props.attributes.title}
				onChange={(title) => props.setAttributes({ title })}
				placeholder={'Add title'}
			/>

			<TextControl
				label="Subtitle"
				value={props.attributes.subtitle}
				onChange={(subtitle) => props.setAttributes({ subtitle })}
				placeholder={'Add subtitle'}
			/>

			<p>Looking to add something else? Try adding a inner block!</p>
		</>
	);
}

export { 
	DefaultCard,
	DefaultCardControls, 
	PersonCard,
	PersonCardControls,
	NewsCard,
	NewsCardControls,
	CustomCard,
	CustomCardControls
}; 