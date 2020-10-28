<?php namespace WSUWP\Plugin\Blocks; ?>

<div
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
>
	<iframe src="https://player.vimeo.com/video/<?php echo esc_attr( $atts['video_id'] ); ?>" width="100%" height="300px" frameborder="0" title="<?php echo esc_attr( $atts['title'] ); ?>" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>