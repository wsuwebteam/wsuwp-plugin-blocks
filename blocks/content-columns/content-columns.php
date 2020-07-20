<?php namespace WSUWP\Plugin\Blocks;

class Content_Columns extends Block_Base {

	protected $slug = 'columns';
	protected $default_atts = array(
		'layout'            => 'single',
		'image_caption'     => '',
		'img_src'           => '',
		'img_focal_point'   => '',
		'img_focal_point_x' => '', // for shortcode only
		'img_focal_point_y' => '', // for shortcode only
		'img_dimensions'    => '',
		'vertical_spacing'  => 'default',
		'class_name'        => '',
		'background_color'  => '',
	);


	public function render_block( $atts, $content = '' ) {

		// parse_atts converts to snake case and fills in defaults
		$this->parse_atts( $atts );

		return $this->render( $atts, $content );

	}

	public function render_shortcode( $atts, $content = '', $tag ) {

		$atts = shortcode_atts( $this->default_atts, $atts, $tag );

		return $this->render( $atts, $content );

	}

	protected function render( $atts, $content ) {

		$atts['wrapper_classes'] = array_merge(
			array( 
				'wsu-c-column__wrapper', 
				$atts['class_name'],
				'wsu-c-columns--' . $atts['layout'],
			),
			Utilities::get_margin_spacing_classes( $atts ),
			Utilities::get_padding_spacing_classes( $atts ),
			Utilities::get_background_color_classes( $atts )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}