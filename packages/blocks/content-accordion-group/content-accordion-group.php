<?php namespace WSUWP\Plugin\Blocks;

class Content_Accordion_Group extends Block_Base {

	protected static $slug = 'accordion-group';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'tag'            => 'h2',
		'source'         => 'insert',
		'feed_source'    => array(),
		'post_type'      => 'post',
		'taxonomy'       => 'category',
		'term_ids'       => '',
		'count'          => 5,
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
	);


	protected static function render( $atts, $content ) {

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
				'class_name'       => '',
			),
			$atts,
			array( 'wsu-c-accordion-group' )
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

				ob_start();

				the_content();

				$post_content = ob_get_clean();

				$content .= Content_Accordion::render_block( 
					array(
						'title' => get_the_title(),
					),
					$post_content
				);
			}
		}

		wp_reset_postdata();

		return $content;

	}

}
