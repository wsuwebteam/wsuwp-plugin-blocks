<?php namespace WSUWP\Plugin\Blocks; ?>

<div<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?><?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>>
	<div class="wsu-c-callout__container">
		<?php if ( ! empty( $atts['image_src'] ) || ! empty( $atts['video_src'] ) ) : ?>
			<div class="wsu-c-callout__image-frame">
				<div class="wsu-c-callout__image-wrapper">
					<?php if ( ! empty( $atts['video_src'] ) ) : ?>
						<iframe
							class="wsu-c-callout__video"
							src="<?php echo esc_url( $atts['video_src'] ); ?>?&amp;byline=0&amp;title=0&amp;portrait=0"
							frameborder="0"
							allow="autoplay; fullscreen"
							></iframe>
					<?php else : ?>
						<?php if ( ! empty( $atts['link'] ) ) : ?><a href="<?php echo esc_url( $atts['link'] ); ?>" class="wsu-c-callout__image-link"><?php endif; ?>
						<img
							class="wsu-c-callout__image"
							src="<?php echo esc_url( $atts['image_src'] ); ?>"
							alt="<?php echo esc_url( $atts['image_alt'] ); ?>""
							/>
						<?php if ( ! empty( $atts['link'] ) ) : ?></a><?php endif; ?>
					<?php endif; ?>
				</div>
			</div>
		<?php endif; ?>
		<div class="wsu-c-callout__content">
			<h3 class="wsu-c-callout__title">
				<?php if ( ! empty( $atts['link'] ) ) : ?><a href="<?php echo esc_url( $atts['link'] ); ?>" class="wsu-c-callout__title-link"><?php endif; ?>
				<?php echo esc_html( $atts['title'] ); ?>
				<?php if ( ! empty( $atts['link'] ) ) : ?></a><?php endif; ?>
			</h3>
			<div class="wsu-c-callout__description">
				<?php echo $content; ?>
			</div>
			<?php if ( ! empty( $atts['button_text'] ) ) : ?>
				<div class="wsu-c-button__wrapper">
					<a class="wsu-c-button--white wsu-c-button--small wsu-c-button--round wsu-c-button" href="<?php echo esc_url( $atts['button_url'] ); ?>" >
					<?php echo esc_html( $atts['button_text'] ); ?>
					</a >
				</div>
			<?php endif; ?>
		</div>
	</div>
</div>