<?php namespace WSUWP\Plugin\Blocks;

class Content_Separator extends Block_Base {

	protected static $slug = 'separator';
	protected static $default_atts = array(
        'is_hatched' => 'default',
        'show_more_indicator' => 'default'
    );

	protected static function render( $atts, $content ) {

		ob_start();

		include __DIR__ . '/templates/default.php';

		return ob_get_clean();

	}

}