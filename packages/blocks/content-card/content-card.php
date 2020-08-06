<?php namespace WSUWP\Plugin\Blocks;

class Content_Card extends Block_Base {

	protected static $slug = 'card';
	protected static $default_atts = array(
		'wrapper_class'     => '',
		'as_modal'          => false,
		'padding_before'    => 'default',
		'padding_after'     => 'default',
		'margin_before'     => 'default',
		'margin_after'      => 'default',
		'title'             => '',
		'title_tag'         => 'h3',
		'subtitle'          => '',
		'position_title'    => '',
  		'caption'           => '',
		'button_text'       => '',
		'button_url'        => '',
		'img_caption'     => '',
		'img_src'           => '',
		'img_focal_point'   => '',
		'img_focal_point_x' => '', // for shortcode only
		'img_focal_point_y' => '', // for shortcode only

	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name' => '',
				'margin_before'    => 'wsu-u-margin-before--',
				'margin_after'     => 'wsu-u-margin-after--',
				'padding_before'   => 'wsu-u-padding-before--',
				'padding_after'    => 'wsu-u-padding-after--',
			),
			$atts
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}