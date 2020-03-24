<?php namespace WSUWP\Plugin\Blocks;

class Dynamic_Block_Banner extends Dynamic_Block {

	protected $slug = 'wsuwp/banner';


	public function render( $atts, $content = '' ) {

		ob_start();

		Components::render( 'banner', $atts, $content );

		return ob_get_clean();

	}

}
