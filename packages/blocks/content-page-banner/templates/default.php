<?php namespace WSUWP\Plugin\Blocks; ?>

<div class="<?php echo esc_attr( $atts['wrapper_classes'] ); ?>">
	<?php Image_Frame::render_block( $atts ); ?>
</div>