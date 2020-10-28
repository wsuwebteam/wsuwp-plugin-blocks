<?php namespace WSUWP\Plugin\Blocks;

class Block_Base {

	protected static $prefix = 'wsuwp';
	protected static $slug = '';
	protected static $default_atts = array();
	protected static $register_block = true;
	protected static $as_shortcode = true;
	protected static $global_atts = array(
		'inline_style' => array(),
	);

	public static function get( $property ) {

		switch ( $property ) {

			case 'slug':
				return static::$slug;
			default:
				return '';
		}

	}


	public static function register_block() {

		if ( static::$register_block ) {

			register_block_type(
				static::$prefix . '/' . static::$slug,
				array(
					'render_callback' => array( get_called_class(), 'render_block' ),
				)
			);

		}

	}


	public static function register_shortcode() {

		if ( static::$as_shortcode ) {

			$slug = str_replace( '-', '_', static::$slug );
			$prefix = str_replace( '-', '_', static::$prefix );

			$shortcode_slug = $prefix . '_' . $slug;

			add_shortcode( $shortcode_slug, array( get_called_class(), 'render_shortcode' ) );

		}

	}


	protected static function to_snake_case( &$atts ) {

		// Turn camelCase into snake_case
		foreach ( $atts as $key => $value ) {

			$parts = preg_split( '/(?=[A-Z])/', $key, -1, PREG_SPLIT_NO_EMPTY );

			unset( $atts[ $key ] );

			$snake_key = strtolower( implode( '_', $parts ) );

			$atts[ $snake_key ] = $value;

		}

	}


	protected static function parse_atts( &$atts, $to_snake_case = true ) {

		if ( is_object( $atts ) ) {

			$atts = ( array ) $atts;

		}

		if ( $to_snake_case ) {

			static::to_snake_case( $atts );

		}

		// Check that each default is set
		foreach ( static::$default_atts as $key => $value ) {

			if ( ! array_key_exists( $key, $atts ) ) {

				$atts[ $key ] = $value;

			}
		}

		// Check that each default is set
		foreach ( static::$global_atts as $key => $value ) {

			if ( ! array_key_exists( $key, $atts ) ) {

				$atts[ $key ] = $value;

			}
		}


	}


	public static function render_block( $atts, $content = '' ) {

		// parse_atts converts to snake case and fills in defaults
		static::parse_atts( $atts );

		if ( ! empty( $atts['inline_style'] ) ) {

			static::to_snake_case( $atts['inline_style'] );

		}

		return static::render( $atts, $content );

	}

	public static function render_shortcode( $atts, $content = '', $tag ) {

		$atts = shortcode_atts( static::$default_atts, $atts, $tag );

		return static::render( $atts, $content );

	}

	protected static function render( $atts, $content ) {

		return '';

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
				$prefix = ( isset( $utility_class['prefix'] ) ) ? $utility_class['prefix'] : 'wsu-u-';

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


	protected static function get_classes( $class_array, $atts, $add_classes = array() ) {

		$classes = static::get_classes_array( $class_array, $atts, $add_classes );

		return implode( ' ', $classes );

	}


	protected static function get_classes_array( $class_array, $atts, $add_classes = array() ) {

		$classes = array();

		foreach ( $class_array as $key => $class_prefix ) {

			if ( ! empty( $atts[ $key ] ) && 'default' !== $atts[ $key ] ) {

				$classes[] = $class_prefix . $atts[ $key ];

			}
		}

		if ( ! empty( $add_classes ) ) {

			if ( is_array( $add_classes ) ) {

				$classes = array_merge( $add_classes, $classes  );

			} else {

				$classes[] = $add_classes;

			}
		}

		return $classes;
	}


	protected static function get_inline_styles( $style_map, $style_atts, $atts = array(), $as_array = false ) {

		$inline_style_array = array();

		$empty_values = array( false, true, '', 'default' );

		foreach ( $style_map as $style ) {

			$key      = ( ! empty( $style['key'] ) ) ? $style['key'] : false;
			$property = ( ! empty( $style['property'] ) ) ? $style['property'] : str_replace( '_', '-', $key );
			$value = 'default';
			$legacy_map = ( ! empty( $style['legacy_map'] ) && is_array( $style['legacy_map'] ) ) ? $style['legacy_map'] : array();
			$is_att = ( ! empty( $style['is_att'] ) ) ? true : false;
			$style_values = ( $is_att ) ? $atts : $style_atts;


			if ( ! empty( $key ) ) {
				
				if ( ! empty( $style['is_bool'] ) ) {

					if ( ! empty( $style_values[ $key ] ) ) {

						$value = $style['value'];

					}
				} else {

					if ( isset( $style_values[ $key ] ) ) {

						$value = $style_values[ $key ];

					}
				}

				if ( ! empty( $legacy_map ) && isset( $legacy_map[ $value ] ) ) {

					$value = $legacy_map[ $value ];

				}

				if ( ! in_array( $value, $empty_values, true ) ) {

					switch ( $property ) {

						case 'background-image':
							$value = 'url(' . $value . ')';
							break;
					}

					$inline_style_array[ $property ] = $value;

				}
			}
		}

		if ( $as_array ) {

			return $inline_style_array;

		} else {

			$inline_style = '';

			foreach ( $inline_style_array as $css_property => $css_value ) {

				$inline_style .=  $css_property . ':' . $css_value . ';';

			}

			return $inline_style;

		}

	}

}
