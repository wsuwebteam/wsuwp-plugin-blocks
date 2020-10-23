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
			'class_name'         => 'Content_Hero',
			'block_name'         => 'content-hero',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Columns',
			'block_name'         => 'content-columns',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Column',
			'block_name'         => 'content-column',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Heading',
			'block_name'         => 'content-heading',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Button',
			'block_name'         => 'content-button',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Legacy_Columns',
			'block_name'         => 'legacy-columns',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Cards',
			'block_name'         => 'content-cards',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Card',
			'block_name'         => 'content-card',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Callout',
			'block_name'         => 'content-callout',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Post_Title',
			'block_name'         => 'content-post-title',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Page_Banner',
			'block_name'         => 'content-page-banner',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Accordion',
			'block_name'         => 'content-accordion',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Accordion_Group',
			'block_name'         => 'content-accordion-group',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Separator',
			'block_name'         => 'content-separator',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Quote',
			'block_name'         => 'content-quote',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Image',
			'block_name'         => 'content-image',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_News',
			'block_name'         => 'content-news',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Separator',
			'block_name'         => 'content-separator',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Stat',
			'block_name'         => 'content-stat',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Callout',
			'block_name'         => 'content-callout',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Heading',
			'block_name'         => 'content-heading',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Decorator',
			'block_name'         => 'content-decorator',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Hero',
			'block_name'         => 'content-hero',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Hero',
			'block_name'         => 'content-hero',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Image_Frame',
			'block_name'         => 'image-frame',
			'block_namespace'    => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Pattern',
			'block_name'         => 'pattern',
			'block_namespace'    => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Block_Title',
			'block_name'         => 'block-title',
			'block_namespace'    => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Wrapper_Link',
			'block_name'         => 'wrapper-link',
			'block_namespace'    => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Icon',
			'block_name'         => 'icon',
			'block_namespace'    => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Paragraph',
			'block_name'         => 'paragraph',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Freeform',
			'block_name'         => 'freeform',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'List',
			'block_name'         => 'list',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Image',
			'block_name'         => 'image',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Shortcode',
			'block_name'         => 'shortcode',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Table',
			'block_name'         => 'table',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Form',
			'block_name'         => 'form',
			'block_namespace'    => 'gravityforms',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array( 
			'class_name'         => 'Content_Typewriter',
			'block_name'         => 'content-typewriter',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
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
			switch ( $block['block_namespace'] ) {
				// WDS Blocks
				case 'wsuwp':
					require_once $block_dir . $block['block_name'] . '/' . $block['block_name'] . '.php';
				break;
				
				// EM Blocks
				case 'wsuwp-em':
					require_once $em_block_dir . $block['block_name'] . '/' . $block['block_name'] . '.php';
				break;

				// Block Parts
				case 'block-part':
					require_once $block_part_dir . $block['block_name'] . '/' . $block['block_name'] . '.php';
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
					'js_name' => 'content',
					'title' => 'Content',
				),
				array(
					'js_name' => 'embeds',
					'title' => 'Embeds',
				),
			),
			$categories
		);

	}


	public static function register_block_types() {

		foreach ( Blocks::$block_directory as $block ) {
			if ( $block['register_block'] == true ) {
				call_user_func( [ __NAMESPACE__ . '\\' . $block['class_name'], 'register_block' ] );
			}
		}

	}

	public static function register_block_shortcodes() {

		foreach ( Blocks::$block_directory as $block ) {
			if ( $block['register_shortcode'] == true ) {
				call_user_func( [ __NAMESPACE__ . '\\' . $block['class_name'], 'register_shortcode' ] );
			}
		}

	}


	public static function allowed_block_types( $allowed_blocks ) {

		$allowed_blocks = array();
		$enable_em_blocks = Options::get_option( 'block_settings_enable_em_blocks', false );

		// Add blocks from $block_directory
		foreach ( Blocks::$block_directory as $block ) {
			array_push($allowed_blocks, $block['block_namespace'] . '/' . $block['block_name']);
		}

		return $allowed_blocks;

	}

}

(new Blocks)->init();
