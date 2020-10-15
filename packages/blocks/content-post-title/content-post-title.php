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

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'     => '',
				'margin_before'  => 'wsu-u-margin-before--',
				'margin_after'   => 'wsu-u-margin-after--',
				'padding_before' => 'wsu-u-padding-before--',
				'padding_after'  => 'wsu-u-padding-after--',
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