<?php namespace WSUWP\Plugin\Blocks;

class Content_Image extends Block_Base {

	protected static $slug = 'image';
	protected static $default_atts = array(
		'wrapper_class'  => '',
		'class_name'     => '',
		'id'             => '',
		'margin_before'  => 'default',
		'margin_after'   => 'default',
		'padding_before' => 'default',
		'padding_after'  => 'default',
		'src'            => '',
		'alt'            => '',
		'attachment_id'  => null,
		'unit'           => '%',
		'width'          => '100',
		'alignment'      => ''
	);


	protected static function render( $atts, $content ) {

		$atts['wrapper_class'] = static::get_classes(
			array(
				'class_name'       => '',
				'alignment'        => 'wsu-c-image__wrapper--',
				'width'            => 'wsu-c-image-width--',
				'margin_before'    => 'wsu-u-margin-before--',
				'margin_after'     => 'wsu-u-margin-after--',
				'padding_before'   => 'wsu-u-padding-before--',
				'padding_after'    => 'wsu-u-padding-after--',
			),
			$atts,
			array('wsu-c-image__wrapper')
		);

		ob_start();

		switch ( $atts['unit'] ) {
			case 'px':
				include __DIR__ . '/templates/static-width.php';
				break;
			default:
				include __DIR__ . '/templates/default.php';
				break;
		}

		return ob_get_clean();

	}

}
