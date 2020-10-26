<?php namespace WSUWP\Plugin\Blocks;

class EM_Content_Hero extends Block_Base {

	protected static $prefix = 'wsuwp-em';
	protected static $slug = 'hero';
	protected static $default_atts = array(
		'wrapper_class'        => '',
		'class_name'           => '',
		'id'                   => '',
		'title'                => '',
		'title_tag'            => 'div',
		'title_aria_label'     => '',
		'description'          => '',
		'background_image_url' => '',
		'padding_before'       => 'default',
		'padding_after'        => 'default',
		'margin_before'        => 'default',
		'margin_after'         => 'default',
	);

	protected static function render( $atts, $content ) {

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
			),
			$atts,
			array( 'wsu-c-em-hero__wrapper' )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}