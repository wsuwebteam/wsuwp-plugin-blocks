<?php namespace WSUWP\Plugin\Blocks;

class Core_Paragraph extends Block_Base {

	protected static $slug = 'paragraph';
	protected static $prefix = 'core';
	protected static $default_atts = array(
		'class_name'        => '',
	);


	protected static function render( $atts, $content ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}