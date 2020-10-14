<?php namespace WSUWP\Plugin\Blocks; ?>

<div
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
>
	<?php echo EM_Content_Decorator::render_from_array( $atts['decorators'] ); ?>
	
	<div 
		class="wsu-c-em-hero__container" 
		style="background-image: url(<?php echo esc_attr( $atts['background_image_url'] ); ?>)"
	>
		<div class="wsu-c-em-hero__content">
			<!-- TODO: don't hardcode title -->
			<<?php echo esc_attr($atts['title_tag']); ?> 
				class="wsu-c-em-hero__title" 
				ariaLabel="<?php echo esc_attr($atts['title_aria_label']); ?>"
			>
				Welcome
				<div class="wsu-c-typewriter-text wsu-c-typewriter-text--is-outlined">
					<span class="wsu-c-typewriter__type"></span>
				</div>
			</<?php echo esc_attr($atts['title_tag']); ?>>
			
			
			<!-- <?php if ( ! empty( $atts['title'] ) ) : ?>
				<<?php echo esc_html( $atts['title_tag'] ); ?> class="wsu-c-em-hero__title"<?php if ( ! empty( $atts['title_aria_label'] ) ) : ?>aria-label="<?php echo esc_attr($title_aria_label); ?>"<?php endif; ?>>
			<?php endif; ?> -->
			
			<?php if ( ! empty( $atts['description'] ) ) : ?>
				<div class="wsu-c-em-hero__description"><?php echo esc_html($atts['description']); ?></div>
			<?php endif; ?>
		</div>
	</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
<script>
	const strings = [
		'#FutureCoug'
	];

	const typedInstance = new Typed('.wsu-c-typewriter__type', {
		strings: strings,
		typeSpeed: 40
	});
</script>