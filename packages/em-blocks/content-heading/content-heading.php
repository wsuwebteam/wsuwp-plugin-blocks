<?php namespace WSUWP\Plugin\Blocks;

class EM_Content_Heading extends Block_Base {

	protected static $prefix = 'wsuwp-em';
	protected static $slug = 'heading';
	protected static $default_atts = array(
		'class_name'      => '',
		'content'         => '',
		'level'           => 2,
		'style'           => 'default',
		'text_align'      => 'default',
		'wrapper_class'   => '',
		'id'              => '',
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				'class_name' => '',
				'style'      => 'wsu-c-em-heading--',
				'text_align' => 'wsu-u-textalign--',
			),
			$atts
		);

		$content = ( ! empty( $atts['content'] ) ) ? $atts['content'] : '';

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}