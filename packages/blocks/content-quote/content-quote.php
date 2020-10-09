<?php namespace WSUWP\Plugin\Blocks;

class Content_Quote extends Block_Base {

	protected static $slug = 'quote';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'name'           => '',
		'title'          => '',
		'cite'           => '',
		'cite_url'       => '',
		'text_size'      => 'default',
		'width'          => 'default',
		'cite_align'     => 'default',
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
				'text_size'        => 'wsu-c-blockquote--text-size-',
				'width'            => 'wsu-c-blockquote--width-',

			),
			$atts,
			array( 'wsu-c-blockquote' )
		);

		$atts['footer_class'] = static::get_classes(
			array(
				'cite_align' => 'wsu-c-blockquote__footer--align-',
			),
			$atts,
			array( 'wsu-c-blockquote__footer' )
		);


		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
