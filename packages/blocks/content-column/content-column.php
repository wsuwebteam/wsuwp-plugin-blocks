<?php namespace WSUWP\Plugin\Blocks;

class Content_Column extends Block_Base {

	protected static $slug = 'column';
	protected static $default_atts = array(
		'class_name'        => '',
		'id'                => '',
		'wrapper_class'     => '',
		'background_color'  => 'default',
		'margin_before'     => 'default',
		'margin_after'      => 'default',
		'padding_before'    => 'default',
		'padding_after'     => 'default',
		'decorators'        => array(),
		'has_decorators'    => false,
 	);


	protected static function render( $atts, $content ) {


		$atts['has_decorators'] = ( ! empty( $atts['decorators'] ) ) ? true : false;


		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'background_color', 'prefix' => 'wsu-u-background--' ),
				array( 'key' => 'margin_before', 'prefix' => 'wsu-u-margin-before--' ),
				array( 'key' => 'margin_after', 'prefix' => 'wsu-u-margin-after--' ),
				array( 'key' => 'padding_before', 'prefix' => 'wsu-u-padding-before--' ),
				array( 'key' => 'padding_after', 'prefix' => 'wsu-u-padding-after--' ),
				array( 'key' => 'has_decorators', 'prefix' => 'wsu-c-has-', 'is_bool' => true, 'value' => 'decorators' ),
			),
			$atts,
			array( 'wsu-c-column' )
		);


		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}