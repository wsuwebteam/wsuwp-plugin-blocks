<?php namespace WSUWP\Plugin\Blocks;

class Block_Column {

	protected $slug = 'wsuwp/column';


	public function register() {

		register_block_type(
			$this->slug,
			array(
				'render_callback' => __CLASS__ . '::render',
			)
		);

	}

	public static function render( $atts, $content = '' ) {

		ob_start();

		Components::render( 'column', $atts, $content );

		return ob_get_clean();

	}

}
