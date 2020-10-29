<?php namespace WSUWP\Plugin\Blocks;

class Content_Heading extends Block_Base {

	protected static $slug = 'heading';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'content'        => '',
		'level'          => 2,
		'style'          => 'default',
		'text_align'     => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'font_size'      => '',
		'font_weight'    => '',
		'indent'         => '',
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

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'style', 'prefix' => 'wsu-c-heading--' ),
				array( 'key' => 'text_align', 'prefix' => 'wsu-u-textalign--' ),
				array( 'key' => 'font_size', 'prefix' => 'wsu-u-font-size--' ),
				array( 'key' => 'font_weight', 'prefix' => 'wsu-u-font-weight--' ),
				array( 'key' => 'indent', 'prefix' => 'wsu-u-indent--' ),
			),
			$atts,
			array( 'wsu-c-column' )
		);

		$content = ( ! empty( $atts['content'] ) ) ? $atts['content'] : '';

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
