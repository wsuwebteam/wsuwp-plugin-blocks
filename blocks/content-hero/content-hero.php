<?php namespace WSUWP\Plugin\Blocks;

class Content_Hero extends Block_Base {

	protected $slug = 'content-hero';
	protected $default_atts = array(
		'title'             => '',
		'title_tag'         => 'div',
		'subtitle'          => '',
		'caption'           => '',
		'button_text'       => '',
		'button_url'        => '',
		'image_caption'     => '',
		'image_caption_url' => '',
		'img_src'           => '',
		'img_focal_point'   => '',
		'img_focal_point_x' => '', // for shortcode only
		'img_focal_point_y' => '', // for shortcode only
		'img_dimensions'    => '',
		'style'             => 'default',
		'vertical_spacing'  => 'default',
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
			array( 'wsu-c-hero__wrapper', 'wsu-u-no-js', 'wsu-c-full-width' )
		);

		$atts['container_classes'] = array_merge(
			array( 'wsu-c-hero__container' ),
			Utilities::get_vertical_spacing_classes( $atts )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}