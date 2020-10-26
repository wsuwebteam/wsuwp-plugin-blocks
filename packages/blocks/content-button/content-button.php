<?php namespace WSUWP\Plugin\Blocks;

class Content_Button extends Block_Base {

	protected static $slug = 'button';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'button_text'    => '',
		'button_url'     => '',
		'style'          => 'default',
		'shape'          => 'default',
		'color'          => 'default',
		'size'           => 'default',
		'button_align'   => 'default',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
		'button_class'   => '',
		'icon_before'    => '',
		'icon_after'     => '',
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
				'background_color' => 'wsu-u-background--',
				'button_align'     => 'wsu-u-textalign--',
			),
			$atts,
			array( 'wsu-c-button__wrapper' )
		);

		$base_class = ( 'link' === $atts['style'] ) ? 'wsu-c-button--' . $atts['style'] : 'wsu-c-button';

		$atts['button_class'] = static::get_classes(
			array(
				'shape' => 'wsu-c-button--',
				'color' => 'wsu-c-button--',
				'size'  => 'wsu-c-button--',
			),
			$atts,
			array( $base_class )
		);

		$content = ( ! empty( $content ) ) ? $content : $atts['button_text'];

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
