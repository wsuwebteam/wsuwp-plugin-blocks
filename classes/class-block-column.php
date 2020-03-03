<?php namespace WSUWP\Plugin\Blocks;

class Block_Column extends Block_Base {

	protected $slug = 'wsuwp/column';


	public function render( $atts, $content = '' ) {

		//var_dump( $content );

		ob_start();

		Components::render( 'column', $atts, $content );

		return ob_get_clean();

	}

}
