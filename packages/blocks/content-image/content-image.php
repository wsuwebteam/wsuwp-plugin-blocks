<?php namespace WSUWP\Plugin\Blocks;

class Content_Image extends Block_Base {

	protected static $slug = 'image';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
		'src'            => '',
		'alt'            => '',
		'attachment_id'  => null,
		'unit'           => '%',
		'width'          => '100',
		'alignment'      => '',
		'decorators'     => array(),
		'has_decorators' => false,
	);

	protected static function render( $atts, $content ) {

		// Class names don't like decimals :) 33.33 will become 33, 66.66 will become 66 so we can use class names correctly
		if (is_float($atts['width'])) {
			$atts['width'] = explode('.', $atts['width']);
			$atts['width'] = $atts['width'][0];
		}

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

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'       => '',
				'alignment'        => 'wsu-c-image__wrapper--',
				'width'            => 'wsu-c-image-width--',
			),
			$atts,
			array('wsu-c-image__wrapper')
		);

		ob_start();

		switch ( $atts['unit'] ) {
			case 'px':
				include __DIR__ . '/templates/static-width.php';
				break;
			default:
				include __DIR__ . '/templates/default.php';
				break;
		}

		return ob_get_clean();

	}

}
