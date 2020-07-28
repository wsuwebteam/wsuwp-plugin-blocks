
<<?php echo esc_attr( $args['level'] ); ?> class="<?php echo esc_attr( implode( ' ', $args['classes'] ) ); ?>">
	<span><?php echo wp_kses_post( $args['content'] ); ?></span>
</<?php echo esc_attr( $args['level'] ); ?>>
