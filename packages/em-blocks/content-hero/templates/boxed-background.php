<?php namespace WSUWP\Plugin\Blocks; ?>

<div
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
	<?php if ( !empty( $atts['inline_style'] ) ) : ?> style="<?php echo esc_attr( $atts['inline_style'] ); ?>"<?php endif; ?>
>
	<?php echo EM_Content_Decorator::render_from_array( $atts['decorators'] ); ?>
	
	<div 
		class="wsu-c-em-hero__container" 
		style="background-image: url(<?php echo esc_attr( $atts['background_image_url'] ); ?>)"
	>
		<div class="wsu-c-em-hero__content">
			<?php if ( ! empty( $atts['title'] ) ) : ?>
				<<?php echo esc_attr($atts['title_tag']); ?> 
					class="wsu-c-em-hero__title" 
					ariaLabel="<?php echo esc_attr($atts['title_aria_label']); ?>"
				>
					<?php echo esc_html( $atts['title'] ); ?>
				</<?php echo esc_attr($atts['title_tag']); ?>>
			<?php endif; ?>
			
			<?php if ( ! empty( $atts['description'] ) ) : ?>
				<div class="wsu-c-em-hero__description"><?php echo esc_html($atts['description']); ?></div>
			<?php endif; ?>
		</div>
	</div>
</div>