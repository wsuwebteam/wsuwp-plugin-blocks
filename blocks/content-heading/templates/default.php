<h<?php echo esc_attr( $atts['level'] ); ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>">
	<?php if ( ! empty( $atts['link'] ) ) : ?><a href="<?php echo esc_url( $atts['link']  ); ?>" class="wsu-c-heading__link"><?php endif; ?>
		<?php echo esc_html( $atts['content']  ); ?>
	<?php if ( ! empty( $atts['link'] ) ) : ?></a><?php endif; ?>
</h<?php echo esc_attr( $atts['level'] ); ?>>