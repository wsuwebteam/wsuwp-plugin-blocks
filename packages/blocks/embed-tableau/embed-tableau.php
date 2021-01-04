<?php namespace WSUWP\Plugin\Blocks;

class Embed_Tableau extends Block_Base {

	protected static $slug = 'tableau';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'inline_style'   => '',
		'view_url'       => '',
	);


	protected static function render( $atts, $content ) {

		wp_enqueue_script(
			'tableau-js',
			'https://public.tableau.com/javascripts/api/tableau-2.min.js',
			array(),
			Plugin::get_plugin_version(),
			true
		);

		$atts['inline_style'] = static::get_inline_styles(
			array(
				array( 'key' => 'margin_top' ),
				array( 'key' => 'margin_bottom' ),
				array( 'key' => 'padding_top' ),
				array( 'key' => 'padding_bottom' ),
			),
			$atts['inline_style'],
			$atts
		);

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'       => '',
			),
			$atts,
			array( 'wsu-e-tableau' )
		);

		wp_enqueue_script( 'wsu-blocks-public-js' );

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
