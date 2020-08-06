<?php namespace WSUWP\Plugin\Blocks;

class Content_Search_Bar extends Block_Base {

	protected static $slug = 'search-bar';
	protected static $default_atts = array();


	protected static function render( $atts, $content ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}