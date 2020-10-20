<?php namespace WSUWP\Plugin\Blocks;

/**
 * Plugin initiates the plugin to be loaded into WP dashboard.
 *
 * @since 0.0.1
 *
 */
class Blocks {


	public function __construct() {

		Plugin::require_class( 'block-base' );
		Plugin::require_class( 'block-part' );

		$block_dir = Plugin::get_plugin_dir() . 'packages/blocks/';
		$em_block_dir = Plugin::get_plugin_dir() . 'packages/em-blocks/';
		$block_part_dir = Plugin::get_plugin_dir() . 'packages/block-parts/';

		// WDS Blocks
		require_once $block_dir . 'content-hero/content-hero.php';
		require_once $block_dir . 'content-columns/content-columns.php';
		require_once $block_dir . 'content-column/content-column.php';
		require_once $block_dir . 'content-heading/content-heading.php';
		require_once $block_dir . 'content-button/content-button.php';
		require_once $block_dir . 'legacy-columns/legacy-columns.php';
		require_once $block_dir . 'content-cards/content-cards.php';
		require_once $block_dir . 'content-card/content-card.php';
		require_once $block_dir . 'content-callout/content-callout.php';
		require_once $block_dir . 'content-post-title/content-post-title.php';
		require_once $block_dir . 'content-page-banner/content-page-banner.php';
		require_once $block_dir . 'content-accordion/content-accordion.php';
		require_once $block_dir . 'content-accordion-group/content-accordion-group.php';
		require_once $block_dir . 'content-separator/content-separator.php';
		require_once $block_dir . 'content-quote/content-quote.php';
		require_once $block_dir . 'content-image/content-image.php';
		require_once $block_dir . 'content-news/content-news.php';

		// EM Blocks
		require_once $em_block_dir . 'content-separator/content-separator.php';
		require_once $em_block_dir . 'content-stat/content-stat.php';
		require_once $em_block_dir . 'content-callout/content-callout.php';
		require_once $em_block_dir . 'content-heading/content-heading.php';
		require_once $em_block_dir . 'content-decorator/content-decorator.php';
		require_once $em_block_dir . 'content-hero/content-hero.php';

		// Block Parts
		require_once $block_part_dir . 'image-frame/image-frame.php';
		require_once $block_part_dir . 'pattern/pattern.php';
		require_once $block_part_dir . 'block-title/block-title.php';
		require_once $block_part_dir . 'wrapper-link/wrapper-link.php';
		require_once $block_part_dir . 'icon/icon.php';

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

		Content_Hero::register_block();
		Content_Columns::register_block();
		Content_Column::register_block();
		Content_Heading::register_block();
		Content_Button::register_block();
		Legacy_Columns::register_block();
		Content_Cards::register_block();
		Content_Card::register_block();
		Content_Callout::register_block();
		Content_Post_Title::register_block();
		Content_Page_Banner::register_block();
		Content_Accordion::register_block();
		Content_Accordion_Group::register_block();
		Content_Separator::register_block();
		Content_Quote::register_block();
		Content_Image::register_block();
		Content_News::register_block();

		EM_Content_Separator::register_block();
		EM_Content_Stat::register_block();
		EM_Content_Callout::register_block();
		EM_Content_Heading::register_block();
		EM_Content_Hero::register_block();

	}

	public static function register_block_shortcodes() {

		Content_Hero::register_shortcode();
		Content_Columns::register_shortcode();
		Content_Column::register_shortcode();
		Content_Heading::register_shortcode();
		Content_Button::register_shortcode();
		Legacy_Columns::register_shortcode();
		Content_Cards::register_shortcode();
		Content_Card::register_shortcode();
		Content_Callout::register_shortcode();
		Content_Post_Title::register_shortcode();
		Content_Page_Banner::register_shortcode();
		Content_Accordion::register_shortcode();
		Content_Accordion_Group::register_shortcode();
		Content_Separator::register_shortcode();
		Content_Quote::register_shortcode();
		Content_Image::register_shortcode();

		EM_Content_Separator::register_shortcode();
		EM_Content_Stat::register_shortcode();
		EM_Content_Callout::register_shortcode();
		EM_Content_Heading::register_shortcode();
		EM_Content_Hero::register_shortcode();

	}


	public static function allowed_block_types( $allowed_blocks ) {

		$core_blocks = array(
			'core/paragraph',
			'core/freeform',
			'core/list',
			'core/image',
			'core/shortcode',
			'core/table',
		);

		$wsu_blocks = array(
			'wsuwp/heading',
			'wsuwp/button',
			'wsuwp/post-title',
			'wsuwp/search-bar',
			'wsuwp/content-hero',
			'wsuwp/columns',
			'wsuwp/cards',
			'wsuwp/callout',
			'wsuwp/page-banner',
			'wsuwp/accordion',
			'wsuwp/accordion-group',
			'wsuwp/separator',
			'wsuwp/quote',
			'wsuwp/image',
			'wsuwp/news',
		);

		$em_blocks = array(
			'wsuwp-em/separator',
			'wsuwp-em/stat',
			'wsuwp-em/callout',
			'wsuwp-em/heading',
			'wsuwp-em/hero',
		);

		$third_party = array(
			'gravityforms/form',
		);

		// Check for allow EM Blocks
		$allowed_blocks = ( Options::get_option( 'block_settings_enable_em_blocks', false ) ) ? array_merge( $core_blocks, $wsu_blocks, $em_blocks, $third_party) : array_merge( $core_blocks, $wsu_blocks, $third_party );

		return $allowed_blocks;

	}

}

(new Blocks)->init();
