<?php namespace WSUWP\Plugin\Blocks;

class Content_Heading extends Block_Base {

	protected static $slug = 'heading';
	protected static $default_atts = array(
		'wrapper_class'   => '',
		'class_name'      => '',
		'id'              => '',
		'content'         => '',
		'level'           => 2,
		'style'           => 'default',
		'text_align'      => 'default',
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name' => '',
				'style'      => 'wsu-c-heading--',
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
