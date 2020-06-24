<?php namespace WSUWP\Plugin\Blocks;

class Block_Base {

	protected $prefix = 'wsuwp';
	protected $slug = '';
	protected $default_atts = array();
	protected $as_block = true;
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

		if ( $this->as_block ) {

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

			$key = strtolower( implode( '_', $parts ) );

			$atts[ $key ] = $value;

		}

	}


	protected function parse_atts( &$atts, $to_snake_case = true ) {

		$temp_atts = array();

		if ( $to_snake_case ) {

			$this->to_snake_case( $atts );

		}

		// Check that each default is set
		foreach ( $this->default_atts as $key => $value ) {

			if ( ! in_array( $key, $atts, true ) ) {

				$atts[ $key ] = $value;

			}
		}

	}


	public function render_block( $atts, $content = '' ) {

		return '';

	}

	public function render_shortcode( $atts, $content = '', $tag ) {

		return '';

	}

	protected function render( $atts, $content ) {

		return '';

	}

}
