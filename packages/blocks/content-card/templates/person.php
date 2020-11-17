<?php namespace WSUWP\Plugin\Blocks; ?>

<div 
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
>
	<div class="wsu-c-card__container">
		<div class="wsu-c-card__content">

			<?php if ( !empty( $atts['img_src'] ) ) : ?>
				<div class="wsu-c-card__photo-frame">
					<div class="wsu-c-card__photo-wrapper">
					<img
						class="wsu-c-card__photo"
						src="<?php echo esc_url( $atts['img_src'] ); ?>"
						alt="<?php echo esc_url( $atts['img_caption'] ); ?>"
						data-object-fit=""
					/>
					</div>
				</div>
			<?php endif; ?>

			<div class="wsu-c-card__copy">

				<?php if ( !empty( $atts['title'] ) ) : ?>
					<h3 class="wsu-c-card__heading"><?php echo esc_html( $atts['title'] ); ?></h3>
				<?php endif; ?>

				<?php if ( !empty( $atts['subtitle'] ) ) : ?>
					<div class="wsu-c-card__subtitle"><?php echo esc_html( $atts['subtitle'] ); ?></div>
				<?php endif; ?>

				<?php if ( !empty( $atts['caption'] ) ) : ?>
					<p class="wsu-c-card__caption">
						<?php echo esc_html( $atts['caption'] ); ?>
					</p>
				<?php endif; ?>

				<?php if ( !empty( $atts['address_line1'] ) || !empty( $atts['address_line2'] ) ) : ?>
					<div class="wsu-c-card__address">
						<?php if ( !empty( $atts['address_line1'] ) ) : ?>
							<span class="wsu-c-card__address-line-1">
								<?php echo esc_html($atts['address_line1']); ?>
							</span>
						<?php endif; ?>
						<?php if ( !empty( $atts['address_line2'] ) ) : ?>
							<span class="wsu-c-card__address-line-2">
							<?php echo esc_html($atts['address_line2']); ?>
							</span>
						<?php endif; ?>
					</div>
				<?php endif; ?>

				<?php if ( !empty( $atts['phone_number'] ) ) : ?>
					<div class="wsu-c-card__phone">
						<a href="tel:<?php echo esc_attr($atts['phone_number']); ?>" class="wsu-c-card__phone-link">
							<?php echo esc_html($atts['phone_number']); ?>
						</a>
					</div>
				<?php endif; ?>

				<?php if ( !empty( $atts['email'] ) ) : ?>
					<div class="wsu-c-card__email">
						<a
							href="mailto:<?php echo esc_attr($atts['email']); ?>"
							class="wsu-c-card__email-link"
						>
							<?php echo esc_html($atts['email']); ?>
						</a>
					</div>
				<?php endif; ?>

				<?php if ( !empty( $atts['website'] ) ) : ?>
					<div class="wsu-c-card__website">
						<a href="<?php echo esc_attr($atts['website']); ?>" class="wsu-c-card__website-link">
							Website
						</a>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>