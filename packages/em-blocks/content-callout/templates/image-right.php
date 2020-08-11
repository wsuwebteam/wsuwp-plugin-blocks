<?php namespace WSUWP\Plugin\Blocks; ?>
<div class="<?php echo esc_attr( $atts['wrapper_classes'] ); ?>">
	<div class="wsu-c-em-callout__container">
		<div class="wsu-c-em-callout__content">
			<div class="wsu-c-em-callout__content-inner">
				<?php Block_Title::render_block( array( 'prefix' => 'wsu-c-eyebrow-header', 'title' => $atts['eyebrow_header'], 'tag' => 'div' ) ); ?>
				<?php Block_Title::render_block( $atts ); ?>
				<?php if ( ! empty( $atts['description'] ) ) : ?>
					<p class="wsu-c-caption">
						<?php echo wp_kses_post( $atts['description'] ); ?>
					</p>
				<?php endif; ?>
				<?php echo $content; ?>
				<div class="wsu-c-em-callout__link-wrapper">
					<?php Wrapper_link::render_block( array( 'href' => $atts['button_url'] ), $atts['button_text'] ); ?>
				</div>
			</div>
		</div>
		<?php Image_Frame::render_block( $atts ); ?>
	</div>
</div>
