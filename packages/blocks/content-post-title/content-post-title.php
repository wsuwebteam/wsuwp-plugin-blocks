<?php namespace WSUWP\Plugin\Blocks;

class Content_Post_Title extends Block_Base {

	protected static $slug = 'post-title';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'title'          => '',
		'padding_before' => 'default',
		'padding_after'  => 'default',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
	);


	protected static function render( $atts, $content ) {

		if ( empty( $atts['title'] ) && is_singular() ) {

			$atts['title'] = get_the_title( get_the_ID() );

		}

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'     => '',
				'margin_before'  => 'wsu-u-margin-before--',
				'margin_after'   => 'wsu-u-margin-after--',
				'padding_before' => 'wsu-u-padding-before--',
				'padding_after'  => 'wsu-u-padding-after--',
			),
			$atts
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}