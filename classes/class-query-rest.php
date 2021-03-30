<?php namespace WSUWP\Plugin\Blocks;

class Query_Rest {

	protected static $rest_base = 'wp-json/wp/v2/';


	public static function get_posts( $remote_site_url, $args = array() ) {

		$post_query = array(
			'posts' => array(),
		);

		if ( ! empty( $remote_site_url ) && ( false !== strpos( $remote_site_url, 'wsu.edu' ) || false !== strpos( $remote_site_url, '.local' ) ) ) {

			$query_url = self::get_build_query_url( $remote_site_url, $args );

			$response = self::get_remote_response( $query_url );

			if ( is_array( $response ) && ! empty( $response ) ) {

				foreach ( $response as $key => $response_post ) {

					$post_query['posts'][] = new WP_Post( $response_post, 'rest' );

				}
			}
		}

		return $post_query;

	}


	protected static function get_remote_response( $query_url ) {

		$response = wp_remote_get( esc_url_raw( $query_url ) );
		
		$api_response = json_decode( wp_remote_retrieve_body( $response ), true );

		return $api_response;

	}


	protected static function get_query_args( $atts ) {

		$default_fields = array( 'author', 'id', 'excerpt', 'title', 'link', '_embedded', '_links', 'date' );

		$query_args = array(
			'_embed'   => 'author,wp:featuredmedia',
			'per_page' => ( ! empty( $atts['count'] ) ) ? $atts['count'] : 5,
			'_fields'  => ( ! empty( $atts['fields'] ) ) ? $atts['fields'] : implode( ',', $default_fields ),
		);

		self::set_taxonomy_query_args( $query_args, $atts );

		return $query_args;

	}


	protected static function get_build_query_url( $host, $args ) {

		$base_url = trailingslashit( $host ) . self::$rest_base . 'posts/';

		$query_args = self::get_query_args( $args );

		return $base_url . '?' . http_build_query( $query_args );

	}


	protected static function set_taxonomy_query_args( &$query_args, $atts ) {

		if ( ! empty( $atts['term_ids'] ) ) {

			$taxonomy = ( ! empty( $atts['taxonomy'] ) ) ? $atts['taxonomy'] : 'category';

			if ( 'category' === $taxonomy ) {

				$query_args['categories'] = $atts['term_ids'];
			}
		}

		if ( ! empty( $atts['and_logic'] ) ) {

			$query_args['term_relation'] = 'AND';

		}

	}

}
