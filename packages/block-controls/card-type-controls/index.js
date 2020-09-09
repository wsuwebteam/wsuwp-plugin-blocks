const { __ } = wp.i18n;
const { 
	URLInputButton,
	URLInput,
	PlainText,
	RichText,
	InspectorControls,
	InnerBlocks,
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
	return (
		<WsuCard 
			title={
				<RichText
					tagName="div"
					value={props.attributes.title}
					onChange={(title) => props.setAttributes({ title })}
					allowedFormats={[]}
					placeholder="Add title"
				/>
			}
			subtitle={
				<RichText
					tagName="div"
					value={props.attributes.subtitle}
					onChange={(subtitle) => props.setAttributes({ subtitle })}
					allowedFormats={[]}
					placeholder="Add subtitle"
				/>
			}
			positionTitle={
				<RichText
					tagName="div"
					value={props.attributes.positionTitle}
					onChange={(positionTitle) => props.setAttributes({ positionTitle })}
					allowedFormats={[]}
					placeholder="Add position title"
				/>
			}
			description={
				<RichText
					tagName="div"
					value={props.attributes.description}
					onChange={(description) => props.setAttributes({ description })}
					allowedFormats={[]}
					placeholder="Add description"
				/>
			}
			image={{'src': props.attributes.imgSrc, 'alt': props.attributes.imgCaption}}
			imgFocalPoint={props.attributes.imgFocalPoint}
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
				label="Position Title"
				value={props.attributes.positionTitle}
				onChange={(positionTitle) => props.setAttributes({ positionTitle })}
				placeholder={'Add position title'}
			/>

			<TextControl
				label="Description"
				value={props.attributes.description}
				onChange={(description) => props.setAttributes({ description })}
				placeholder={'Add description'}
			/>
		</>
	);
}

const PersonCard = ( props ) => {

	return (
		<WsuCard 
			title={
				<RichText
					tagName="div"
					value={props.attributes.title}
					onChange={(title) => props.setAttributes({ title })}
					allowedFormats={[]}
					placeholder="Add person name"
				/>
			}
			subtitle={
				<RichText
					tagName="div"
					value={props.attributes.subtitle}
					onChange={(subtitle) => props.setAttributes({ subtitle })}
					allowedFormats={[]}
					placeholder="Add subtitle"
				/>
			}
			description={
				<RichText
					tagName="div"
					value={props.attributes.description}
					onChange={(description) => props.setAttributes({ description })}
					allowedFormats={[]}
					placeholder={'Add description text'}
				/>
			}
			positionTitle={
				<RichText
					tagName="div"
					value={props.attributes.positionTitle}
					onChange={(positionTitle) => props.setAttributes({ positionTitle })}
					allowedFormats={[]}
					placeholder="Add position title"
				/>
			}
			addressLine1={
				<RichText
					tagName="div"
					value={props.attributes.addressLine1}
					onChange={(addressLine1) => props.setAttributes({ addressLine1 })}
					allowedFormats={[]}
					placeholder={'Add address line 1'}
				/>
			}
			addressLine2={
				<RichText
					tagName="div"
					value={props.attributes.addressLine2}
					onChange={(addressLine2) => props.setAttributes({ addressLine2 })}
					allowedFormats={[]}
					placeholder={'Add address line 2'}
				/>
			}
			phoneNumber={
				<RichText
					tagName="div"
					value={props.attributes.phoneNumber}
					onChange={(phoneNumber) => props.setAttributes({ phoneNumber })}
					allowedFormats={[]}
					placeholder={'Add phone number'}
				/>
			}
			email={
				<RichText
					tagName="div"
					value={props.attributes.email}
					onChange={(email) => props.setAttributes({ email })}
					allowedFormats={[]}
					placeholder={'Add email'}
				/>
			}
			website={
				<RichText
					tagName="div"
					value={props.attributes.website}
					onChange={(website) => props.setAttributes({ website })}
					allowedFormats={[]}
					placeholder={'Add website address'}
				/>
			}
			image={{'src': props.attributes.imgSrc, 'alt': props.attributes.imgCaption}}
			imgFocalPoint={props.attributes.imgFocalPoint}
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
				label="Subtitle"
				value={props.attributes.subtitle}
				onChange={(subtitle) => props.setAttributes({ subtitle })}
				placeholder={'Add subtitle'}
			/>

			<TextControl
				label="Position Title"
				value={props.attributes.positionTitle}
				onChange={(positionTitle) => props.setAttributes({ positionTitle })}
				placeholder={'Add position title'}
			/>

			<TextControl
				label="Description"
				value={props.attributes.description}
				onChange={(description) => props.setAttributes({ description })}
				placeholder={'Add description'}
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

	let date = (empty(props.attributes.date) ? '' : dateI18n(`${ 'n/j/y' }`, props.attributes.date));
	let authorName = (empty(props.attributes.authorName) ? 'learn more' : props.attributes.authorName);
	let authorUrl = (empty(props.attributes.authorUrl) ? 'learn more' : props.attributes.authorUrl);

	let author = {
		'name': authorName, 
		'url': authorUrl
	};

	if (empty(props.attributes.authorName) || empty(props.attributes.authorUrl)) {
		author = '';
	}

	return (
		<WsuCard 
			title={
				<RichText
					tagName="div"
					value={props.attributes.title}
					onChange={(title) => props.setAttributes({ title })}
					allowedFormats={[]}
					placeholder={'Add title'}
				/>
			}
			description={
				<RichText
					tagName="div"
					value={props.attributes.description}
					onChange={(description) => props.setAttributes({ description })}
					allowedFormats={[]}
					placeholder={'Add description text'}
				/>
			}
			image={{'src': props.attributes.imgSrc, 'alt': props.attributes.imgCaption}}
			imgFocalPoint={props.attributes.imgFocalPoint}
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
			author={author}
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
				label="Description"
				value={props.attributes.description}
				onChange={(description) => props.setAttributes({ description })}
				placeholder={'Add description'}
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
	return (
		<WsuCard 
			description={ 
				<InnerBlocks
					templateLock={ false }
				/>
			 }
			image={{'src': props.attributes.imgSrc, 'alt': props.attributes.imgCaption}}
		/>
	);
}

const CustomCardControls = ( props ) => {
	return (
		<>
			<p>Have fun! There are no fields for custom cards, just use blocks!</p>
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