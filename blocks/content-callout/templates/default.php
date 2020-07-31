<div class="<?php echo esc_attr( $atts['wrapper_class'] ); ?>">
	<div class="wsu-c-callout__container">
		<?php if ( ! empty( $atts['image_src'] ) ) : ?>
			<div class="wsu-c-callout__image-frame">
				<div class="wsu-c-callout__image-wrapper">
				<a href="#" class="wsu-c-callout__image-link"
					><img
					class="wsu-c-callout__image"
					src="<?php echo esc_url( $atts['image_src'] ); ?>"
					alt="Alt Text"
				/></a>
				</div>
			</div>
		<?php endif; ?>
	  	<div class="wsu-c-callout__content">
		<h3 class="wsu-c-callout__title">
		  <a href="#" class="wsu-c-callout__title-link"
			>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a
		  >
		</h3>
		<div class="wsu-c-callout__description">
			<?php echo $content; ?>
		</div>
		<div class="wsu-c-button__wrapper">
		  <a
			class="wsu-c-button--white wsu-c-button--small wsu-c-button--round wsu-c-button"
			>Learn More</a
		  >
		</div>
	  </div>
	</div>
  </div>