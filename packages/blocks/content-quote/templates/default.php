<blockquote class="<?php echo esc_attr( $atts['wrapper_class']); ?>">
	<?php echo $content; ?>
	<?php if ( ! empty( $atts['name'] ) || ! empty( $atts['cite'] ) ) : ?>
	<footer class="<?php echo esc_attr( $atts['footer_class']); ?>">
		<?php if ( ! empty( $atts['name'] ) ) : ?>
		<span class="wsu-c-blockquote__footer-name"><?php echo esc_html( $atts['name'] ); ?></span>
		<?php endif; ?>
		<?php if ( ! empty( $atts['title'] ) ) : ?>
		<span class="wsu-c-blockquote__footer-title">
			<?php echo esc_html( $atts['title'] ); ?>
		</span>
		<?php endif; ?>
		<?php if ( ! empty( $atts['cite'] ) ) : ?>
		<cite class="wsu-c-blockquote__footer-cite">
			<?php if ( ! empty( $atts['cite_url'] ) ) : ?><a href="<?php echo esc_url( $atts['cite_url'] ); ?>" class="wsu-c-blockquote__footer-cite-link"><?php endif; ?>
				<?php echo esc_html( $atts['cite'] ); ?>
			<?php if ( ! empty( $atts['cite_url'] ) ) : ?></a><?php endif; ?>
		</cite>
		<?php endif; ?>
	</footer>
	<?php endif; ?>
</blockquote>