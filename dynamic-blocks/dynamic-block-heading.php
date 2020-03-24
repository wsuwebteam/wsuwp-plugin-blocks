<?php namespace WSUWP\Plugin\Blocks;

class Dynamic_Block_Heading extends Dynamic_Block {

	protected $slug = 'wsuwp/heading';


	public function render( $atts, $content = '' ) {

		ob_start();

		Components::render( 'heading', $atts, $content );

		return ob_get_clean();

	}

}
