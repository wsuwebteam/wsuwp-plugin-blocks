<?php namespace WSUWP\Plugin\Blocks;

class Core_Paragraph extends Block_Base {

	protected $slug = 'paragraph';
	protected $prefix = 'core';
	protected $default_atts = array(
		'class_name'        => '',
	);


	protected function render( $atts, $content ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}