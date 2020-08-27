<?php namespace WSUWP\Plugin\Blocks;

class Content_Post_Title extends Block_Base {

	protected static $slug = 'post-title';
	protected static $default_atts = array(
		'wrapper_class' => '',
		'class_name'    => '',
		'id'            => '',
		'title'         => '',
	);


	protected static function render( $atts, $content ) {

		if ( empty( $atts['title'] ) && is_singular() ) {

			$atts['title'] = get_the_title( get_the_ID() );

		}

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name' => '',
			),
			$atts
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}