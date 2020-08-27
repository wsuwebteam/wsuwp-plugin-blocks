<?php namespace WSUWP\Plugin\Blocks;

class Content_Hero extends Block_Base {

	protected static $slug = 'content-hero';
	protected static $default_atts = array(
		'wrapper_class'     => '',
		'class_name'        => '',
		'id'                => '',
		'title'             => '',
		'title_tag'         => 'div',
		'subtitle'          => '',
		'caption'           => '',
		'button_text'       => '',
		'button_url'        => '',
		'image_caption'     => '',
		'image_caption_url' => '',
		'img_src'           => '',
		'img_focal_point'   => '',
		'img_focal_point_x' => '', // for shortcode only
		'img_focal_point_y' => '', // for shortcode only
		'img_dimensions'    => '',
		'style'             => 'default',
		'vertical_spacing'  => 'default',
	);

	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'margin_before', 'prefix' => 'wsu-u-margin-before--'),
				array( 'key' => 'margin_after', 'prefix' => 'wsu-u-margin-after--'),
				array( 'key' => 'padding_before', 'prefix' => 'wsu-u-padding-before--'),
				array( 'key' => 'padding_after', 'prefix' => 'wsu-u-padding-after--'),
			),
			$atts,
			array( 'wsu-c-hero__wrapper', 'wsu-u-no-js', 'wsu-c-full-width' )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}