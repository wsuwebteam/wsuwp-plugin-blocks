<?php namespace WSUWP\Plugin\Blocks; ?>

<div 
	<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?>
	<?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>
>
	<div class="wsu-c-card__container">
		<div class="wsu-c-card__content">

			<?php if ( !empty( $atts['image_src'] ) ) : ?>
				<div class="wsu-c-card__photo-frame">
					<div class="wsu-c-card__photo-wrapper">
					<?php if ( ! empty( $atts['link'] ) ) : ?><a href="<?php echo esc_url( $atts['link'] ); ?>" class="wsu-c-card__photo-link"><?php endif; ?>
					<img
						class="wsu-c-card__photo"
						src="<?php echo esc_url( $atts['image_src'] ); ?>"
						alt="<?php echo esc_url( $atts['image_alt'] ); ?>"
						data-object-fit=""
					/>
					<?php if ( ! empty( $atts['link'] ) ) : ?></a><?php endif; ?>
					</div>
				</div>
			<?php endif; ?>
			<div class="wsu-c-card__copy">

				<?php if ( !empty( $atts['title'] ) ) : ?>
					<h3 class="wsu-c-card__heading">
					<?php if ( ! empty( $atts['link'] ) ) : ?><a href="<?php echo esc_url( $atts['link'] ); ?>" class="wsu-c-card__heading-link"><?php endif; ?>
					<?php echo esc_html( $atts['title'] ); ?>
					<?php if ( ! empty( $atts['link'] ) ) : ?></a><?php endif; ?>
					</h3>
				<?php endif; ?>

				<?php if ( !empty( $atts['caption'] ) ) : ?>
					<p class="wsu-c-card__caption">
						<?php echo esc_html( $atts['caption'] ); ?>
					</p>
				<?php endif; ?>

				<?php if ( Content_Card::show_card_footer($atts) ) : ?>
					<div class="wsu-c-card__content-footer">
						<div class="wsu-c-card__byline-container">
							<?php if ( !empty( $atts['date'] ) ) : ?>
								<p class="wsu-c-card__byline-meta">
									<i class="wsu-icon wsu-i-calendar"></i>
									Published on <?php echo esc_html(date('n/j/y', strtotime($atts['date']))); ?>
								</p>
							<?php endif; ?>

							<?php if ( !empty( $atts['author_name'] ) && !empty( $atts['author_url'] ) ) : ?>
								<p class="wsu-c-card__author">
									By
									<a
										href="<?php echo esc_attr($atts['author_url']); ?>"
										class="wsu-c-link wsu-c-link--is-secondary"
										target="_self"
										rel="author"
									>
										<?php echo esc_html($atts['author_name']); ?>
									</a>
								</p>
							<?php endif; ?>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>