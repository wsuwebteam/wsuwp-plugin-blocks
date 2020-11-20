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

		$content = ( 'feed' === $atts['source'] ) ? self::get_feed_content( $atts ) : $content;

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}


	protected static function get_feed_content( $atts ) {

		$content = '';

		$query_args = Query::get_query_args( $atts['feed_source'] );

		$the_query = new \WP_Query( $query_args );

		if ( $the_query->have_posts() ) {

			while ( $the_query->have_posts() ) {

				$the_query->the_post();

				$thumbnail_id = get_post_thumbnail_id( $the_query->post->ID );
				$image_alt    = get_post_meta( $thumbnail_id, '_wp_attachment_image_alt', true );
				$image_src    = get_the_post_thumbnail_url( $the_query->post->ID, 'medium' );
				$caption      = wp_trim_words( get_the_excerpt(), 25, '...' );
				$title = get_the_title();


				switch ( $atts['type'] ) {

					case 'card':
						$content .= Content_Card::render_block(
							array(
								'title' => $title,
								'image_src' => $image_src,
								'image_alt' => $image_alt,
								'caption'   => $caption,
								'class_name' => 'wsu-c-news__item',
								'card_type' => 'news',
								'date' => get_the_date(),
								'link' => get_permalink(),
								'author_name' => get_the_author_meta( 'display_name'),

							)
						);
				}

			}
		}

		wp_reset_postdata();

		return $content;

	}

}