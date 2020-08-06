<?php namespace WSUWP\Plugin\Blocks;

class Block_Base {

	protected static $prefix = 'wsuwp';
	protected static $slug = '';
	protected static $default_atts = array();
	protected static $register_block = true;
	protected static $as_shortcode = true;


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

			add_shortcode( $slug, array( get_called_class(), 'render_shortcode' ) );

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

		if ( $to_snake_case ) {

			static::to_snake_case( $atts );

		}

		// Check that each default is set
		foreach ( static::$default_atts as $key => $value ) {

			if ( ! array_key_exists( $key, $atts ) ) {

				$atts[ $key ] = $value;

			}
		}

	}


	public static function render_block( $atts, $content = '' ) {

		// parse_atts converts to snake case and fills in defaults
		static::parse_atts( $atts );

		return static::render( $atts, $content );

	}

	public static function render_shortcode( $atts, $content = '', $tag ) {

		$atts = shortcode_atts( static::default_atts, $atts, $tag );

		return static::render( $atts, $content );

	}

	protected static function render( $atts, $content ) {

		return '';

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

}
