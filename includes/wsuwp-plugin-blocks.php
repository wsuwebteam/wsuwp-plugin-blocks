<?php namespace WSUWP\Plugin\Blocks;

/**
 * WSUWP_Plugin_Blocks initiates the plugin to be loaded into WP dashboard.
 *
 * @since 0.0.1
 *
 */
class WSUWP_Plugin_Blocks {

	protected static $version = '0.0.0';


	public static function get_plugin_url() {

		return plugin_dir_url( dirname( __FILE__ ) );

	}

	public static function get_plugin_dir() {

		return plugin_dir_path( dirname( __FILE__ ) );

	}

	public static function get_plugin_asset_file($index) {

		$file = include( self::get_plugin_dir() . 'build/index.asset.php');

		if (!is_null($index)) {
			return $file[$index];
		} else {
			return $file;
		}



	}

	public static function get_plugin_version() {
		return self::$version;
	}


	public function init() {

		require_once __DIR__ . '/blocks.php';

	}

}

(new WSUWP_Plugin_Blocks)->init();
