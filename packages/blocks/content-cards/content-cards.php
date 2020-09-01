<?php namespace WSUWP\Plugin\Blocks;

class Content_Cards extends Block_Base {

	protected static $slug = 'cards';
	protected static $default_atts = array(
		'wrapper_class'     => '',
		'as_modal'          => false,
		'cards_per_row'     => 0,
		'padding_before'    => 'default',
		'padding_after'     => 'default',
		'margin_before'     => 'default',
		'margin_after'      => 'default',
		'show_tags'         => false,
		'show_author'       => false,
		'show_publish_date' => false,
		'show_title'        => false,
		'show_img'          => false,
		'source'            => '',
		'source_post_type'  => 'post',
		'source_taxonomy'   => 'category',
		'source_terms'      => '',
		'source_logic'      => 'OR',
		'source_offset'     => 0,
		'source_exclude'    => '',
		'source_count'      => '3',
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'     => '',
				'margin_before'  => 'wsu-u-margin-before--',
				'margin_after'   => 'wsu-u-margin-after--',
				'padding_before' => 'wsu-u-padding-before--',
				'padding_after'  => 'wsu-u-padding-after--',
				'cards_per_row'  => 'wsu-c-cards__items-per-row--',
			),
			$atts
		);

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}