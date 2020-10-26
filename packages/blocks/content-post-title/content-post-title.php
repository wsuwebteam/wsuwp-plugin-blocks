<?php namespace WSUWP\Plugin\Blocks;

class Content_Post_Title extends Block_Base {

	protected static $slug = 'post-title';
	protected static $default_atts = array(
		'wrapper_class'     => '',
		'class_name'        => '',
		'id'                => '',
		'title'             => '',
		'subtitle'          => '',
		'author_name'       => '',
		'author_link'       => '',
		'publish_date'      => '',
		'show_byline'       => true,
		'hide_author'       => false,
		'hide_publish_date' => false,
		'padding_before'    => 'default',
		'padding_after'     => 'default',
		'margin_before'     => 'default',
		'margin_after'      => 'default',
	);


	protected static function render( $atts, $content ) {

		self::parse_block_atts( $atts );

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
				'class_name'     => '',
			),
			$atts,
			array( 'wsu-c-article-header' )
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}


	protected static function parse_block_atts( &$atts ) {

		// Get the post title dynamically
		if ( empty( $atts['title'] ) && is_singular() ) {

			$atts['title'] = get_the_title( get_the_ID() );

		}

		// If hide author then set author to empty string
		if ( $atts['hide_author'] ) {

			$atts['author_name'] = '';

		}

		// If hide publish date then set publish_date to empty string
		if ( $atts['hide_publish_date'] ) {

			$atts['publish_date'] = '';

		}

		// If both author and date are empty, don't render the byline html
		if ( empty( $atts['author_name'] ) && empty( $atts['publish_date'] ) ) {

			$atts['show_byline'] = false;

		}

	}

}