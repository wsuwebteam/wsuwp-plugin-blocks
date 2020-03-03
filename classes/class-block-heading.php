<?php namespace WSUWP\Plugin\Blocks;

class Block_Heading extends Block_Base {

	protected $slug = 'core/heading';


	public function render( $atts, $content = '' ) {

		ob_start();

		Components::render( 'heading', $atts, $content );

		return ob_get_clean();

	}

}
