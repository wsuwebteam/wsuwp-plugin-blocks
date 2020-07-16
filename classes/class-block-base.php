<?php namespace WSUWP\Plugin\Blocks;

class Block_Base {

	protected $prefix = 'wsuwp';
	protected $slug = '';
	protected $default_atts = array();
	protected $register_block = true;
	protected $as_shortcode = false;


	public function get( $property ) {

		switch ( $property ) {

			case 'slug':
				return $this->slug;
			default:
				return '';
		}

	}


	public function register_block() {

		if ( $this->register_block ) {

			register_block_type(
				$this->prefix . '/' . $this->slug,
				array(
					'render_callback' => array( $this, 'render_block' ),
				)
			);

		}
	}


	public function register_shortcode() {

		if ( $this->as_shortcode ) {

			$slug = str_replace( '-', '_', $this->slug );

			add_shortcode( $slug, array( $this, 'render_shortcode' ) );

		}

	}


	protected function to_snake_case( &$atts ) {

		// Turn camelCase into snake_case
		foreach ( $atts as $key => $value ) {

			$parts = preg_split( '/(?=[A-Z])/', $key, -1, PREG_SPLIT_NO_EMPTY );

			unset( $atts[ $key ] );

			$snake_key = strtolower( implode( '_', $parts ) );

			$atts[ $snake_key ] = $value;

		}

	}


	protected function parse_atts( &$atts, $to_snake_case = true ) {

		if ( $to_snake_case ) {

			$this->to_snake_case( $atts );

		}

		// Check that each default is set
		foreach ( $this->default_atts as $key => $value ) {

			if ( ! array_key_exists( $key, $atts ) ) {

				$atts[ $key ] = $value;

			}
		}

	}


	public function render_block( $atts, $content = '' ) {

		// parse_atts converts to snake case and fills in defaults
		$this->parse_atts( $atts );

		return $this->render( $atts, $content );

	}

	public function render_shortcode( $atts, $content = '', $tag ) {

		$atts = shortcode_atts( $this->default_atts, $atts, $tag );

		return $this->render( $atts, $content );

	}

	protected function render( $atts, $content ) {

		return '';

	}


	protected function get_classes( $class_array, $atts, $add_classes = array() ) {

		$classes = $this->get_classes_array( $class_array, $atts );

		return implode( ' ', $classes );

	}


	protected function get_classes_array( $class_array, $atts, $add_classes = array() ) {

		$classes = array();

		foreach ( $class_array as $key => $class_prefix ) {

			if ( ! empty( $atts[ $key ] ) && 'default' !== $atts[ $key ] ) {

				$classes[] = $class_prefix . $atts[ $key ];

			}
		}

		if ( ! empty( $add_classes ) ) {

			if ( is_array( $add_classes ) ) {

				$classes = array_merge( $classes, $add_classes );

			} else {

				$classes[] = $add_classes;

			}
		}

		return $classes;
	}

}
