<?php namespace WSUWP\Plugin\Blocks;

class Block_Post_Title extends Block_Base {

	protected $slug = 'wsuwp/post-title';


	public function render( $atts, $content = '' ) {

		$atts['title'] = get_the_title();

		ob_start();

		Components::render( 'post-title', $atts, $content );

		return ob_get_clean();

	}

}
