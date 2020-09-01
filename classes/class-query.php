<?php namespace WSUWP\Plugin\Blocks;

class Query {

	public static function get_query_args( $atts ) {

		$query_args = array(
			'post_type'      => ( ! empty( $atts['post_type'] ) ) ? $atts['post_type'] : 'post',
			'posts_per_page' => ( ! empty( $atts['count'] ) ) ? $atts['count'] : 5,
		);

		self::set_taxonomy_args( $query_args, $atts );

		return $query_args;

	}


	protected static function set_taxonomy_args( &$query_args, $atts ) {

		if ( ! empty( $atts['taxonomy'] ) && ! empty( $atts['term_ids'] ) ) {

			$query_args['tax_query'] = array(
				array(
					'taxonomy' => $atts['taxonomy'],
					'field'    => 'term_id',
					'terms'    => explode( ',', $atts['term_ids'] ),
				),
			);

		}

	}

}
