<div 
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
	<?php if ( ! empty( $atts['inline_style'] ) ) : ?> style="<?php echo esc_attr( $atts['inline_style'] ); ?>"<?php endif; ?>
	>
	<h2 class="wsu-c-accordion__title" tabindex="0">
		<?php echo wp_kses_post( $atts['title'] ); ?>
	</h2>
	<div class="wsu-c-accordion__content">
		<div class="wsu-c-accordion__content-inner">
			<?php echo $content; ?>
		</div>
	</div>
</div>
