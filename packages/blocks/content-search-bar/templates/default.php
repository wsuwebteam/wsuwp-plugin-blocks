<?php namespace WSUWP\Plugin\Blocks; ?>

<div<?php if (!empty($atts['wrapper_class'])) : ?> class="<?php echo esc_attr( $atts['wrapper_class']); ?>"<?php endif; ?><?php if (!empty($atts['id'])) : ?> id="<?php echo esc_attr( $atts['id'] ); ?>"<?php endif; ?>>
	<form role="search" method="get" class="search-form" action="<?php echo esc_url( get_site_url() ); ?>">
		<input type="search" class="search-field" placeholder="Search …" value="" name="s">
		<input type="submit" class="search-submit" value="Search">
	</form> 
</div>