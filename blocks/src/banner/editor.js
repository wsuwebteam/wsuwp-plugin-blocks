const { __ } = wp.i18n;
const { MediaPlaceholder } = wp.editor;
const { PlainText } = wp.editor;
const { URLInput } = wp.editor;
const { InspectorControls } = wp.editor;

const editor = wp.editor;

console.log(editor);

const edit = ({ className, attributes, setAttributes }) => {

	console.info(attributes);

	return (
		<div>
			<div className="wsu-c-block__banner__wrapper">
				<div className="wsu-c-hero__wrapper">
					<div className="wsu-c-hero__container" style={{ backgroundImage: "url(" + attributes.img_src + ")" }}>
						<div className="wsu-c-hero__content">
							<div className="wsu-c-hero__title">{attributes.title}</div>
							<div className="wsu-c-hero__subtitle">{attributes.subtitle}</div>
							<div class="wsu-c-button wsu-button-sm">
								<a href="#" class="wsu-c-button_link">{attributes.button_text}</a>
							</div>
						</div>
						<p className="wsu-c-hero__image-caption">By consectetur adipiscing elit donec fringilla</p>
					</div>
				</div>
				<div className="wsu-c-block__banner__editor__wrapper">
					<div className="wsu-c-block__banner__editor__media">
						<MediaPlaceholder
							onSelect={
								(el) => {
									setAttributes({ img_src: el.url });
								}
							}
							allowedTypes={['image']}
							multiple={false}
							labels={{ title: 'Banner Image' }}
						>
						</MediaPlaceholder>
					</div>
					<div className="components-base-control__field">
						<label htmlFor="bannerTitleText">Title Text</label>
						<PlainText
							id="bannerTitleText"
							className={'components-text-control__input'}
							value={attributes.title}
							onChange={(title) => setAttributes({ title })}
							placeholder={'Title Text'}
						/>
						<label htmlFor="bannerSubtitleText">Subtitle Text</label>
						<PlainText
							id="bannerSubtitleText"
							className={'components-text-control__input'}
							value={attributes.subtitle}
							onChange={(subtitle) => setAttributes({ subtitle })}
							placeholder={'Subtitle Text'}
						/>
						<div className="wsu-c-form__field-container--textarea"></div>
						<label htmlFor="bannerButtonText">Button Text</label>
						<PlainText
							id="bannerButtonText"
							className={'components-text-control__input'}
							value={attributes.button_text}
							onChange={(button_text) => setAttributes({ button_text })}
							placeholder={'Button Text'}
							multiline={'false'}
						/>


						<label htmlFor="bannerButtonLink">Button Link</label>
						<URLInput
							id="bannerButtonLink"
							className={'wsu-c-block__banner__editor__content__link'}
							value={attributes.url}
							onChange={(url, post) => setAttributes({ url })}
							placeholder={'Button Link'}
						/>
					</div>
				</div>
			</div>
		</div>
	)

}



export default edit;
