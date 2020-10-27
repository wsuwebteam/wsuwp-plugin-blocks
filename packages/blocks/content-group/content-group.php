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
	);


	protected static function render( $atts, $content ) {

		if ( ! empty( $atts['content_full_width'] ) ) {

			$atts['full_width'] = true;

		}

		$atts['inline_style'] = static::get_inline_styles(
			array(
				array( 'key' => 'margin_top' ),
				array( 'key' => 'margin_bottom' ),
				array( 'key' => 'padding_top' ),
				array( 'key' => 'padding_bottom' ),
			),
			$atts['inline_style'],
			$atts
		);

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'background_color', 'prefix' => 'wsu-u-background--' ),
				array( 'key' => 'full_width', 'prefix' => 'wsu-u-bleed--', 'is_bool' => true, 'value' => 'full' ),
			),
			$atts,
			array( 'wsu-c-group' )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}