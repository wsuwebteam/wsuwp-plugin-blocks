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
		<p class="wsu-c-callout__description">
		  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
		  eget massa ut erat ultrices consectetur vitae a enim. Pellentesque
		  risus diam, posuere ac nulla mattis, pulvinar efficitur massa. Nullam
		  a nisl pretium leo pretium tincidunt quis at velit. Pellentesque
		  posuere tincidunt fringilla. Curabitur ullamcorper pharetra ligula
		  eget imperdiet.
		</p>
		<div class="wsu-c-button__wrapper">
		  <a
			class="wsu-c-button--white wsu-c-button--small wsu-c-button--round wsu-c-button"
			>Learn More</a
		  >
		</div>
	  </div>
	</div>
  </div>