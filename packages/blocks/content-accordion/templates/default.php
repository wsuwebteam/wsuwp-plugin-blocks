<div id="<?php echo esc_attr( $atts['id'] ); ?>" class="<?php echo esc_attr( $atts['wrapper_class'] ); ?>">
	<h2 class="wsu-c-accordion__title" tabindex="0">
		<?php echo wp_kses_post( $atts['title'] ); ?>
	</h2>
	<div class="wsu-c-accordion__content">
		<div class="wsu-c-accordion__content-inner">
			<?php echo $content; ?>
		</div>
	</div>
</div>
