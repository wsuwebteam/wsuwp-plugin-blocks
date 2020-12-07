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
			'file_name'          => 'content-hero',
			'block_name'         => 'content-hero',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Columns',
			'file_name'          => 'content-columns',
			'block_name'         => 'columns',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Column',
			'file_name'          => 'content-column',
			'block_name'         => 'column',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Heading',
			'file_name'          => 'content-heading',
			'block_name'         => 'heading',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Button',
			'file_name'          => 'content-button',
			'block_name'         => 'button',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Legacy_Columns',
			'file_name'          => 'legacy-columns',
			'block_name'         => 'legacy-columns',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Cards',
			'file_name'          => 'content-cards',
			'block_name'         => 'cards',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Card',
			'file_name'          => 'content-card',
			'block_name'         => 'card',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Callout',
			'file_name'          => 'content-callout',
			'block_name'         => 'callout',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Post_Title',
			'file_name'          => 'content-post-title',
			'block_name'         => 'post-title',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Page_Banner',
			'file_name'          => 'content-page-banner',
			'block_name'         => 'page-banner',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Accordion',
			'file_name'          => 'content-accordion',
			'block_name'         => 'accordion',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Accordion_Group',
			'file_name'          => 'content-accordion-group',
			'block_name'         => 'accordion-group',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Separator',
			'file_name'          => 'content-separator',
			'block_name'         => 'separator',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Quote',
			'file_name'          => 'content-quote',
			'block_name'         => 'quote',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Image',
			'file_name'          => 'content-image',
			'block_name'         => 'image',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_News',
			'file_name'          => 'content-news',
			'block_name'         => 'news',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Group',
			'file_name'          => 'content-group',
			'block_name'         => 'group',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true,
		),
		array(
			'class_name'         => 'EM_Content_Separator',
			'file_name'          => 'content-separator',
			'block_name'         => 'separator',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Stat',
			'file_name'          => 'content-stat',
			'block_name'         => 'stat',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Callout',
			'file_name'          => 'content-callout',
			'block_name'         => 'callout',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Heading',
			'file_name'          => 'content-heading',
			'block_name'         => 'heading',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Decorator',
			'file_name'          => 'content-decorator',
			'block_name'         => 'decorator',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'EM_Content_Hero',
			'file_name'          => 'content-hero',
			'block_name'         => 'hero',
			'block_namespace'    => 'wsuwp-em',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Image_Frame',
			'file_name'          => 'image-frame',
			'block_name'         => 'image-frame',
			'block_namespace'    => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Pattern',
			'file_name'          => 'pattern',
			'block_name'         => 'pattern',
			'block_namespace'    => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Block_Title',
			'file_name'          => 'block-title',
			'block_name'         => 'block-title',
			'block_namespace'    => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Wrapper_Link',
			'file_name'          => 'wrapper-link',
			'block_name'         => 'wrapper-link',
			'block_namespace'    => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Icon',
			'file_name'          => 'icon',
			'block_name'         => 'icon',
			'block_namespace'    => 'block-part',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Paragraph',
			'file_name'          => 'paragraph',
			'block_name'         => 'paragraph',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Freeform',
			'file_name'          => 'freeform',
			'block_name'         => 'freeform',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'List',
			'file_name'          => 'list',
			'block_name'         => 'list',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Image',
			'file_name'          => 'image',
			'block_name'         => 'image',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Shortcode',
			'file_name'          => 'shortcode',
			'block_name'         => 'shortcode',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Table',
			'file_name'          => 'table',
			'block_name'         => 'table',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Form',
			'file_name'          => 'form',
			'block_name'         => 'form',
			'block_namespace'    => 'gravityforms',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Typewriter',
			'file_name'          => 'content-typewriter',
			'block_name'         => 'typewriter',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => 'Content_Video',
			'file_name'          => 'content-video',
			'block_name'         => 'video',
			'block_namespace'    => 'wsuwp',
			'register_block'     => true,
			'register_shortcode' => true,
			'allow_block_type'   => true
		),
		array(
			'class_name'         => '',
			'file_name'          => '',
			'block_name'         => 'code',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true // TODO: Default value to false when customizer enable block feature is built out
		),
		array(
			'class_name'         => '',
			'file_name'          => '',
			'block_name'         => 'html',
			'block_namespace'    => 'core',
			'register_block'     => false,
			'register_shortcode' => false,
			'allow_block_type'   => true // TODO: Default value to false when customizer enable block feature is built out
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
					require_once $block_dir . $block['file_name'] . '/' . $block['file_name'] . '.php';
				break;
				
				// EM Blocks
				case 'wsuwp-em':
					require_once $em_block_dir . $block['file_name'] . '/' . $block['file_name'] . '.php';
				break;

				// Block Parts
				case 'block-part':
					require_once $block_part_dir . $block['file_name'] . '/' . $block['file_name'] . '.php';
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
				call_user_func( array(__NAMESPACE__ . '\\' . $block['class_name'], 'register_block' ) );
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
			if ($block['allow_block_type'] == true) {
				array_push($allowed_blocks, $block['block_namespace'] . '/' . $block['block_name']);
			}
		}

		return $allowed_blocks;

	}

}

(new Blocks)->init();
