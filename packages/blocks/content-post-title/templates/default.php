<?php namespace WSUWP\Plugin\Blocks; ?>

<h1<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?><?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>>
	<?php echo wp_kses_post( $atts['title'] ); ?>
</h1>