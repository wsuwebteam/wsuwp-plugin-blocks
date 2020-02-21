<?php namespace WSUWP\Plugin\Blocks;

/**
 * Plugin initiates the plugin to be loaded into WP dashboard.
 *
 * @since 0.0.1
 *
 */
class Blocks {


	public function __construct() {

		Plugin::require_class( 'block-columns' );
		Plugin::require_class( 'block-column' );

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
		$columns_block->register();

		$column_block = new Block_Column();
		$column_block->register();

	}


	public static function enqueue_block_assets() {

		wp_enqueue_style(
			'wsuwp-plugin-blocks',
			Plugin::get_plugin_url() . 'blocks/src/button/style.css',
			array(),
			Plugin::get_plugin_version(true)
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
			Plugin::get_plugin_url() . 'blocks/dist/index.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			Plugin::get_plugin_version( true )
		);

		wp_enqueue_style(
			'wsu-design-system-bundle',
			Plugin::get_plugin_url() . 'blocks/dist/index.css',
			array(),
			Plugin::get_plugin_version( true )
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
			'core/freeform',
			'wsuwp/columns-single',
			'wsuwp/columns-halves',
			'wsuwp/columns-thirds',
			'wsuwp/columns-quarters',
			'wsuwp/columns-sidebar-left',
			'wsuwp/columns-sidebar-right',
			//'wsuwp/column',
		);

	}
}

(new Blocks)->init();
