<?php namespace WSUWP\Plugin\Blocks;

class Content_Accordion extends Block_Base {

	protected static $slug = 'accordion';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'title'          => '',
		'tag'            => 'h2',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'       => '',
				'margin_before'    => 'wsu-u-margin-before--',
				'margin_after'     => 'wsu-u-margin-after--',
				'padding_before'   => 'wsu-u-padding-before--',
				'padding_after'    => 'wsu-u-padding-after--',
			),
			$atts,
			array( 'wsu-c-accordion' )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
