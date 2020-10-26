<h<?php echo esc_attr( $atts['level'] ); ?>
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
	<?php if ( ! empty( $atts['inline_style'] ) ) : ?> style="<?php echo esc_attr( $atts['inline_style'] ); ?>"<?php endif; ?>
	>
	<?php if ( ! empty( $atts['link'] ) ) : ?><a href="<?php echo esc_url( $atts['link']  ); ?>" class="wsu-c-heading__link"><?php endif; ?>
		<?php echo esc_html( $atts['content'] ); ?>
	<?php if ( ! empty( $atts['link'] ) ) : ?></a><?php endif; ?>
</h<?php echo esc_attr( $atts['level'] ); ?>>