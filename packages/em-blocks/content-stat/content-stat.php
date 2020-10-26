<?php namespace WSUWP\Plugin\Blocks;

class EM_Content_Stat extends Block_Base {

	protected static $prefix = 'wsuwp-em';
	protected static $slug = 'stat';
	protected static $default_atts = array(
		'wrapper_classes' => '',
		'value'           => 0,
		'label'           => '',
		'description'     => '',
		'prefix'          => '',
		'suffix'          => '',
		'separator'       => ',',
		'duration'        => 1.5,
		'alignment'       => 'default',
		'is_dark'         => false,
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

		$atts['wrapper_classes'] = static::get_utility_classes(
			array(
				array( 'key' => 'alignment', 'prefix' => 'wsu-c-', 'classSlug' => 'stat__wrapper' ),
				array( 'key' => 'is_dark', 'prefix' => 'wsu-c-', 'classSlug' => 'stat__wrapper', 'value' => 'is-dark', 'is_bool' => true ),
			),
			$atts,
			['wsu-c-stat__wrapper']
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}