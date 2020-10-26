<?php namespace WSUWP\Plugin\Blocks; ?>

<div 
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
	<?php if ( ! empty( $atts['inline_style'] ) ) : ?> style="<?php echo esc_attr( $atts['inline_style'] ); ?>"<?php endif; ?>
	>
	<a<?php if (!empty( $atts['button_url'])) : ?> href="<?php echo esc_url( $atts['button_url']); ?>"<?php endif; ?><?php if (!empty($atts['button_class'])) : ?> class="<?php echo esc_attr( $atts['button_class'] ); ?>"<?php endif; ?>>
		<?php Icon::render_block( array( 'name' => $atts['icon_before'] ) ); ?>
		<?php echo esc_html( $content ); ?>
		<?php Icon::render_block( array( 'name' => $atts['icon_after'] ) ); ?>
	</a>
</div>