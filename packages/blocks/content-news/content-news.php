<?php namespace WSUWP\Plugin\Blocks;

class Content_News extends Block_Base {

	protected static $slug = 'news';
	protected static $default_atts = array(
		'wrapper_class'  	=> '',
		'class_name'     	=> '',
		'id'             	=> '',
		'type'           	=> 'default',
		'title_tag'      	=> 'h3',
		'source'         	=> 'insert',
		'margin_before'  	=> 'default',
		'margin_after'   	=> 'default',
		'padding_before' 	=> 'default',
		'padding_after'  	=> 'default',
		'items_per_row'  	=> 3,
		'feed_source'       => array(),
		'wrapper_tag'       => 'div',
	);


	protected static function render( $atts, $content ) {

		$supports_rows = array( 'card' );

		$atts['items_per_row'] = ( in_array( $atts['type'], $supports_rows, true ) ) ? $atts['items_per_row'] : '';

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

		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'class_name', 'prefix' => '' ),
				array( 'key' => 'items_per_row', 'prefix' => 'wsu-c-news--per-row-' ),
			),
			$atts,
			array( 'wsu-c-news__wrapper' )
		);

		ob_start();

		$content = ( 'insert' === $atts['source'] ) ? $content : self::get_feed_content( $atts, $content );

		if ( 'list' === $atts['type'] ) {

			$atts['wrapper_tag'] = 'ul';

		}

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}


	protected static function get_feed_content( $atts, $content ) {

		switch ( $atts['source'] ) {

			case 'feed_remote':
				$posts = self::get_rest_posts( $atts );
				break;
			case 'feed':
				$posts = self::get_feed_posts( $atts );
				break;
			default:
				$posts = array();

		}

		foreach ( $posts as $post ) {

			switch ( $atts['type'] ) {

				case 'card':
					$content .= Content_Card::render_block(
						array(
							'title'       => $post->get( 'title' ),
							'image_src'   => $post->get( 'image_src' ),
							'image_alt'   => $post->get( 'image_alt' ),
							'caption'     => $post->get( 'excerpt' ),
							'class_name'  => 'wsu-c-news__item',
							'card_type'   => 'news',
							'date'        => $post->get( 'publish_date' ),
							'link'        => $post->get( 'link' ),
							'author_name' => $post->get( 'author_name' ),
						)
					);
					break;
				default:

					ob_start();

					include __DIR__ . '/templates/list.php';

					$content .= ob_get_clean();

					break;
			}
		}

		return $content;

	}


	protected static function get_rest_posts( $atts ) {

		$posts = array();

		if ( 'feed_remote' === $atts['source'] && ! empty( $atts['feed_source']['remote_site_url'] ) ) {

			$remote_site_url = $atts['feed_source']['remote_site_url'];

			$post_query = Query_Rest::get_posts( $remote_site_url, $atts['feed_source'] );

			$posts = ( ! empty( $post_query['posts'] ) ) ? $post_query['posts'] : array();

		} 

		return $posts;

	}


	protected static function get_feed_posts( $atts ) {

		$post_query = Query::get_posts( $atts['feed_source'] );

		return $post_query['posts'];

	}

}
