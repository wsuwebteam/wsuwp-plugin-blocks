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

		$atts['inline_style'] = static::get_inline_styles(
			array(
				array( 'key' => 'margin_before', 'property' => 'margin-top', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'margin_after', 'property' => 'margin-bottom', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'padding_before', 'property' => 'padding-top', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'padding_after', 'property' => 'padding-bottom', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'margin_top' ),
				array( 'key' => 'margin_bottom' ),
				array( 'key' => 'padding_top' ),
				array( 'key' => 'padding_bottom' ),
			),
			$atts['inline_style'],
			$atts
		);

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
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
