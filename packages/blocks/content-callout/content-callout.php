<?php namespace WSUWP\Plugin\Blocks;

class Content_Callout extends Block_Base {

	protected static $slug = 'callout';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'image_src'      => '',
		'image_alt'      => '',
		'image_size'     => 'default',
		'shape'          => 'default',
		'link'           => '',
		'title'          => '',
		'tag'            => 'h3',
		'layout'         => 'default',
		'vertical_align' => 'default', 
		'is_notched'     => false,
		'button_text'    => '',
		'button_url'     => '',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
		'imgFocalPoint'  => ['x' => '0.5', 'y' => '0.5'],
		'decorators'        => array(),
		'has_decorators'    => false,
	);


	protected static function render( $atts, $content ) {

		$atts['has_decorators'] = ( ! empty( $atts['decorators'] ) ) ? true : false;

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'margin_before', 'prefix' => 'wsu-u-margin-before--' ),
				array( 'key' => 'margin_after', 'prefix' => 'wsu-u-margin-after--' ),
				array( 'key' => 'padding_before', 'prefix' => 'wsu-u-padding-before--' ),
				array( 'key' => 'padding_after', 'prefix' => 'wsu-u-padding-after--' ),
				array( 'key' => 'shape', 'prefix' => 'wsu-c-callout__image--' ),
				array( 'key' => 'image_size', 'prefix' => 'wsu-c-callout__image--' ),
				array( 'key' => 'layout', 'prefix' => 'wsu-c-callout__layout--' ),
			),
			$atts,
			array( 'wsu-c-callout' )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
