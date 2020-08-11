<?php namespace WSUWP\Plugin\Blocks;

class Content_Page_Banner extends Block_Base {

	protected static $slug = 'page-banner';
	protected static $default_atts = array(
		'class_name'     => '',
		'wrapper_class'  => '',
		'image_src'   => '',
		'image_alt'   => '',
		'image_size'   => 'default',
		'image_caption' => '', 
		'is_notched'   => false,
		'is_full_bleed' => false,
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_classes'] = static::get_utility_classes(
			array(
				array( 'key' => 'marginBefore', 'classSlug' => 'margin-before' ),
				array( 'key' => 'marginAfter', 'classSlug' => 'margin-after' ),
				array( 'key' => 'marginLeft', 'classSlug' => 'margin-left' ),
				array( 'key' => 'marginRight', 'classSlug' => 'margin-right' ),
				array( 'key' => 'height', 'prefix' => 'wsu-c-page-banner__image--' ),
				array( 'key' => 'is_full_bleed', 'prefix' => 'wsu-c-page-banner--', 'is_bool' => true, 'value' => 'full-bleed' ),
			),
			$atts,
			array( 'wsu-c-page-banner' )
		);


		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
