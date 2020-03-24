<?php namespace WSUWP\Plugin\Blocks;

class Dynamic_Block_Search_Bar extends Dynamic_Block {

	protected $slug = 'wsuwp/search-bar';


	public function render( $atts, $content = '' ) {

		ob_start();

		Components::render( 'search-bar', $atts, $content );

		return ob_get_clean();

	}

}
