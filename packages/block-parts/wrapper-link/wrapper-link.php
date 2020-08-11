<?php namespace WSUWP\Plugin\Blocks;

class Wrapper_Link extends Block_Part {

	protected static $default_atts = array(
		'href'            => '',
		'prefix'          => '',
		'wrapper_classes' => array(),
	);


	protected static function render( $atts, $content ) {


		if ( ! empty( $atts['href'] ) ) {

			$prefix = ( ! empty( $atts['prefix'] ) ) ? $atts['prefix'] : 'wsu-c-wrapper-link';

			$atts['wrapper_classes'] = static::get_utility_classes(

				array(
					array(
						'key' => 'title_size',
						'prefix' => 'wsu-c-title--',
					),
				),
				$atts,
				array( $prefix )
			);

			include __DIR__ . '/template.php';

		}
	}

}