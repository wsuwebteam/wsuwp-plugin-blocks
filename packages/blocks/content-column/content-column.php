<?php namespace WSUWP\Plugin\Blocks;

class Content_Column extends Block_Base {

	protected static $slug = 'column';
	protected static $default_atts = array(
		'class_name'        => '',
		'id'                => '',
		'wrapper_class'     => '',
		'background_color'  => 'default',
		'background_image_src' => '',
		'background_image_alt' => '',
		'background_image_focal_point' => array(),
		'margin_before'     => 'default',
		'margin_after'      => 'default',
		'padding_before'    => 'default',
		'padding_after'     => 'default',
		'decorators'        => array(),
		'has_decorators'    => false,
		'inline_style'      => array(),
		'background_image_position' => '',
		'is_notched'        => false,
 	);


	protected static function render( $atts, $content ) {

		$atts['has_decorators'] = ( ! empty( $atts['decorators'] ) ) ? true : false;

		if ( ! empty( $atts['background_image_focal_point'] ) ) {

			$atts['inline_style']['background-position'] = ( 100 * $atts['background_image_focal_point']['x'] ) . '% ' . ( 100 * $atts['background_image_focal_point']['y'] ) . '%';

		}

		$atts['inline_style'] = static::get_inline_styles(
			array(
				array( 'key' => 'margin_before', 'property' => 'margin-top', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'margin_after', 'property' => 'margin-bottom', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'padding_before', 'property' => 'padding-top', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'padding_after', 'property' => 'padding-bottom', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'margin_top' ),
				array( 'key' => 'margin_bottom' ),
				array( 'key' => 'padding_top' ),
				array( 'key' => 'padding_bottom' ),
				array( 'key' => 'padding_left' ),
				array( 'key' => 'padding_right' ),
				array( 'key' => 'min_height' ),
				array( 'key' => 'background_image_src', 'property' => 'background-image', 'is_att' => true ),
				array( 'key' => 'background-position' ),
			),
			$atts['inline_style'],
			$atts
		);
		
		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'background_color', 'prefix' => 'wsu-u-background--' ),
				array( 'key' => 'has_decorators', 'prefix' => 'wsu-c-has-', 'is_bool' => true, 'value' => 'decorators' ),
				array( 'key' => 'is_notched', 'prefix' => 'wsu-u-', 'is_bool' => true, 'value' => 'is-notched' ),
			),
			$atts,
			array( 'wsu-c-column' )
		);


		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}