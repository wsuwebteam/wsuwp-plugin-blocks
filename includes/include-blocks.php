<?php namespace WSUWP\Plugin\Blocks;

/**
 * Plugin initiates the plugin to be loaded into WP dashboard.
 *
 * @since 0.0.1
 *
 */
class Blocks {


	protected static $dynamic_blocks = array();


	public function __construct() {

		//Plugin::require_class( 'block-base' );
		//Plugin::require_class( 'block-columns' );
		//Plugin::require_class( 'block-column' );
		//Plugin::require_class( 'block-button' );
		//Plugin::require_class( 'block-banner' );
		//Plugin::require_class( 'block-heading' );

		require_once Plugin::get_plugin_dir() . 'dynamic-blocks/dynamic-block.php';

	}


	public function init() {

		// Actions
		add_action( 'enqueue_block_assets', __CLASS__ . '::enqueue_block_assets' );
		add_action( 'enqueue_block_editor_assets', __CLASS__ . '::enqueue_block_editor_assets' );

		// Filters
		add_filter( 'allowed_block_types', __CLASS__ . '::allowed_block_types' );

		add_action( 'init', __CLASS__ . '::register_block_types' );

		add_filter( 'block_categories', __CLASS__ . '::add_block_categories', 10, 2 );

	}


	public static function add_block_categories( $categories, $post ) {

		return array_merge(
			array(
				array(
					'slug' => 'content',
					'title' => 'Content',
				),
				array(
					'slug' => 'embeds',
					'title' => 'Embeds',
				),
			),
			$categories
		);

	}


	public static function register_block_types() {

		$dynamic_blocks = array(
			'Columns',
			'Column',
			'Button',
			'Banner',
			'Heading',
			'Search_Bar',
		);

		foreach ( $dynamic_blocks as $class_slug ) {

			// No ... in paths please :)
			$class_slug = str_replace( '.', '', $class_slug );

			$file_base = strtolower( $class_slug );

			$file_base = str_replace( '_', '-', $file_base );

			$block_class = 'Dynamic_Block_' . $class_slug;

			$block_path = Plugin::get_plugin_dir() . 'dynamic-blocks/dynamic-block-' . $file_base . '.php';

			if ( file_exists( $block_path ) ) {

				require_once $block_path;

				if ( class_exists( __NAMESPACE__ . '\\' . $block_class ) ) {

					$block_class = __NAMESPACE__ . '\\' . $block_class;

					$block = new $block_class();

					$block->register();

					self::$dynamic_blocks[ $file_base ] = $block;

				} // End if
			} // End if

		}

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

		$core_blocks = array(
			'core/paragraph',
			'core/freeform',
			'core/list',
			'core/image',
			'core/shortcode',
		);

		$wsu_blocks = array(
			'wsuwp/heading',
			'wsuwp/button',
			'wsuwp/banner',
			'wsuwp/post-title',
			'wsuwp/columns-single',
			'wsuwp/columns-halves',
			'wsuwp/columns-thirds',
			'wsuwp/columns-quarters',
			'wsuwp/columns-sidebar-left',
			'wsuwp/columns-sidebar-right',
			'wsuwp/search-bar',
		);

		return array_merge( $core_blocks, $wsu_blocks );

	}
}

(new Blocks)->init();