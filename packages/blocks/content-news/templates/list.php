<?php namespace WSUWP\Plugin\Blocks; ?>
<li class="wsu-c-news-list__item">
	<span class="wsu-c-news-list__content">
		<h3>
			<a href="<?php echo esc_url( $post->get( 'link' ) ); ?>"><?php echo esc_html( $post->get( 'title' ) ); ?></a>
		</h3>
		<span class="wsu-c-caption">
			<?php echo esc_html( $post->get( 'excerpt' ) ); ?>
		</span>
	</span>
	<div class="wsu-c-image">
		<img
			src="<?php echo esc_url( $post->get( 'image_src' ) ); ?>"
			/>
	</div>
</li>
