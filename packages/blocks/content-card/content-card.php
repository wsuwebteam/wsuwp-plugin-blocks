<?php namespace WSUWP\Plugin\Blocks;

class Content_Card extends Block_Base {

	protected static $slug = 'card';
	protected static $default_atts = array(
		'wrapper_class'     => '',
		'class_name'        => '',
		'id'                => '',
		'as_modal'          => false,
		'padding_before'    => 'default',
		'padding_after'     => 'default',
		'margin_before'     => 'default',
		'margin_after'      => 'default',
		'button_text'       => '',
		'button_url'        => '',
		'img_src'           => '',
		'img_caption'       => '',
		'img_focal_point'   => '',
		'img_focal_point_x' => '', // for shortcode only
		'img_focal_point_y' => '', // for shortcode only
		'title'             => '',
		'subtitle'          => '',
		'position_title'    => '',
		'description'       => '',
		'address_line1'     => '',
		'address_line2'     => '',
		'phone_number'      => '',
		'email'             => '',
		'website'           => '',
		'date'              => '',
		'author_name'       => '',
		'author_url'        => '',
		'card_type'         => 'default',
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'     => '',
				'margin_before'  => 'wsu-u-margin-before--',
				'margin_after'   => 'wsu-u-margin-after--',
				'padding_before' => 'wsu-u-padding-before--',
				'padding_after'  => 'wsu-u-padding-after--',
			),
			$atts
		);

		ob_start();

		switch ($atts['card_type']) {
			case 'person':
				include __DIR__ . '/templates/person.php';
			case 'news':
				include __DIR__ . '/templates/news.php';
			default:
				include __DIR__ . '/templates/default.php';
		}

		return ob_get_clean();

	}

	protected static function show_card_footer($atts) {
		if (!empty( $atts['date'] ) || !empty( $atts['author_name'] ) || !empty( $atts['author_url'] )) {
			return true;
		}

		return false;
	}

}