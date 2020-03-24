<?php namespace WSUWP\Plugin\Blocks;

class Block_Base {

	protected $slug = '';


	public function register() {

		register_block_type(
			$this->slug,
			array(
				'render_callback' => array( $this, 'render' ),
			)
		);

	}

	public function render( $atts, $content = '' ) {

		return '';

	}

}
