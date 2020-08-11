<?php namespace WSUWP\Plugin\Blocks;

class Pattern extends Block_Part {

	protected static $default_atts = array(
		'wrapper_classes' => '',
		'class_name'      => '',
		'name'            => 'angled-lines',
		'left'            => '0',
		'top'             => '0',
		'width'           => 'auto',
		'height'          => 'auto',
	);

	protected static function render( $atts, $content ) {

		$classes  = explode( ' ', $atts['class_name'] );

		$prefix = ( ! empty( $atts['prefix'] ) ) ? $atts['prefix'] : 'wsu-c-pattern';

		foreach ( $classes as $class ) {

			if ( false != strpos( $class, 'wsu-c-pattern--') ) {

				include __DIR__ . '/template.php';

			}

		}

	}

}