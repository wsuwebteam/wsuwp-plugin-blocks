<?php namespace WSUWP\Plugin\Blocks;

class Content_Button extends Block_Base {

	protected $slug = 'button';
	protected $default_atts = array(
		'class_name'     => '',
		'button_text'    => '',
		'button_url'     => '',
		'shape'          => 'default',
		'color'          => 'default',
		'size'           => 'default',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
		'wrapper_class'  => '',
		'button_class'   => '',
	);


	protected function render( $atts, $content ) {

		$atts['wrapper_class'] = $this->get_classes(
			array(
				'class_name' => '',
				'background_color' => 'wsu-u-background--',
				'margin_before'    => 'wsu-u-margin-before--',
				'margin_after'     => 'wsu-u-margin-after--',
				'padding_before'   => 'wsu-u-padding-before--',
				'padding_after'    => 'wsu-u-padding-after--',
			),
			$atts
		);

		$atts['button_class'] = $this->get_classes(
			array(
				'style'      => 'wsu-c-heading--',
				'shape'      => 'wsu-c-button--',
				'color'      => 'wsu-c-button--',
				'size'       => 'wsu-c-button--',
			),
			$atts,
			$atts['class_name']
		);

		$content = ( ! empty( $content ) ) ? $content : $atts['button_text'];

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
