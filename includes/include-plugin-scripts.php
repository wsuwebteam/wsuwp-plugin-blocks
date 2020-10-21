<?php namespace WSUWP\Plugin\Blocks;


class Plugin_Scripts {


	protected static $option_key = 'wsu_options';
	protected static $version = '1.x';
	protected static $is_local = false;

	public function __construct() {

		self::$version = ( ! empty( get_theme_mod( 'wsu_wds_settings_version' ) ) ) ? get_theme_mod( 'wsu_wds_settings_version' ) : '1.x';
		self::$is_local = ( function_exists( 'wp_get_environment_type' ) && ( 'local' === wp_get_environment_type() ) && defined( 'WDS_LOCALHOST_URL' ) ) ? WDS_LOCALHOST_URL : false;

	}

	public static function get( $property ) {

		switch ( $property ) {
			case 'option_key':
				return self::$option_key;
			case 'version':
				return self::$version;
			case 'is_local':
				return self::$is_local;
			default:
				return '';
		}

	}

	public function init() {

		// Actions
		add_action( 'enqueue_block_editor_assets', __CLASS__ . '::enqueue_block_editor_assets' );
		add_action( 'wp_enqueue_scripts', __CLASS__ . '::enqueue_frontend_assets' );

		// Filters
		add_filter( 'block_editor_settings', __CLASS__ . '::unset_editor_default_styles');

	}


	public static function enqueue_block_editor_assets() {

		// Block Editor
		wp_enqueue_script(
			'wsuwp-plugin-blocks-scripts',
			Plugin::get_plugin_url() . 'assets/dist/index.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wsu_design_system_bundle_component_scripts'),
			Plugin::get_plugin_version( self::get('is_local') )
		);

		wp_enqueue_style(
			'wsuwp-plugin-blocks-styles',
			Plugin::get_plugin_url() . 'assets/dist/index.css',
			array(),
			Plugin::get_plugin_version( self::get('is_local') )
		);

		// WSU WDS Assets
		$wsu_design_system_bundle_component_scripts = ( self::get('is_local') ) ? WDS_LOCALHOST_URL . '/bundles/dist/wsu-design-system.components.bundle.dist.js' : 'https://cdn.web.wsu.edu/designsystem/' . self::get('version') . '/build/dist/wsu-design-system.components.bundle.dist.js';
		$wsu_design_system_bundle_component_styles = ( self::get('is_local') ) ? WDS_LOCALHOST_URL . '/bundles/dist/wsu-design-system.components.bundle.dist.css' : 'https://cdn.web.wsu.edu/designsystem/' . self::get('version') . '/build/dist/wsu-design-system.components.bundle.dist.css';

		wp_enqueue_script(
			'wsu_design_system_bundle_component_scripts',
			$wsu_design_system_bundle_component_scripts,
			array(),
			Plugin::get_plugin_version( self::get('is_local') )
		);

		wp_enqueue_style(
			'wsu_design_system_bundle_component_styles',
			$wsu_design_system_bundle_component_styles,
			array(),
			Plugin::get_plugin_version( self::get('is_local') )
		);

	}

	public static function enqueue_frontend_assets() {

		if ( !Options::get_option( 'block_settings_enqueue_stylesheet', false) ) {
			return;
		}

		wp_enqueue_style(
			'wsu-design-system-bundle-component-styles',
			'https://cdn-web-wsu.s3-us-west-2.amazonaws.com/designsystem/' . self::get('version') . '/build/dist/wsu-design-system.components.bundle.dist.css',
			array(),
			Plugin::get_plugin_version( self::get('is_local') )
		);

	}


	/* 
	 * Removes default editor style reset that gutenberg adds to ensure its blocks display correctly
	 * See https://github.com/WordPress/gutenberg/issues/18595#issuecomment-555376731
	 * 
	 * @since 0.13.0
	 * 
	 */
	public static function unset_editor_default_styles( $editor_settings ) {
		unset($editor_settings['styles'][0]);

		return $editor_settings;
	}


}

( new Plugin_Scripts )->init();