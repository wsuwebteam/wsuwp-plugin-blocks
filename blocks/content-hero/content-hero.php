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

		ob_start();

		echo 'Hello World';

		return ob_get_clean();

	}

}