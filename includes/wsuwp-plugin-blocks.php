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

	public static function get_plugin_version($isDev) {

		if ($isDev) {
			return date("m.d.y.g:i:s") . '--is-in-dev-mode' ;
		} else {
			return self::$version;
		}

	}

	public function init() {

		// Actions
		add_action( 'enqueue_block_assets', __NAMESPACE__ . '\WSUWP_Plugin_Blocks::enqueue_block_assets' );
		add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\WSUWP_Plugin_Blocks::enqueue_block_editor_assets' );

		// Filters
		add_filter( 'allowed_block_types', __NAMESPACE__ . '\WSUWP_Plugin_Blocks::allowed_block_types' );
	}

	public static function enqueue_block_assets() {

		wp_enqueue_style(
			'wsuwp-plugin-blocks',
			WSUWP_Plugin_Blocks::get_plugin_url() . 'src/button/style.css',
			array(),
			WSUWP_Plugin_Blocks::get_plugin_version(true)
		);

		wp_enqueue_style(
			'wsu-design-system-bundle',
			'https://cdn-web-wsu.s3-us-west-2.amazonaws.com/designsystem/1.x/build/dist/wsu-design-system.bundle.dist.css',
			array(),
			'1.x' . date("m.d.y.g:i:s")
		);

	}

	public static function enqueue_block_editor_assets() {

		wp_enqueue_script(
			'wsuwp-plugin-blocks-scripts',
			WSUWP_Plugin_Blocks::get_plugin_url() . 'dist/index.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			WSUWP_Plugin_Blocks::get_plugin_version(true)
		);

		wp_enqueue_style(
			'wsu-design-system-bundle',
			WSUWP_Plugin_Blocks::get_plugin_url() . 'dist/index.css',
			array(),
			WSUWP_Plugin_Blocks::get_plugin_version(true)
		);

	}

	function allowed_block_types( $allowed_blocks ) {

		return array(
			'core/image',
			'core/heading',
			'core/columns',
			'core/column',
			'core/buttons',
			'core/button',
			'wsuwp-plugin-blocks/button',
			'wsuwp-plugin-blocks/paragraph',
			'wsuwp-plugin-blocks/test-block'
		);

	}

}

(new WSUWP_Plugin_Blocks)->init();
