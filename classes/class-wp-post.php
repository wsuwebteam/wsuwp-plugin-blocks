<?php namespace WSUWP\Plugin\Blocks;

class WP_Post {

	protected $source = '';
	protected $id = false;
	protected $title = '';
	protected $link = '';
	protected $content = '';
	protected $author_id = '';
	protected $author_name = '';
	protected $publish_date = '';
	protected $image_id = '';
	protected $image_src = array();
	protected $image_src_array = array();
	protected $image_alt = '';
	protected $image_caption = '';
	protected $excerpt = '';


	public function get( $property, $args = array() ) {

		switch ( $property ) {

			case 'id':
				return $this->id;
			case 'title':
				return $this->title;
			case 'link':
				return $this->link;
			case 'content':
				return $this->content;
			case 'author_name':
				return $this->author_name;
			case 'publish_date':
				return $this->publish_date;
			case 'image_src':
				return $this->image_src;
			case 'image_alt':
				return $this->image_alt;
			case 'image_caption':
				return $this->image_caption;
			case 'excerpt':
				return $this->excerpt;
			default:
				return '';

		}

	}


	public function __construct( $post = false, $type = 'local', $args = array() ) {

		if ( $post ) {

			switch ( $type ) {

				case 'local':
					$this->set_from_post( $post, $args );
					break;
				case 'rest':
					$this->set_from_rest( $post, $args );
					break;
			}
		}

	}

	public function set_from_post( $post, $args = array() ) {

		$this->source = 'local';

		if ( is_numeric( $post ) ) {

			$post = get_post( $post );

		}

		if ( ! empty( $post ) ) {

			$this->id           = $post->ID;
			$this->image_id     = get_post_thumbnail_id( $post->ID );
			$this->image_alt    = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
			$this->image_src    = get_the_post_thumbnail_url( $post->ID, 'medium' );
			$this->excerpt      = ( ! empty( $post->post_excerpt ) ) ? wp_trim_words( $post->post_excerpt, 25, '...' ) : wp_trim_words( wp_trim_excerpt( $post->post_content ), 25, '...' );
			$this->content      = get_the_content( $post );
			$this->title        = get_the_title( $post );
			$this->publish_date = get_the_date( '', $post );
			$this->link         = get_permalink( $post );
			$this->author_id    = $post->post_author;
			$this->author_name  = get_the_author_meta( 'display_name', $this->author_id );

		} // endif

	}


	public function set_from_rest( $post_response, $args = array() ) {

		$default_args = array(
			'image_size' => 'medium',
		);

		self::set_default_args( $args, $default_args );

		$this->source = 'rest';
		$this->id           = ( isset( $post_response['id'] ) ) ? $post_response['id'] : false;
		$this->excerpt      = ( ! empty( $post_response['excerpt']['rendered'] ) ) ? $post_response['excerpt']['rendered'] : '';
		//$this->content      = get_the_content( $post );
		$this->title        = ( ! empty( $post_response['title']['rendered'] ) ) ? $post_response['title']['rendered'] : '';
		$this->publish_date = ( ! empty( $post_response['date'] ) ) ? wp_date( get_option( 'date_format' ), strtotime( $post_response['date'] ) ) : '';
		$this->link         = ( ! empty( $post_response['link'] ) ) ? $post_response['link'] : '';
		$this->author_id    = ( ! empty( $post_response['_embedded']['author'][0]['id'] ) ) ? $post_response['_embedded']['author'][0]['id'] : '';
		$this->author_name  = ( ! empty( $post_response['_embedded']['author'][0]['name'] ) ) ? $post_response['_embedded']['author'][0]['name'] : '';

		if ( ! empty( $post_response['_embedded']['wp:featuredmedia'] ) ) {

			$media_response = $post_response['_embedded']['wp:featuredmedia'];
			$media_sizes    = ( ! empty( $media_response[0]['media_details']['sizes'] ) ) ? $media_response[0]['media_details']['sizes'] : array();

			$this->image_id        = ( ! empty( $media_response[0]['id'] ) ) ? $media_response[0]['id'] : '';
			$this->image_alt       = ( ! empty( $media_response[0]['alt_text'] ) ) ? $media_response[0]['alt_text'] : '';
			$this->image_src       = ( array_key_exists( $args['image_size'], $media_sizes ) && ! empty( $media_sizes[ $args['image_size'] ]['source_url'] ) ) ? $media_sizes[ $args['image_size'] ]['source_url'] : $media_response['source_url'];

			if ( ! empty( $media_sizes ) ) {

				foreach ( $media_sizes as $key => $media ) {

					$this->image_src_array[ $key ] = $media['source_url'];
				}
			}
		}

	}


	protected function set_default_args( &$args, $defaults ) {

		foreach ( $defaults as $key => $value ) {

			if ( ! isset( $args[ $key ] ) ) {

				$args[ $key ] = $value;

			}
		}
	}

}