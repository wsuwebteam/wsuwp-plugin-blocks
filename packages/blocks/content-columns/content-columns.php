<?php namespace WSUWP\Plugin\Blocks;

class Content_Columns extends Block_Base {

	protected static $slug = 'columns';
	protected static $default_atts = array(
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
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_classes'] = array_merge(
			array( 
				'wsu-c-column__wrapper', 
				'margin_before' => 'wsu-u-margin-before--',
				'margin_after' => 'wsu-u-margin-after--',
				'padding_before' => 'wsu-u-padding-before--',
				'padding_after' => 'wsu-u-padding-after--',
				$atts['class_name'],
				'wsu-c-columns--' . $atts['layout'],
			),
			Utilities::get_margin_spacing_classes( $atts ),
			Utilities::get_padding_spacing_classes( $atts ),
			Utilities::get_background_color_classes( $atts )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}