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

		$atts['wrapper_classes'] = static::get_utility_classes(
			array(
				array( 'key' => 'alignment', 'prefix' => 'wsu-c-', 'classSlug' => 'stat__wrapper' ),
				array( 'key' => 'is_dark', 'prefix' => 'wsu-c-', 'classSlug' => 'stat__wrapper', 'value' => 'is-dark', 'is_bool' => true ),
				array( 'key' => 'margin_before', 'prefix' => 'wsu-u-margin-before--' ),
				array( 'key' => 'margin_after', 'prefix' => 'wsu-u-margin-after--' ),
				array( 'key' => 'padding_before', 'prefix' => 'wsu-u-padding-before--' ),
				array( 'key' => 'padding_after', 'prefix' => 'wsu-u-padding-after--' ),
			),
			$atts,
			['wsu-c-stat__wrapper']
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}