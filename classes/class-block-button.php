<?php namespace WSUWP\Plugin\Blocks;

class Block_Button extends Block_Base {

	protected $slug = 'wsuwp/button';


	public function render( $atts, $content = '' ) {

		ob_start();

		Components::render( 'button', $atts, $content );

		return ob_get_clean();

	}

}
