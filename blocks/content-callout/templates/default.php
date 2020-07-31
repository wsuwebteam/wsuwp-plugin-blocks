<div class="<?php echo esc_attr( $atts['wrapper_class'] ); ?>">
	<div class="wsu-c-callout__container">
		<?php if ( ! empty( $atts['image_src'] ) ) : ?>
			<div class="wsu-c-callout__image-frame">
				<div class="wsu-c-callout__image-wrapper">
					<?php if ( ! empty( $atts['link'] ) ) : ?><a href="<?php echo esc_url( $atts['link'] ); ?>" class="wsu-c-callout__image-link"><?php endif; ?>
					<img
						class="wsu-c-callout__image"
						src="<?php echo esc_url( $atts['image_src'] ); ?>"
						alt="<?php echo esc_url( $atts['image_alt'] ); ?>""
						/>
					<?php if ( ! empty( $atts['link'] ) ) : ?></a><?php endif; ?>
				</div>
			</div>
		<?php endif; ?>
	  	<div class="wsu-c-callout__content">
			<h3 class="wsu-c-callout__title">
				<?php if ( ! empty( $atts['link'] ) ) : ?><a href="<?php echo esc_url( $atts['link'] ); ?>" class="wsu-c-callout__title-link"><?php endif; ?>
				<?php echo esc_html( $atts['title'] ); ?>
				<?php if ( ! empty( $atts['link'] ) ) : ?></a><?php endif; ?>
			</h3>
			<div class="wsu-c-callout__description">
				<?php echo $content; ?>
			</div>
			<?php if ( ! empty( $atts['button_text'] ) ) : ?>
				<div class="wsu-c-button__wrapper">
					<a class="wsu-c-button--white wsu-c-button--small wsu-c-button--round wsu-c-button" href="<?php echo esc_url( $atts['link'] ); ?>" >
					<?php echo esc_html( $atts['button_text'] ); ?>
					</a >
				</div>
			<?php endif; ?>
	  	</div>
	</div>
</div>