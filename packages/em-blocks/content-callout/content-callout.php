<?php namespace WSUWP\Plugin\Blocks;

class EM_Content_Callout extends Block_Base {

	protected static $prefix = 'wsuwp-em';
	protected static $slug = 'callout';
	protected static $default_atts = array(
		'wrapper_classes' => '',
		'class_name'      => '',
		'id'              => '',
		'image_src'       => '',
		'image_alt'       => '',
		'image_size'      => 'default',
		'shape'           => 'default',
		'style'           => 'default',
		'link'            => '',
		'eyebrow_header'  => '',
		'title'           => '',
		'description'     => '',
		'tag'             => 'h3',
		'layout'          => 'default',
		'vertical_align'  => 'default', 
		'is_notched'      => false,
		'button_text'     =>  '',
		'button_url'      =>  '',
		'margin_before'   => 'default',
		'margin_after'    => 'default',
		'padding_before'  => 'default',
		'padding_after'   => 'default',
		'border_color'    => 'default',
		'bleed_image'     => false,
		'title_size'      => 'default',
		'patterns'        => '', 
		'imgFocalPoint'   => ['x' => '0.5', 'y' => '0.5'],
	);


	protected static function render( $atts, $content ) {

		$base_class = ( 'default' != $atts['style'] ) ? 'wsu-c-em-callout--' . $atts['style'] : 'wsu-c-em-callout';

		$atts['wrapper_classes'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'margin_before', 'prefix' => 'wsu-u-margin-before--' ),
				array( 'key' => 'margin_after', 'prefix' => 'wsu-u-margin-after--' ),
				array( 'key' => 'padding_before', 'prefix' => 'wsu-u-padding-before--' ),
				array( 'key' => 'padding_after', 'prefix' => 'wsu-u-padding-after--' ),
				array( 'key' => 'shape', 'prefix' => 'wsu-c-image-frame--' ),
				array( 'key' => 'image_size', 'prefix' => 'wsu-c-em-callout__image-size--' ),
				array( 'key' => 'layout', 'prefix' => 'wsu-c-em-callout__layout--' ),
				array( 'key' => 'vertical_align', 'prefix' => 'wsu-c-em-callout__vertical-align--' ),
				array( 'key' => 'border_color', 'prefix' => 'wsu-c-em-callout__border-color--' ),
				array( 'key' => 'bleed_image', 'prefix' => 'wsu-c-em-callout--', 'value' => 'bleed-image', 'is_bool' => true ),
				array( 'key' => 'is_notched', 'prefix' => 'wsu-c-image-frame--', 'value' => 'notched', 'is_bool' => true ),
			),
			$atts,
			array( $base_class )
		);


		ob_start();

		if ( 'image-right' == $atts['layout'] ) {

			include __DIR__ . '/templates/image-right.php';

		} else {

			include __DIR__ . '/templates/default.php';

		}

		return ob_get_clean();

	}

}