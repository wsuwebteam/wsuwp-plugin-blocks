<?php namespace WSUWP\Plugin\Blocks; ?>
<div class="<?php echo esc_attr( $atts['wrapper_classes'] ); ?>">
	<?php Pattern::render_block( $atts ); ?>
	<div class="wsu-c-image-frame__image-wrapper">
		<?php if ( ! empty( $atts['link'] ) ) : ?><a href="<?php echo esc_url( $atts['link'] ); ?>" class="wsu-c-image-frame__link"><?php endif; ?>
			<img 
				class="wsu-c-image-frame__image" 
				src="<?php echo esc_url( $atts['image_src'] ); ?>" 
				alt=<?php echo esc_attr( $atts['image_alt'] ); ?> 
				data-object-fit="" 
				style="object-position: <?php echo $atts['img_focal_point']['x'] * 100; ?>% <?php echo $atts['img_focal_point']['y'] * 100; ?>%;"
			/>
		<?php if ( ! empty( $atts['link'] ) ) : ?></a><?php endif; ?>
	</div>
</div>
