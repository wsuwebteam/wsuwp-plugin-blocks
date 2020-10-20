<?php namespace WSUWP\Plugin\Blocks; ?>

 <div class="wsu-c-card__wrapper  <?php echo esc_attr( $atts['wrapper_class'] ); ?>">
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
						<?php 
						// not yet implemented in the block editor
						// <div class="wsu-c-card__taxonomy-container">
						// 	<p class="wsu-c-card__categories">
						// 		<span class="wsu-c-card__categories-label">
						// 			More on:
						// 		</span>
						// 		<a
						// 			href=""
						// 			class="wsu-c-link wsu-c-link--is-secondary"
						// 			target="_self"
						// 			rel=""
						// 		>
						// 			Sed category
						// 		</a>
						// 		,
						// 		<a
						// 			href=""
						// 			class="wsu-c-link wsu-c-link--is-secondary"
						// 			target="_self"
						// 			rel=""
						// 		>
						// 			Sed category
						// 		</a>
						// 	</p>
						// 	<p class="wsu-c-card__tags">
						// 		<span class="wsu-c-card__tags-label">
						// 			<i class="wsu-icon wsu-i-tag"></i>
						// 		</span>
						// 		<a
						// 			href=""
						// 			class="wsu-c-link wsu-c-link--is-secondary"
						// 			target="_self"
						// 			rel=""
						// 		>
						// 			Fames
						// 		</a>
						// 		,
						// 		<a
						// 			href=""
						// 			class="wsu-c-link wsu-c-link--is-secondary"
						// 			target="_self"
						// 			rel=""
						// 		>
						// 			Tristique
						// 		</a>
						// 		,
						// 		<a
						// 			href=""
						// 			class="wsu-c-link wsu-c-link--is-secondary"
						// 			target="_self"
						// 			rel=""
						// 		>
						// 			Malesuada
						// 		</a>
						// 	</p>
						// </div>
						?>
						<div class="wsu-c-card__byline-container">
							<?php if ( !empty( $atts['date'] ) ) : ?>
								<p class="wsu-c-card__byline-meta">
									<i class="wsu-icon wsu-i-calendar"></i>
									Published on <?php echo esc_html(date('n/j/y', strtotime($atts['date']))); ?>
								</p>
							<?php endif; ?>

							<?php if ( !empty( $atts['author_name'] ) && !empty( $atts['author_link'] ) ) : ?>
								<p class="wsu-c-card__author">
									By
									<a
										href="<?php echo esc_attr($atts['author_link']); ?>"
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