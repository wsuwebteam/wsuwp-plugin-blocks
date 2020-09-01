<?php namespace WSUWP\Plugin\Blocks;

class Content_Accordion_Group extends Block_Base {

	protected static $slug = 'accordion-group';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'tag'            => 'h2',
		'source'         => 'insert',
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

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'       => '',
				'margin_before'    => 'wsu-u-margin-before--',
				'margin_after'     => 'wsu-u-margin-after--',
				'padding_before'   => 'wsu-u-padding-before--',
				'padding_after'    => 'wsu-u-padding-after--',
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

		$query_args = Query::get_query_args( $atts );

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
