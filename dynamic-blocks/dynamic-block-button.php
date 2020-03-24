<?php namespace WSUWP\Plugin\Blocks;

class Dynamic_Block_Button extends Dynamic_Block {

	protected $slug = 'wsuwp/button';


	public function render( $atts, $content = '' ) {

		ob_start();

		Components::render( 'button', $atts, $content );

		return ob_get_clean();

	}

}
