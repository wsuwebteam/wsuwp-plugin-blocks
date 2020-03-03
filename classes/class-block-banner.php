<?php namespace WSUWP\Plugin\Blocks;

class Block_Banner extends Block_Base {

	protected $slug = 'wsuwp/banner';


	public function render( $atts, $content = '' ) {

		ob_start();

		Components::render( 'banner', $atts, $content );

		return ob_get_clean();

	}

}
