<?php namespace WSUWP\Plugin\Blocks;

class Dynamic_Block_Column extends Dynamic_Block {

	protected $slug = 'wsuwp/column';


	public function render( $atts, $content = '' ) {

		//var_dump( $content );

		ob_start();

		Components::render( 'column', $atts, $content );

		return ob_get_clean();

	}

}
