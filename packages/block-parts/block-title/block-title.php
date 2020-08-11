<?php namespace WSUWP\Plugin\Blocks;

class Block_Title extends Block_Part {

	protected static $default_atts = array(
		'title' => '',
		'tag' => 'h2',
		'link' => '',
		'prefix' => '',
		'title_size' => 'default',
	);


	protected static function render( $atts, $content ) {

		$prefix = ( $atts['prefix'] ) ? $atts['prefix'] : 'wsu-c-title';

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

		if ( ! empty( $atts['title'] ) ) {

			include __DIR__ . '/template.php';

		}
	}

}
