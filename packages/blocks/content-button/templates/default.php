<?php namespace WSUWP\Plugin\Blocks; ?>
<div class="wsu-c-button__wrapper <?php echo esc_attr( $atts['wrapper_class'] ); ?>">
	<a
		<?php if ( ! empty( $atts['button_url'] ) ) : ?>href="<?php echo esc_url( $atts['button_url'] ); ?>"<?php endif; ?>
		class="wsu-c-button <?php echo esc_attr( $atts['button_class'] ); ?>"
		>
		<?php Icon::render_block( array( 'name' => $atts['icon_before'] ) ); ?>
		<?php echo esc_html( $content ); ?>
		<?php Icon::render_block( array( 'name' => $atts['icon_after'] ) ); ?>
	</a>
</div>