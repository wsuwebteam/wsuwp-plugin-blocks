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
		'image_src'           => '',
		'image_alt'           => '',
		'image_focal_point'   => '',
		'image_focal_point_x' => '', // for shortcode only
		'image_focal_point_y' => '', // for shortcode only
		'title'             => '',
		'link'              => '',
		'subtitle'          => '',
		'position_title'    => '',
		'caption'           => '',
		'address_line1'     => '',
		'address_line2'     => '',
		'phone_number'      => '',
		'email'             => '',
		'website'           => '',
		'date'              => '',
		'author_name'       => '',
		'author_link'       => '',
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
				break;
			case 'news':
				include __DIR__ . '/templates/news.php';
				break;
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