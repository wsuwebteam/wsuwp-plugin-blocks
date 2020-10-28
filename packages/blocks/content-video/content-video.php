<?php namespace WSUWP\Plugin\Blocks;

class Content_Video extends Block_Base {

	protected static $slug = 'video';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'url'            => '',
	);
	protected static $supported_platforms = array(
		'youtube',
		'vimeo'
	);

	protected static function render( $atts, $content ) {

		$atts = self::process_video_url($atts);

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name' => '',
			),
			$atts,
			array('wsu-c-video__wrapper')
		);

		ob_start();

		switch ($atts['platform']) {
			case 'youtube':
				self::render_youtube($atts);
			break;

			case 'vimeo':
				self::render_vimeo($atts);
			break;
			
			default:
				self::render_default($atts);
			break;
		}

		return ob_get_clean();

	}

	protected static function process_video_url($atts) {

		foreach (self::$supported_platforms as $platform) {

			if ( strpos( $atts['url'], $platform ) !== false ) {

				// Assign platform
				$atts['platform'] = $platform;

			}

		}

		return $atts;

	}

	protected static function render_youtube($atts) {

		parse_str( parse_url( $atts['url'], PHP_URL_QUERY ), $url_atts );

		$atts['video_id'] = $url_atts['v'];

		include __DIR__ . '/templates/youtube.php';

	}

	protected static function render_vimeo($atts) {

		$oembed_api_endpoint = 'https://vimeo.com/api/oembed.json';

		$response = wp_remote_request( $oembed_api_endpoint . '?url=' . $atts['url'] );
		$response = json_decode($response['body']);

		$atts['title'] = $response->title;
		$atts['video_id'] = $response->video_id;

		include __DIR__ . '/templates/vimeo.php';

	}

	protected static function render_default($atts) {

		include __DIR__ . '/templates/default.php';

	}
}
