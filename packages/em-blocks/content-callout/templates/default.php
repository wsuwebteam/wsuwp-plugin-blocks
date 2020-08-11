<?php namespace WSUWP\Plugin\Blocks; ?>
<div class="{wrapperClasses}">
	<div class="wsu-c-em-callout__container">
		<?php Image_Frame::render_block( $atts ); ?>
		<div class="wsu-c-em-callout__content">
			<div class="wsu-c-em-callout__content-inner">
				<?php Block_Title::render_block( array( 'prefix' => 'wsu-c-eyebrow-header', 'title' => $atts['eyebrow_header'], 'tag' => 'div' ) ); ?>
				<?php Block_Title::render_block( $atts ); ?>
				<div class="wsu-c-caption">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus varius nunc, ac tincidunt nulla iaculis dictum. Cras eget lectus vehicula nisi vehicula viverra quis a sem. Vestibulum tincidunt quis dui vitae porttitor. Ut volutpat sem quis elit pellentesque gravida. Vivamus vehicula orci non turpis vehicula ultrices. 
				</div>
				<div class="wsu-c-em-callout__link-wrapper">
					<?php Wrapper_link::render_block( array( 'href' => $atts['button_url'] ), $atts['button_text'] ); ?>
				</div>
			</div>
		</div>
	</div>
</div>
