<?php namespace WSUWP\Plugin\Blocks;

class Utilities {

	public static function get_vertical_spacing_classes( $atts = array() ) {

		$classes = array();

		if ( ! empty( $atts['vertical_spacing'] ) && 'default' != $atts['vertical_spacing'] ) {
			$classes[] = 'wsu-u-space-vertical--' . $atts['vertical_spacing'];
		}

		return $classes;

	}


	public static function get_margin_spacing_classes( $atts = array() ) {

		$properties = array(
			'margin_before' => 'margin-before',
			'margin_after' => 'margin-after',
			'margin_left' => 'margin-left',
			'margin_right' => 'margin-right',
		);

		return self::get_utility_classes( $properties, $atts );

	}

	public static function get_padding_spacing_classes( $atts = array() ) {

		$properties = array(
			'padding_before' => 'padding-before',
			'padding_after' => 'padding-after',
			'padding_left' => 'padding-left',
			'padding_right' => 'padding-right',
		);

		return self::get_utility_classes( $properties, $atts );

	}

	public static function get_background_color_classes( $atts ) {
		$properties = array(
			'background_color' => 'background',
		);

		return self::get_utility_classes( $properties, $atts );
	}

	public static function get_utility_classes( $class_array = array(), $atts = array() ) {

		$classes = array();

		foreach ( $class_array as $key => $utility_class ) {

			if ( ! empty( $atts[ $key ] ) && 'default' != $atts[ $key ] ) {
				$classes[] = 'wsu-u-' . $utility_class . '--' . $atts[ $key ];
			}
		}

		return $classes;

	}

}
