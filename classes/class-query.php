<?php namespace WSUWP\Plugin\Blocks;

class Query {


	public static function get_posts( $atts ) {

		// TODO: add keys for total count
		$post_query = array(
			'posts' => array(),
		);

		$query_args = self::get_query_args( $atts );

		$the_query = new \WP_Query( $query_args );

		if ( $the_query->have_posts() ) {

			while ( $the_query->have_posts() ) {

				$the_query->the_post();

				$post_query['posts'][] = new WP_Post( $the_query->post );

			}
		}

		wp_reset_postdata();

		return $post_query;

	}

	public static function get_query_args( $atts ) {

		static::parse_allowed_atts( $atts );

		$query_args = array(
			'post_type'      => ( ! empty( $atts['post_type'] ) ) ? $atts['post_type'] : 'post',
			'posts_per_page' => ( ! empty( $atts['count'] ) ) ? $atts['count'] : 5,
		);

		self::set_taxonomy_args( $query_args, $atts );

		return $query_args;

	}


	protected static function set_taxonomy_args( &$query_args, $atts ) {

		if ( ! empty( $atts['term_ids'] ) ) {

			$query_args['tax_query'] = array(
				array(
					'taxonomy' => ( ! empty( $atts['taxonomy'] ) ) ? $atts['taxonomy'] : 'category',
					'field'    => 'term_id',
					'terms'    => explode( ',', $atts['term_ids'] ),
					'operator' => ( $atts['and_logic'] ) ? 'AND' : 'IN',
				),
			);

		}

	}


	protected static function parse_allowed_atts( &$atts ) {

		$allowed_atts = array( 'term_ids', 'count', 'and_logic', 'taxonomy' );

		foreach ( $atts as $key => $value ) {

			if ( ! in_array( $key, $allowed_atts, true ) ) {

				unset( $atts[ $key ] );
			}
		}
	}

}
