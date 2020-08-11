<?php namespace WSUWP\Plugin\Blocks;

class Block_Part {

	protected static $default_atts = array();

	public static function render_block( $atts = array(), $content = '', $echo = true ) {

		static::parse_atts( $atts );

		if ( ! $echo ) {

			ob_start();

			static::render( $atts, $content );

			return ob_get_clean();

		} else {

			static::render( $atts, $content );

		}
	}


	protected static function parse_atts( &$atts ) {

		foreach ( static::$default_atts as $key => $value ) {

			if ( ! array_key_exists( $key, $atts ) ) {

				$atts[ $key ] = $value;
			}
		}
	}

	/* 
	 * Returns a string/array of class name values based on an input of arrays. 
	 * 
	 * @param array $utility_classes Array of arrays containing utility classes to be outputted. Each class should be represented as an array using the following params
	 *       $params = [
	 *          'key' => (string) required | Define the key of the value you wish to return.
	 *          'prefix' => (string) optional (defaults to 'wsu-u-') | Define a custom prefix to override default `wsu-u-` prefix.
	 *          'is_bool' => (boolean) optional | Check if input value is a boolean.
	 *          'value' => (string) optional | Value to be used if type is boolean
	 *       ]
	 * @param string $classSlug Define a custom class slug to provide more specificity.
	 * @param array $atts Current atts defined by the class.
	 * @param array $add_classes Manually add class names.
	 * @param bool $as_string Define whether function returns string or array of values.
	 */
	protected static function get_utility_classes( $utility_classes, $atts, $add_classes = array(), $as_string = true ) {

		$classes = ( ! empty( $add_classes ) ) ? $add_classes : array();

		foreach ( $utility_classes as $utility_class ) {

			if ( ! empty( $utility_class['key'] ) ) {

				// Set base class prefix, accepts an empty string for no value.
				$prefix = ( ! empty( $utility_class['prefix'] ) ) ? $utility_class['prefix'] : 'wsu-u-';

				// Set the class slug. Not set will result in an empty string
				$prefix .= ( ! empty( $utility_class['classSlug'] ) ) ? $utility_class['classSlug'] . '--' : '';

				$key = $utility_class['key'];

				if ( ! empty( $atts[ $key ] ) ) {

					if ( ! empty( $utility_class['is_bool'] ) && $utility_class['value'] && $atts[ $key ] ) {

						$classes[] = $prefix . $utility_class['value'];

					} elseif ( 'default' !== $atts[ $key ] ) {

						$classes[] = $prefix . $atts[ $key ];

					}
				} elseif ( ! empty( $utility_class['default'] ) ) {

					$classes[] = $prefix . $utility_class['default'];

				}
			}
		}

		if ( $as_string ) {

			return implode( ' ', $classes );

		} else {
			return $classes;
		}

	}

}
