<?php namespace WSUWP\Plugin\Blocks;

/**
 * WSUWP_Plugin_Blocks initiates the plugin to be loaded into WP dashboard.
 *
 * @since 0.0.1
 *
 */
class Blocks {


	public function __construct() {

		Plugin::require_class( 'block-columns.php' );

	}


	public function init() {

		// Actions
		add_action( 'enqueue_block_assets', __CLASS__ . '::enqueue_block_assets' );
		add_action( 'enqueue_block_editor_assets', __CLASS__ . '::enqueue_block_editor_assets' );

		// Filters
		add_filter( 'allowed_block_types', __CLASS__ . '::allowed_block_types' );

		add_action( 'init', __CLASS__ . '::register_block_types' );

	}


	public static function register_block_types() {

		$columns_block = new Block_Columns();
		$columns_block->register()

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
			WSUWP_Plugin_Blocks::get_plugin_version( true )
		);

		wp_enqueue_style(
			'wsu-design-system-bundle',
			WSUWP_Plugin_Blocks::get_plugin_url() . 'dist/index.css',
			array(),
			WSUWP_Plugin_Blocks::get_plugin_version( true )
		);

	}

	public static function allowed_block_types( $allowed_blocks ) {

		return array(
			//'core/image',
			//'core/heading',
			//'core/columns',
			//'core/column',
			//'core/buttons',
			//'core/button',
			//'wsuwp-plugin-blocks/button',
			//'wsuwp-plugin-blocks/paragraph',
			//'wsuwp-plugin-blocks/test-block',
		);

	}
}

(new Blocks)->init();
