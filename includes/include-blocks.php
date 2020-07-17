<?php namespace WSUWP\Plugin\Blocks;

/**
 * Plugin initiates the plugin to be loaded into WP dashboard.
 *
 * @since 0.0.1
 *
 */
class Blocks {


	protected static $dynamic_blocks = array();
	protected static $blocks = array();


	public function __construct() {

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

		Plugin::require_class( 'block-base' );

		$block_dir = Plugin::get_plugin_dir() . 'blocks/';

		require_once $block_dir . 'content-hero/content-hero.php';

		$block_array = array(
			'Content_Hero'    => 'content-hero/content-hero.php',
			'Content_Columns' => 'content-columns/content-columns.php',
			'Content_Column' => 'content-column/content-column.php',
			'Content_Heading' => 'content-heading/content-heading.php',
			'Content_Button'  => 'content-button/content-button.php',
			'Legacy_Columns'  => 'legacy-columns/legacy-columns.php',
		);

		foreach ( $block_array as $class_name => $dir ) {

			$block_dir_path = $block_dir . $dir;

			if ( file_exists( $block_dir_path ) ) {

				require_once $block_dir_path;

				if ( class_exists( __NAMESPACE__ . '\\' . $class_name ) ) {

					$block_class = __NAMESPACE__ . '\\' . $class_name;

					$block = new $block_class();

					$block->register_block();
					$block->register_shortcode();

					self::$blocks[ $block->get('slug') ] = $block;

				} // End if
			} // End if

		}

		// Code below here is legecy and should be transitioned to the above structure as blocks are updated.

		$dynamic_blocks = array(
			'Button',
			'Search_Bar',
			'Post_Title',
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

		/*

		wp_enqueue_style(
			'wsu-design-system-bundle',
			'https://cdn-web-wsu.s3-us-west-2.amazonaws.com/designsystem/1.x/build/dist/wsu-design-system.bundle.dist.css',
			array(),
			'1.x' . date("m.d.y.g:i:s")
		);

		*/

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
			//'core/heading',
		);

		$wsu_blocks = array(
			'wsuwp/heading',
			'wsuwp/button',
			//'wsuwp/banner',
			'wsuwp/post-title',
			//'wsuwp/columns-single',
			//'wsuwp/columns-halves',
			//'wsuwp/columns-thirds',
			//'wsuwp/columns-quarters',
			//'wsuwp/columns-sidebar-left',
			//'wsuwp/columns-sidebar-right',
			'wsuwp/search-bar',
			'wsuwp/content-hero',
			'wsuwp/columns',
		);

		return array_merge( $core_blocks, $wsu_blocks );


	}
}

(new Blocks)->init();
