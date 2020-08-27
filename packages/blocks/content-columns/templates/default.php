<?php namespace WSUWP\Plugin\Blocks; ?>

<div class="<?php echo esc_attr( implode( ' ', $atts['wrapper_classes'] ) ); ?>">
	<?php echo $content; ?>
</div>