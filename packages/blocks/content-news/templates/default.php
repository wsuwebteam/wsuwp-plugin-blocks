<<?php echo esc_attr( $atts['wrapper_tag'] ); ?> 
	class="<?php echo esc_attr( $atts['wrapper_class'] ); ?>" <?php if ( ! empty( $atts['id'] ) ) : ?> 
	id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
	<?php if ( ! empty( $atts['inline_style'] ) ) : ?> style="<?php echo esc_attr( $atts['inline_style'] ); ?>"<?php endif; ?>
	>
	<?php echo wp_kses_post( $content ); ?>
</<?php echo esc_attr( $atts['wrapper_tag'] ); ?> >
