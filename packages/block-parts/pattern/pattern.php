<?php namespace WSUWP\Plugin\Blocks;

class Pattern extends Block_Part {

	protected static $default_atts = array(
		'wrapper_classes' => '',
		'patterns'        => '',
		'name'            => 'angled-lines',
		'left'            => '0',
		'top'             => '0',
		'width'           => 'auto',
		'height'          => 'auto',
	);

	protected static function render( $atts, $content ) {

		if ( ! empty( $atts['patterns'] ) ) {

			$patterns  = explode( ' ', $atts['patterns'] );

			$prefix = ( ! empty( $atts['prefix'] ) ) ? $atts['prefix'] : 'wsu-c-pattern';

			foreach ( $patterns as $pattern ) {

				include __DIR__ . '/template.php';

			}
		}

	}

}