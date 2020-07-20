<?php namespace WSUWP\Plugin\Blocks;

class Legacy_Columns extends Block_Base {

	protected $slug = 'columns';
	protected $default_atts = array(
		'class_name'     => '',
		'wrapper_class'  => '',
		'format'         => '',
		'background_color' => 'default',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
	);

	public function register_block() {

		$columns = array(
			'single',
			'halves',
			'thirds',
			'quarters',
			'sidebar-right',
			'sidebar-left',
		);

		foreach ( $columns as $format ) {

			register_block_type(
				'wsuwp/columns-' . $format,
				array(
					'render_callback' => array( $this, 'render_block' ),
					'attributes' => array(
						'format' => array(
							'type' => 'string',
							'default' => $format,
						),
					),
				)
			);

		} // End foreach

	}


	protected function render( $atts, $content ) {

		$atts['wrapper_class'] = $this->get_classes(
			array(
				'class_name'       => '',
				'format'           => 'wsu-c-columns--',
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