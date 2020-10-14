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

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'margin_before', 'prefix' => 'wsu-u-margin-before--'),
				array( 'key' => 'margin_after', 'prefix' => 'wsu-u-margin-after--'),
				array( 'key' => 'padding_before', 'prefix' => 'wsu-u-padding-before--'),
				array( 'key' => 'padding_after', 'prefix' => 'wsu-u-padding-after--'),
			),
			$atts,
			array( 'wsu-c-em-hero__wrapper' )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}