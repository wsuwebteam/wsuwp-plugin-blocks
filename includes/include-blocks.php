<?php namespace WSUWP\Plugin\Blocks;

/**
 * Plugin initiates the plugin to be loaded into WP dashboard.
 *
 * @since 0.0.1
 *
 */
class Blocks {

	protected static $block_directory = array(
		// WDS Blocks
		array( 
			'name'               => 'Content_Hero',
			'slug'               => 'content-hero',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Columns',
			'slug'               => 'content-columns',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Column',
			'slug'               => 'content-column',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Heading',
			'slug'               => 'content-heading',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Button',
			'slug'               => 'content-button',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Legacy-_Olumns',
			'slug'               => 'legacy-columns',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Cards',
			'slug'               => 'content-cards',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Card',
			'slug'               => 'content-card',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Callout',
			'slug'               => 'content-callout',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Post_Title',
			'slug'               => 'content-post-title',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Page_Banner',
			'slug'               => 'content-page-banner',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Accordion',
			'slug'               => 'content-accordion',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Accordion_Group',
			'slug'               => 'content-accordion-group',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Separator',
			'slug'               => 'content-separator',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Quote',
			'slug'               => 'content-quote',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_Image',
			'slug'               => 'content-image',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array( 
			'name'               => 'Content_News',
			'slug'               => 'content-news',
			'type'               => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		// EM Blocks
		array(
			'name'               => 'Content_Separator',
			'slug'               => 'content-separator',
			'type'               => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array(
			'name'               => 'Content_Stat',
			'slug'               => 'content-stat',
			'type'               => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array(
			'name'               => 'Content_Callout',
			'slug'               => 'content-callout',
			'type'               => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array(
			'name'               => 'Content_Heading',
			'slug'               => 'content-heading',
			'type'               => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array(
			'name'               => 'Content_Decorator',
			'slug'               => 'content-decorator',
			'type'               => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array(
			'name'               => 'Content_Hero',
			'slug'               => 'content-hero',
			'type'               => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		array(
			'name'               => 'Content_Hero',
			'slug'               => 'content-hero',
			'type'               => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
		),
		// Block Parts
		array(
			'name'               => 'Image-f_Ame',
			'slug'               => 'image-frame',
			'type'               => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		array(
			'name'               => 'Pattern',
			'slug'               => 'pattern',
			'type'               => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		array(
			'name'               => 'Block_Title',
			'slug'               => 'block-title',
			'type'               => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		array(
			'name'               => 'Wrapper_Link',
			'slug'               => 'wrapper-link',
			'type'               => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		array(
			'name'               => 'Icon',
			'slug'               => 'icon',
			'type'               => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		// Core Blocks
		array(
			'name'               => 'Paragraph',
			'slug'               => 'paragraph',
			'type'               => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		array(
			'name'               => 'Freeform',
			'slug'               => 'freeform',
			'type'               => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		array(
			'name'               => 'List',
			'slug'               => 'list',
			'type'               => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		array(
			'name'               => 'Image',
			'slug'               => 'image',
			'type'               => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		array(
			'name'               => 'Shortcode',
			'slug'               => 'shortcode',
			'type'               => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		array(
			'name'               => 'Table',
			'slug'               => 'table',
			'type'               => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
		),
		// Third Party Blocks
		array(
			'name'               => 'Form',
			'slug'               => 'form',
			'type'               => 'gravityforms',
			'register_block'     => false,
			'register_shortcode' => false,
		),
	);


	public function __construct() {

		Plugin::require_class( 'block-base' );
		Plugin::require_class( 'block-part' );

		$block_dir = Plugin::get_plugin_dir() . 'packages/blocks/';
		$em_block_dir = Plugin::get_plugin_dir() . 'packages/em-blocks/';
		$block_part_dir = Plugin::get_plugin_dir() . 'packages/block-parts/';

		// Add blocks from $block_directory
		foreach ( Blocks::$block_directory as $block ) {
			switch ( $block['type'] ) {
				
				// WDS Blocks
				case 'wsuwp':
					require_once $block_dir . $block['slug'] . '/' . $block['slug'] . '.php';
				break;
				
				// EM Blocks
				case 'wsuwp-em':
					require_once $em_block_dir . $block['slug'] . '/' . $block['slug'] . '.php';
				break;

				// Block Parts
				case 'block-part':
					require_once $block_part_dir . $block['slug'] . '/' . $block['slug'] . '.php';
				break;
			}
		}
	}


	public function init() {

		// Filters
		add_filter( 'allowed_block_types', __CLASS__ . '::allowed_block_types' );

		add_action( 'init', __CLASS__ . '::register_block_types' );

		add_action( 'init', __CLASS__ . '::register_block_shortcodes' );

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

		foreach ( Blocks::$block_directory as $block ) {
			if ( $block['register_block'] == true ) {
				$block['name'] + '::register_block()';
			}
		}

	}

	public static function register_block_shortcodes() {

		foreach ( Blocks::$block_directory as $block ) {
			if ( $block['register_shortcode'] == true ) {
				$block['name'] + '::register_shortcode()';
			}
		}

	}


	public static function allowed_block_types( $allowed_blocks ) {

		$core_blocks = array();
		$wsu_blocks = array();
		$em_blocks = array();
		$third_party = array();

		
		// Add blocks from $block_directory
		foreach ( Blocks::$block_directory as $block ) {
			switch ( $block['type'] ) {
				// Core Blocks
				case 'core':
					$core_blocks .= $block['type'] . '/' . $block['slug'];
				break;

				// WDS Blocks
				case 'wsuwp':
					$wsu_blocks .= $block['type'] . '/' . $block['slug'];
				break;
				
				// EM Blocks
				case 'wsuwp-em':
					$em_blocks .= $block['type'] . '/' . $block['slug'];
				break;

				// Third Party
				default: 
					$third_party .= $block['type'] . '/' . $block['slug'];
				break;
			}
		}

		// Check for allow EM Blocks
		$allowed_blocks = ( Options::get_option( 'block_settings_enable_em_blocks', false ) ) ? array_merge( $core_blocks, $wsu_blocks, $em_blocks, $third_party) : array_merge( $core_blocks, $wsu_blocks, $third_party );

		return $allowed_blocks;

	}

}

(new Blocks)->init();
