const { __ } = wp.i18n;
const { MediaPlaceholder } = wp.editor;
const { RichText } = wp.editor;
const { URLInput } = wp.editor;


const edit = ( { className, attributes, setAttributes } ) => {

	console.info(attributes);

	return (
		<div className="wsu-c-block__banner__wrapper">
			<div className="wsu-c-hero__wrapper">
				<div className="wsu-c-hero__container" style={{backgroundImage:"url(" + attributes.imgSrc + ")"}}>
					<div className="wsu-c-hero__content">
						<div className="wsu-c-hero__title">{ attributes.title }</div>
						<div className="wsu-c-hero__subtitle">{ attributes.subTitle }</div>
						<a href="#" className="wsu-c-hero__button">{ attributes.buttonText }</a>
					</div>
					<p className="wsu-c-hero__image-caption">By consectetur adipiscing elit donec fringilla</p>
				</div>
			</div>
			<div className="wsu-c-block__banner__editor__wrapper">
				<div className="wsu-c-block__banner__editor__media">
					<MediaPlaceholder
						onSelect = {
							( el ) => {
								setAttributes( { imgSrc: el.url } );
							}
						}
						allowedTypes = { [ 'image' ] }
						multiple = { false }
						labels = { { title: 'Banner Image' } }
					>
					</MediaPlaceholder>
				</div>
				<div className="wsu-c-block__banner__editor__content">
					<RichText
						tagName="div"
						className={ 'wsu-c-block__banner__editor__content__title' }
						value={ attributes.title }
						onChange={ ( title ) => setAttributes( { title } ) }
						allowedFormats={[]}
						placeholder={'Banner Title Text'}
					/>
					<RichText
						tagName="div"
						className={ 'wsu-c-block__banner__editor__content__subtitle' }
						value={ attributes.subTitle }
						onChange={ ( subTitle ) => setAttributes( { subTitle } ) }
						allowedFormats={[]}
						placeholder={'Banner Subtitle Text'}
					/>
					<RichText
						tagName="div"
						className={ 'wsu-c-block__banner__editor__content__button-text' }
						value={ attributes.buttonText }
						onChange={ ( buttonText ) => setAttributes( { buttonText } ) }
						allowedFormats={[]}
						placeholder={'Button Text'}
						multiline={'false'}
					/>
					<URLInput
						className={ 'wsu-c-block__banner__editor__content__link' }
						value={ attributes.url }
						onChange={ ( url, post ) => setAttributes( { url } ) }
						placeholder={'Banner Link'}
					/>
				</div>
			</div>
		</div>
	)

}



export default edit;
