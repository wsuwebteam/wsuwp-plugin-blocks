<?php namespace WSUWP\Plugin\Blocks; ?>

<div class="<?php echo esc_attr( $atts['wrapper_classes'] ); ?>"<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>>
	<?php Image_Frame::render_block( $atts ); ?>
	<div class="wsu-c-page-banner__container">
		<?php if ( ! empty( $atts['eyebrow_header'] ) ) : ?>
		<div class="wsu-c-page-banner__eyebrow-header">
			<?php echo wp_kses_post( $atts['eyebrow_header'] ); ?>
		</div>
		<?php endif; ?>
		<?php if ( ! empty( $atts['title'] ) ) : ?>
		<<?php echo esc_attr( $atts['title_tag'] ); ?> class="wsu-c-page-banner__title">
			<?php echo wp_kses_post( $atts['title'] ); ?>
		</<?php echo esc_attr( $atts['title_tag'] ); ?>>
		<?php endif; ?>
	</div>
</div>