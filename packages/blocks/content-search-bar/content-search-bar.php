<?php namespace WSUWP\Plugin\Blocks;

class Content_Search_Bar extends Block_Base {

	protected static $slug = 'search-bar';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
	);


	protected static function render( $atts, $content ) {
		
		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name' => '',
			),
			$atts
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}