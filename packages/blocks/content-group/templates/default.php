<?php namespace WSUWP\Plugin\Blocks; ?>
<div
	<?php if ( ! empty($atts['wrapper_class'] ) ) : ?>class="<?php echo esc_attr( $atts['wrapper_class'] ); ?>"<?php endif; ?>
	<?php if ( ! empty($atts['id'] ) ) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
	<?php if ( ! empty( $atts['inline_style'] ) ) : ?> style="<?php echo esc_attr( $atts['inline_style'] ); ?>"<?php endif; ?>
	>
	<?php echo EM_Content_Decorator::render_from_array( $atts['decorators'] ); ?>
	<?php if ( ! empty( $atts['limit_content_width'] ) ) : ?><div class="wsu-c-group__content wsu-c-container" ><?php endif; ?>
		<?php echo $content; ?>
	<?php if ( ! empty( $atts['limit_content_width'] ) ) : ?></div><?php endif; ?>
</div>