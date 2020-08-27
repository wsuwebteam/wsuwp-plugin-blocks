<?php namespace WSUWP\Plugin\Blocks;

class Legacy_Columns extends Block_Base {

	protected static $slug = 'columns';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'format'         => '',
		'background_color' => 'default',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
	);

	public static function register_block() {

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
					'render_callback' => array( __CLASS__, 'render_block' ),
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


	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_classes(
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