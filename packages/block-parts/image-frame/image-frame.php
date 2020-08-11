<?php namespace WSUWP\Plugin\Blocks;

class Image_Frame extends Block_Part {

	protected static $default_atts = array(
		'style'       => 'default',
		'image_src'   => '',
		'image_alt'   => '',
		'image_size'  => 'default',
		'image_shape' => 'default',
		'link'        => '',
		'prefix'      => '',
		'wrapper_classes' => '',
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_classes'] = static::get_utility_classes(

			array(
				array(
					'key' => 'imageShape',
					'prefix' => 'wsu-c-image-frame--',
				),
				array(
					'key' => 'isNotched',
					'prefix' => 'wsu-c-image-frame--',
					'isBool' => true,
					'value' => 'notched',
				),
			),
			$atts,
			'wsu-c-image-frame'
		);

		if ( ! empty( $atts['image_src'] ) ) {

			include __DIR__ . '/template.php';

		}
	}

}