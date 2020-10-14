<?php namespace WSUWP\Plugin\Blocks;

class EM_Content_Separator extends Block_Base {

	protected static $prefix = 'wsuwp-em';
	protected static $slug = 'separator';
	protected static $default_atts = array(
		'class_name'          => '',
		'wrapper_class'       => '',
		'is_hatched'          => false,
		'show_more_indicator' => false,
		'margin_before'       => 'default',
		'margin_after'        => 'default',
		'padding_before'      => 'default',
		'padding_after'       => 'default',
	);

	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'margin_before', 'prefix' => 'wsu-u-margin-before--'),
				array( 'key' => 'margin_after', 'prefix' => 'wsu-u-margin-after--'),
				array( 'key' => 'padding_before', 'prefix' => 'wsu-u-padding-before--'),
				array( 'key' => 'padding_after', 'prefix' => 'wsu-u-padding-after--'),
				array( 'key' => 'is_hatched', 'prefix' => 'wsu-c-em-separator--', 'is_bool' => true, 'value' => 'isHatched'),
				array( 'key' => 'show_more_indicator', 'prefix' => 'wsu-c-em-separator--', 'is_bool' => true, 'value' => 'showMoreIndicator'),
			),
			$atts,
			array( 'wsu-c-em-separator' )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}