<?php namespace WSUWP\Plugin\Blocks;

/**
 * WSUWP_Plugin_Blocks initiates the plugin to be loaded into WP dashboard.
 *
 * @since 0.0.1
 *
 */
class Plugin {

	protected static $version = '0.28.1';

	protected static $options;
	protected static $authorized_admins = array(
		'danial.bleile@wsu.edu',
		'erik.solveson@wsu.edu',
	);

	public static function get( $property ) {

		switch ( $property ) {

			case 'authorized_admins':
				return self::$authorized_admins;

			case 'version':
				return self::$version;

			case 'plugin_dir':
				return plugin_dir_path( dirname( __FILE__ ) );

			case 'plugin_url':
				return plugin_dir_url( dirname( __FILE__ ) );

			default:
				return '';

		}

	}


	public function __construct() {

		self::require_class( 'utilities' );
		self::require_class( 'query' );
		self::require_class( 'query-rest' );
		self::require_class( 'wp-post' );

	}


	public function init() {

		require_once __DIR__ . '/include-options.php';
		require_once __DIR__ . '/include-blocks.php';
		require_once __DIR__ . '/include-customizer.php';
		require_once __DIR__ . '/include-plugin-scripts.php';
		require_once __DIR__ . '/include-legacy.php';

	}


	public static function get_plugin_url() {

		return plugin_dir_url( dirname( __FILE__ ) );

	}

	public static function get_plugin_dir() {

		return plugin_dir_path( dirname( __FILE__ ) );

	}

	public static function require_class( $class_slug ) {

		require_once self::get_plugin_dir() . 'classes/class-' . $class_slug . '.php';

	}

	public static function get_plugin_asset_file( $index ) {

		$file = include( self::get_plugin_dir() . 'build/index.asset.php');

		if (!is_null($index)) {

			return $file[$index];

		} else {

			return $file;

		}

	}

	public static function get_plugin_version( $isDev = false ) {

		if ( $isDev ) {
			return date( "m.d.y.g:i:s" ) . '--is-local';
		} else {
			return self::$version;
		}

	}

}

(new Plugin)->init();
