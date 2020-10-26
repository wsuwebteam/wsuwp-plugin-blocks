<?php namespace WSUWP\Plugin\Blocks;

class Content_Page_Banner extends Block_Base {

	protected static $slug = 'page-banner';
	protected static $default_atts = array(
		'wrapper_class'   => '',
		'class_name'      => '',
		'id'              => '',
		'image_src'       => '',
		'image_alt'       => '',
		'image_size'      => 'default',
		'image_caption'   => '',
		'img_focal_point' => null,
		'img_dimensions'  => null,
		'is_notched'      => false,
		'is_full_bleed'   => false,
		'margin_before'   => 'default',
		'margin_after'    => 'default',
		'padding_before'  => 'default',
		'padding_after'   => 'default',
		'title'           => '',
		'eyebrow_header'  => '',
		'overlay'         => 'default',
		'text_align'      => 'default',
		'title_tag'       => 'h2',
		'decorators'        => array(),
		'has_decorators'    => false,
	);


	protected static function render( $atts, $content ) {

		$atts['has_decorators'] = ( ! empty( $atts['decorators'] ) ) ? true : false;

		$atts['overlay'] = ( ! empty( $atts['title'] ) && 'default' == $atts['overlay'] ) ? 'gray' : 'default';

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
				array( 'key' => 'textAlign', 'classSlug' => 'textalign' ),
				array( 'key' => 'height', 'prefix' => 'wsu-c-page-banner__image--' ),
				array( 'key' => 'overlay', 'prefix' => 'wsu-c-page-banner__overlay--' ),
				array( 'key' => 'is_full_bleed', 'prefix' => 'wsu-c-page-banner--', 'is_bool' => true, 'value' => 'full-bleed' ),
				array( 'key' => 'has_decorators', 'prefix' => 'wsu-c-has-', 'is_bool' => true, 'value' => 'decorators' ),
			),
			$atts,
			array( 'wsu-c-page-banner' )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
