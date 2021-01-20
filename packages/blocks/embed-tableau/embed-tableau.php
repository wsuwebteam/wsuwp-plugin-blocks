<?php namespace WSUWP\Plugin\Blocks;

class Embed_Tableau extends Block_Base {

	protected static $slug = 'tableau';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'inline_style'   => '',
		'view_url'       => '',
		'height'         => '1000px',
		'width'          => '100%',
		'site_root'      => '',
		'name'           => '',
		'host_url'       => '',  
	);


	protected static function render( $atts, $content ) {

		self::escape_slashes( $atts );


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

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}


	protected static function escape_slashes( &$atts ) {

		$atts['name'] = str_replace( '/', '&#47;', $atts['name'] );
		$atts['site_root'] = str_replace( '/', '&#47;', $atts['site_root'] );
		$atts['host_url'] = str_replace( '/', '&#47;', trailingslashit( $atts['host_url'] ) );

	}

}
