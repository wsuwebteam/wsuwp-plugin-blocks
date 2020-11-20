<?php namespace WSUWP\Plugin\Blocks;

class Query {

	public static function get_query_args( $query_atts ) {

		static::parse_allowed_atts( $query_atts );

		$query_args = array(
			'post_type'      => ( ! empty( $query_atts['post_type'] ) ) ? $query_atts['post_type'] : 'post',
			'posts_per_page' => ( ! empty( $query_atts['count'] ) ) ? $query_atts['count'] : 5,
		);

		self::set_taxonomy_args( $query_args, $query_atts );

		return $query_args;

	}


	protected static function set_taxonomy_args( &$query_args, $query_atts) {

		if ( ! empty( $query_atts['taxonomy'] ) && ! empty( $query_atts['term_ids'] ) ) {

			$query_args['tax_query'] = array(
				array(
					'taxonomy' => $query_atts['taxonomy'],
					'field'    => 'term_id',
					'terms'    => explode( ',', $query_atts['term_ids'] ),
					'operator' => ( $query_atts['or_logic'] ) ? 'IN' : 'AND',
				),
			);

		}

	}


	protected static function parse_allowed_atts( &$query_atts ) {

		$allowed_atts = array( 'term_ids', 'count', 'or_logic', 'taxonomy' );

		foreach ( $query_atts as $key => $value ) {

			if ( ! in_array( $key, $allowed_atts, true ) ) {

				unset( $query_atts[ $key ] );
			}
		}
	} 

}
