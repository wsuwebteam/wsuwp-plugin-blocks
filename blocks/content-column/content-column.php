<?php namespace WSUWP\Plugin\Blocks;

class Content_Column extends Block_Base {

	protected $slug = 'column';
	protected $default_atts = array(
		'class_name'       => '',
		'background_color' => 'default',
		'margin_before'    => 'default',
		'margin_after'     => 'default',
		'padding_before'   => 'default',
		'padding_after'    => 'default',
		'wrapper_class'    => '',
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

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}