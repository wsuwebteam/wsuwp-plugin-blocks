<?php namespace WSUWP\Plugin\Blocks; ?>

<div
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?> wsu-c-image__wrapper--static"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
>
	<?php echo wp_get_attachment_image($atts['attachment_id'], array($atts['width'], $atts['height']), 'full'); ?>
</div>