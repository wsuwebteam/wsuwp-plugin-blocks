<?php namespace WSUWP\Plugin\Blocks;

class Content_Button extends Block_Base {

	protected static $slug = 'button';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'button_text'    => '',
		'button_url'     => '',
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

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'       => '',
				'background_color' => 'wsu-u-background--',
				'margin_before'    => 'wsu-u-margin-before--',
				'margin_after'     => 'wsu-u-margin-after--',
				'padding_before'   => 'wsu-u-padding-before--',
				'padding_after'    => 'wsu-u-padding-after--',
				'button_align'     => 'wsu-u-textalign--',
			),
			$atts,
			array('wsu-c-button__wrapper')
		);

		$atts['button_class'] = static::get_classes(
			array(
				'style'      => 'wsu-c-heading--',
				'shape'      => 'wsu-c-button--',
				'color'      => 'wsu-c-button--',
				'size'       => 'wsu-c-button--',
			),
			$atts,
			array('wsu-c-button')
		);

		$content = ( ! empty( $content ) ) ? $content : $atts['button_text'];

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
