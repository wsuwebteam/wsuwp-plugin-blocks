<?php namespace WSUWP\Plugin\Blocks; ?>

<div class="<?php echo esc_attr( $atts['wrapper_classes'] ); ?>"<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>>
	<?php Image_Frame::render_block( $atts ); ?>
</div>