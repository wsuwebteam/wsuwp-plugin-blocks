<?php namespace WSUWP\Plugin\Blocks; ?>

 <div class="wsu-c-card__wrapper  <?php echo esc_attr( $atts['wrapper_class'] ); ?>">
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

			<?php if ( !empty( $atts['title'] ) ) : ?>
				<h3 class="wsu-c-card__heading"><?php echo esc_html( $atts['title'] ); ?></h3>
			<?php endif; ?>

			<?php if ( !empty( $atts['subtitle'] ) ) : ?>
				<div class="wsu-c-card__subtitle"><?php echo esc_html( $atts['subtitle'] ); ?></div>
			<?php endif; ?>

			<?php if ( !empty( $atts['position_title'] ) ) : ?>
				<div class="wsu-c-card__position-title"><?php echo esc_html( $atts['position_title'] ); ?></div>
			<?php endif; ?>

			<?php if ( !empty( $atts['description'] ) ) : ?>
				<p class="wsu-c-card__description">
					<?php echo esc_html( $atts['description'] ); ?>
				</p>
			<?php endif; ?>
		</div>
	</div>
</div>