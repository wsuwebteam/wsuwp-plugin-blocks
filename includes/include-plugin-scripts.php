<?php namespace WSUWP\Plugin\Blocks;


class Plugin_Scripts {


	protected static $option_key = 'wsu_options';


	public static function get( $property ) {

		switch ( $property ) {
			case 'option_key':
				return self::$option_key;
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

		$wds_version = ( ! empty( get_theme_mod( 'wsu_wds_settings_version' ) ) ) ? get_theme_mod( 'wsu_wds_settings_version' ) : '1.x';
		$local_host  = ( function_exists( 'wp_get_environment_type' ) && ( 'local' === wp_get_environment_type() ) && defined( 'WDS_LOCALHOST_URL' ) ) ? WDS_LOCALHOST_URL : false;

		wp_enqueue_script(
			'wsuwp-plugin-blocks-scripts',
			Plugin::get_plugin_url() . 'assets/dist/index.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wsuwp-plugin-blocks-wds-components'),
			Plugin::get_plugin_version( $local_host )
		);

		$wsu_design_system_bundle = ( $local_host ) ? $local_host . '/bundles/dist/wsu-design-system.components.bundle.dist.js' : 'https://cdn.web.wsu.edu/designsystem/' . $wds_version . '/build/dist/wsu-design-system.components.bundle.dist.js';

		wp_enqueue_script(
			'wsuwp-plugin-blocks-wds-components',
			$wsu_design_system_bundle,
			array(),
			Plugin::get_plugin_version( $local_host )
		);

		wp_enqueue_style(
			'wsu-design-system-bundle',
			Plugin::get_plugin_url() . 'assets/dist/index.css',
			array(),
			Plugin::get_plugin_version( $local_host )
		);

		$wsu_design_system_bundle_content_styles = ( $local_host ) ? $local_host . '/bundles/dist/wsu-design-system.content.bundle.dist.css' : 'https://cdn.web.wsu.edu/designsystem/' . $wds_version . '/build/dist/wsu-design-system.content.bundle.dist.css';

		wp_enqueue_style(
			'wsu-design-system-bundle-content-styles',
			$wsu_design_system_bundle_content_styles,
			array(),
			Plugin::get_plugin_version( $local_host )
		);

	}

	public static function enqueue_frontend_assets() {

		if ( !Options::get_option( 'block_settings_enqueue_stylesheet', false) ) {
			return;
		}

		$wds_version = ( ! empty( get_theme_mod( 'wsu_wds_settings_version' ) ) ) ? get_theme_mod( 'wsu_wds_settings_version' ) : '1.x';
		$is_local = false;

		if ( function_exists( 'wp_get_environment_type' ) && ( 'local' === wp_get_environment_type() ) && defined( 'WDS_LOCALHOST_URL' ) ) {
			$is_local = true;
		}

		wp_enqueue_style(
			'wsu-design-system-bundle-component-styles',
			'https://cdn-web-wsu.s3-us-west-2.amazonaws.com/designsystem/' . $wds_version . '/build/dist/wsu-design-system.components.bundle.dist.css',
			array(),
			Plugin::get_plugin_version( $is_local )
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