<?php namespace WSUWP\Plugin\Blocks; ?>

<div<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?><?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>>
	<div class="wsu-c-hero__container" style="background-image: url(<?php echo esc_attr( $atts['img_src'] ); ?>)">
		<?php echo EM_Content_Decorator::render_from_array( $atts['decorators'] ); ?>
		<div class="wsu-c-hero__content">
			<?php if ( ! empty( $atts['title'] ) ) : ?>
				<<?php echo esc_html( $atts['title_tag'] ); ?> class="wsu-c-hero__title"><?php echo esc_html( $atts['title'] ); ?></<?php echo esc_html( $atts['title_tag'] ); ?>>
			<?php endif; ?>
			<?php if ( ! empty( $atts['subtitle'] ) ) : ?>
				<div class="wsu-c-hero__subtitle"><?php echo esc_html( $atts['subtitle'] ); ?></div>
			<?php endif; ?>
			<?php if ( ! empty( $atts['caption'] ) ) : ?>
				<div class="wsu-c-hero__caption"><?php echo esc_html( $atts['caption'] ); ?></div>
			<?php endif; ?>
			<?php if ( ! empty( $atts['button_text'] ) ) : ?>
				<a href="<?php echo esc_html( $atts['button_url'] ); ?>" class="wsu-c-button"><?php echo esc_html( $atts['button_text'] ); ?></a>
			<?php endif; ?>
		</div>
		<?php if ( ! empty( $atts['button_text'] ) ) : ?>
			<p class="wsu-c-hero__image-caption">
				<?php echo esc_html( $atts['image_caption'] ); ?>
			</p>
		<?php endif; ?>
	</div>
</div>
