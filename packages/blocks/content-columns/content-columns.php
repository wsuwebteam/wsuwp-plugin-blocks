<?php namespace WSUWP\Plugin\Blocks;

class Content_Columns extends Block_Base {

	protected static $slug = 'columns';
	protected static $default_atts = array(
		'class_name'        => '',
		'id'                => '',
		'wrapper_class'     => '',
		'layout'            => 'single',
		'image_caption'     => '',
		'img_src'           => '',
		'img_focal_point'   => '',
		'img_focal_point_x' => '', // for shortcode only
		'img_focal_point_y' => '', // for shortcode only
		'img_dimensions'    => '',
		'vertical_spacing'  => 'default',
		'class_name'        => '',
		'background_color'  => '',
		'padding_before'    => 'default',
		'padding_after'     => 'default',
		'margin_before'     => 'default',
		'margin_after'      => 'default',
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
			array( 'wsu-c-column__wrapper', 'wsu-c-columns--' . $atts['layout'] )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}