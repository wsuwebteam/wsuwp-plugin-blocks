<?php namespace WSUWP\Plugin\Blocks;

class Content_Typewriter extends Block_Base {

	protected static $slug = 'typewriter';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'style'          => 'default',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
	);


	protected static function render( $atts, $content ) {

		$base_class = ( 'default' !== $atts['style'] ) ? 'wsu-c-typewriter--' . $atts['style'] : 'wsu-c-typewriter';

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'       => '',
				'margin_before'    => 'wsu-u-margin-before--',
				'margin_after'     => 'wsu-u-margin-after--',
				'padding_before'   => 'wsu-u-padding-before--',
				'padding_after'    => 'wsu-u-padding-after--',
			),
			$atts,
			array( $base_class )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
