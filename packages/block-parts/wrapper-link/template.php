<a 
	href="<?php echo esc_url( $atts['href'] ); ?>" 
	class="<?php echo esc_attr( $atts['wrapper_classes'] ); ?>"
	>
	<?php echo wp_kses_post( $content ); ?>
</a>
