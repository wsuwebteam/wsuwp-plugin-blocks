<?php namespace WSUWP\Plugin\Blocks;

class Dynamic_Block_Post_Title extends Dynamic_Block {

	protected $slug = 'wsuwp/post-title';


	public function render( $atts, $content = '' ) {

		ob_start();

		Components::render( 'post-title', $atts, $content );

		return ob_get_clean();

	}

}
