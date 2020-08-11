<?php namespace WSUWP\Plugin\Blocks;

class EM_Content_Stat extends Block_Base {

	protected static $slug = 'em-stat';
	protected static $default_atts = array(
    );

	protected static function render( $atts, $content ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}