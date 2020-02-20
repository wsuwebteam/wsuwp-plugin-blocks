<?php namespace WSUWP\Plugin\Blocks;

class Block_Columns {

	protected $slug = 'wsuwp/columns';


	public function register() {

		register_block_type(
			$this->slug,
			array(
				'render_callback' => __CLASS__ . '::render',
			)
		);

	}

	public static function render( $atts, $content = '' ) {

		Components::render( 'columns', $atts, $content );

	}

}
