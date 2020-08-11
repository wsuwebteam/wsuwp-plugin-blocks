<?php namespace WSUWP\Plugin\Blocks;

class EM_Content_Callout extends Block_Base {

	protected static $slug = 'em-callout';
	protected static $default_atts = array(
		'class_name'     => '',
		'wrapper_class'  => '',
		'image_src'   => '',
		'image_alt'   => '',
		'image_size'   => 'default',
		'shape'   => 'default',
		'link'   => '',
		'title'   => '',
		'tag'   => 'h3',
		'layout'   => 'default',
		'vertical_align'   => 'default', 
		'is_notched'   => false,
		'button_text'   =>  '',
		'button_url'      =>  '',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				'class_name'       => '',
				'margin_before'    => 'wsu-u-margin-before--',
				'margin_after'     => 'wsu-u-margin-after--',
				'padding_before'   => 'wsu-u-padding-before--',
				'padding_after'    => 'wsu-u-padding-after--',
				'shape'            => 'wsu-c-em-callout__image--',
				'image_size'       => 'wsu-c-em-callout__image--',
				'layout'           => 'wsu-c-em-callout__layout--',
			),
			$atts,
			array( 'wsu-c-em-callout' )
		);


		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}