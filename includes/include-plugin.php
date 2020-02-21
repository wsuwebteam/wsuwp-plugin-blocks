<?php namespace WSUWP\Plugin\Blocks;

/**
 * WSUWP_Plugin_Blocks initiates the plugin to be loaded into WP dashboard.
 *
 * @since 0.0.1
 *
 */
class Plugin {

	protected static $version = '0.0.0';

	protected static $options;


	public function __construct() {

		self::require_class( 'options' );

	}


	public function init() {

		self::$options = new Options();

		add_action( 'init', array( self::$options, 'set_options' ) );

		if ( is_customize_preview() ) {

			add_action( 'wp_head', array( self::$options, 'set_options' ), 1 );

		}

		require_once __DIR__ . '/include-blocks.php';
		require_once __DIR__ . '/include-components.php';

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

	public static function get_plugin_version( $isDev ) {

		if ( $isDev ) {
			return date( "m.d.y.g:i:s" ) . '--is-in-dev-mode';
		} else {
			return self::$version;
		}

	}


	public static function get_component_option( $component, $property, $default = '' ) {

		return self::$options->get_option( 'components', $component, $property, $default );

	}

	public static function get_site_option( $group, $object, $property ) {

	}

}

(new Plugin)->init();
