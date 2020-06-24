<div class="<?php echo esc_attr( implode( ' ', $atts['wrapper_classes'] ) ); ?>">
	<div class="<?php echo esc_attr( implode( ' ', $atts['container_classes'] ) ); ?>" style="background-image: url(<?php echo esc_attr( $atts['img_src'] ); ?>)">
		<div class="wsu-c-hero__content">
			<?php if ( ! empty( $atts['title'] ) ) : ?>
				<<?php echo esc_html( $atts['title_tag'] ); ?> class="wsu-c-hero__title"><?php echo esc_html( $atts['title'] ); ?></<?php echo esc_html( $atts['title_tag'] ); ?>>
			<?php endif; ?>
			<?php if ( ! empty( $atts['subtitle'] ) ) : ?>
				<div class="wsu-c-hero__subtitle"><?php echo esc_html( $atts['title'] ); ?></div>
			<?php endif; ?>
			<?php if ( ! empty( $atts['caption'] ) ) : ?>
				<div class="wsu-c-hero__caption"><?php echo esc_html( $atts['caption'] ); ?></div>
			<?php endif; ?>
			<?php if ( ! empty( $atts['button_text'] ) ) : ?>
				<a href="<?php echo esc_html( $atts['button_url'] ); ?>" class="wsu-c-hero__button"><?php echo esc_html( $atts['button_text'] ); ?></a>
			<?php endif; ?>
		</div>
		<?php if ( ! empty( $atts['button_text'] ) ) : ?>
			<p class="wsu-c-hero__image-caption">
				<?php echo esc_html( $atts['image_caption'] ); ?>
			</p>
		<?php endif; ?>
	</div>
</div>
