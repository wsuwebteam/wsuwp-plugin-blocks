<?php namespace WSUWP\Plugin\Blocks;

class Content_Heading extends Block_Base {

	protected $slug = 'heading';
	protected $default_atts = array(
		'class_name'      => '',
		'content'         => '',
		'level'           => 2,
		'style'           => 'default',
		'wrapper_class' => '',
	);


	protected function render( $atts, $content ) {

		$atts['wrapper_class'] = $this->get_classes(
			array(
				'class_name' => '',
				'style'      => 'wsu-c-heading--',
			),
			$atts
		);

		$content = ( ! empty( $atts['content'] ) ) ? $atts['content'] : '';

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}
