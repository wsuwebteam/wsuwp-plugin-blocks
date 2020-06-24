<?php namespace WSUWP\Plugin\Blocks;

class Utilities {

	public static function get_vertical_spacing_classes( $atts = array() ) {

		$classes = array();

		if ( ! empty( $atts['vertical_spacing'] ) && 'default' != $atts['vertical_spacing'] ) {
			$classes[] = 'wsu-u-space-vertical--' . $atts['vertical_spacing'];
		}

		return $classes;

	}

	public static function get_spacing_classes( $atts = array() ) {

		$classes = array();

		return $classes;

	}
}
