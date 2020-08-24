<?php namespace WSUWP\Plugin\Blocks;

class Icon extends Block_Part {

	protected static $default_atts = array(
		'name' => '',
	);


	protected static function render( $atts, $content ) {

		if ( ! empty( $atts['name'] ) ) {

			include __DIR__ . '/template.php';

		}
	}

}
