<?php namespace WSUWP\Plugin\Blocks;

class Blocks {

	public function init() {

		wp_register_script(
			'nic-in-sandbox',
			WSUWP_Plugin_Blocks::get_plugin_url() . 'build/index.js',
			WSUWP_Plugin_Blocks::get_plugin_asset_file('dependencies'),
			WSUWP_Plugin_Blocks::get_plugin_asset_file('version')
		);

		wp_register_style(
			'nic-in-sandbox-editor',
			WSUWP_Plugin_Blocks::get_plugin_url() . 'src/button/editor.css',
			array( 'wp-edit-blocks' ),
			WSUWP_Plugin_Blocks::get_plugin_asset_file('version')
		);

		wp_register_style(
			'nic-in-sandbox',
			WSUWP_Plugin_Blocks::get_plugin_url() . 'src/button/style.css',
			array( ),
			WSUWP_Plugin_Blocks::get_plugin_asset_file('version')
		);

		register_block_type( 'wsuwp-plugin-blocks/nic-is-test', array(
			'style' => 'nic-in-sandbox',
			'editor_style' => 'nic-in-sandbox-editor',
			'editor_script' => 'nic-in-sandbox',
		) );

	}

	// public static function create_block($name) {

	// 	wp_register_script(
	// 		$name,
	// 		WSUWP_Plugin_Blocks::get_plugin_url() . 'build/index.js',
	// 		WSUWP_Plugin_Blocks::get_plugin_asset_file() . ['dependencies'],
	// 		WSUWP_Plugin_Blocks::get_plugin_asset_file() . ['version']
	// 	);

	// 	register_block_type( 'wsuwp-plugin-blocks/' . $name, array(
	// 		'editor_script' => $name,
	// 	) );

	// 	wp_register_style(
	// 		$name . '-editor',
	// 		WSUWP_Plugin_Blocks::get_plugin_url() . 'build/editor.css',
	// 		array( 'wp-edit-blocks' ),
	// 		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	// 	);

	// 	wp_register_style(
	// 		$name,
	// 		plugins_url( 'style.css', __FILE__ ),
	// 		array( ),
	// 		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	// 	);

	// }

}

(new Blocks)->init();
