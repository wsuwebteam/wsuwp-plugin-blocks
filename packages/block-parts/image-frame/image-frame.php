<?php namespace WSUWP\Plugin\Blocks;

class Image_Frame extends Block_Part {

	protected static $default_atts = array(
		'style'           => 'default',
		'image_src'       => '',
		'image_alt'       => '',
		'image_size'      => 'default',
		'image_shape'     => 'default',
		'link'            => '',
		'prefix'          => '',
		'wrapper_classes' => '',
		'patterns'        => '',
		'imgFocalPoint'   => ['x' => '0.5', 'y' => '0.5'],
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_classes'] = static::get_utility_classes(

			array(
				array(
					'key' => 'imageShape',
					'prefix' => 'wsu-c-image-frame--',
				),
				array(
					'key' => 'is_notched',
					'prefix' => 'wsu-c-image-frame--',
					'is_bool' => true,
					'value' => 'notched',
				),
			),
			$atts,
			array( 'wsu-c-image-frame' )
		);

		if ( ! empty( $atts['image_src'] ) ) {

			include __DIR__ . '/template.php';

		}
	}

}
