<?php namespace WSUWP\Plugin\Blocks;

class Content_Hero extends Block_Base {

	protected static $slug = 'content-hero';
	protected static $default_atts = array(
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

		$atts['wrapper_classes'] = array_merge(
			array( 'wsu-c-hero__wrapper', 'wsu-u-no-js', 'wsu-c-full-width' ),
			Utilities::get_margin_spacing_classes( $atts )
		);

		$atts['container_classes'] = array_merge(
			array( 'wsu-c-hero__container' ),
			Utilities::get_vertical_spacing_classes( $atts )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}