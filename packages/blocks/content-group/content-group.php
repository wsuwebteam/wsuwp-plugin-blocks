<?php namespace WSUWP\Plugin\Blocks;

class Content_Group extends Block_Base {

	protected static $slug = 'group';
	protected static $default_atts = array(
		'wrapper_class'      => '',
		'class_name'         => '',
		'id'                 => '',
		'full_width'         => false,
		'content_full_width' => false,
		'background_color'   => '',
		'is_notched'         => false,
		'indent'             => '',
	);


	protected static function render( $atts, $content ) {

		if ( ! empty( $atts['content_full_width'] ) ) {

			$atts['full_width'] = true;

		}

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'background_color', 'prefix' => 'wsu-u-background--' ),
				array( 'key' => 'full_width', 'prefix' => 'wsu-u-bleed--', 'is_bool' => true, 'value' => 'full' ),
				array( 'key' => 'is_notched', 'prefix' => 'wsu-u-', 'is_bool' => true, 'value' => 'is-notched' ),
				array( 'key' => 'indent', 'prefix' => 'wsu-u-indent--' ),
				array( 'key' => 'max_width', 'prefix' => 'wsu-u-has-max-width', 'is_style' => true ),
			),
			$atts,
			array( 'wsu-c-group' )
		);

		$atts['inline_style'] = static::get_inline_styles(
			array(
				array( 'key' => 'margin_top' ),
				array( 'key' => 'margin_bottom' ),
				array( 'key' => 'padding_top' ),
				array( 'key' => 'padding_bottom' ),
				array( 'key' => 'padding_left' ),
				array( 'key' => 'padding_right' ),
				array( 'key' => 'max_width' ),
			),
			$atts['inline_style'],
			$atts
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}