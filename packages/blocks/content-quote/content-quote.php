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

		$atts['inline_style'] = static::get_inline_styles(
			array(
				array( 'key' => 'margin_before', 'property' => 'margin-top', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'margin_after', 'property' => 'margin-bottom', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'padding_before', 'property' => 'padding-top', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
				array( 'key' => 'padding_after', 'property' => 'padding-bottom', 'is_att' => true, 'legacy_map' => Legacy::get( 'spacing_legacy_map' ) ),
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
