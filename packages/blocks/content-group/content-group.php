<?php namespace WSUWP\Plugin\Blocks;

class Content_Group extends Block_Base {

	protected static $slug = 'group';
	protected static $default_atts = array(
		'wrapper_class'       => '',
		'class_name'          => '',
		'id'                  => '',
		'full_width'          => false,
		'limit_content_width' => false,
		'background_color'    => '',
		'is_notched'          => false,
		'indent'              => '',
		'decorators'          => array(),
		'has_decorators'      => false,
		'inline_style'        => array(),
	);

	protected static function render( $atts, $content ) {

		$atts['has_decorators'] = ( ! empty( $atts['decorators'] ) ) ? true : false;

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
				array( 'key' => 'limit_content_width', 'prefix' => 'wsu-m-content-group--', 'is_bool' => true, 'value' => 'limit-content-width' ),
				array( 'key' => 'has_decorators', 'prefix' => 'wsu-c-has-', 'is_bool' => true, 'value' => 'decorators' ),
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