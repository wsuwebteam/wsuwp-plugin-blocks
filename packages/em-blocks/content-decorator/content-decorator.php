<?php namespace WSUWP\Plugin\Blocks;

class EM_Content_Decorator extends Block_Base {

	protected static $prefix = 'wsuwp-em';
	protected static $slug = 'decorator';
	protected static $default_atts = array(
		'style'           => '',
		'type'            => '',
		'position_top'    => 'auto',
		'position_bottom' => 'auto',
		'position_right'  => 'auto',
		'position_left'   => 'auto',
		'width'           => 'auto',
		'height'          => 'auto',
		'text'            => '',
		'font_size'       => '',
		'hide_on_desktop' => false,
		'hide_on_tablet'  => false,
		'hide_on_mobile'  => false,
		'style'           => '',
	);


	public static function render_from_array( $decorator_array ) {

		$decorator_content = '';

		if ( is_array($decorator_array) ) {

			foreach ( $decorator_array as $decorator ) {
	
				$decorator_content .= static::render_block( $decorator );
	
			}

		}

		return $decorator_content;

	}


	protected static function render( $atts, $content ) {

		$style_array = array();

		$style_array[] = 'top:' . $atts['position_top'] . ';';
		$style_array[] = 'bottom:' . $atts['position_bottom'] . ';';
		$style_array[] = 'left:' . $atts['position_left'] . ';';
		$style_array[] = 'right:' . $atts['position_right'] . ';';
		$style_array[] = 'height:' . $atts['height'] . ';';
		$style_array[] = 'width:' . $atts['width'] . ';';
		$style_array[] = ( ! empty( $atts['font_size'] ) ) ? 'font-size:' . $atts['font_size'] . ';' : '';

		$atts['style'] = implode( ' ', $style_array );


		$atts['wrapper_class'] = static::get_utility_classes(
			array(
				array( 'key' => 'type', 'prefix' => 'wsu-c-em-decorator--' ),
				array( 'key' => 'hide_on_mobile', 'prefix' => 'wsu-c-em-decorator--', 'is_bool' => true, 'value' => 'hide-on-mobile' ),
				array( 'key' => 'hide_on_tablet', 'prefix' => 'wsu-c-em-decorator--', 'is_bool' => true, 'value' => 'hide-on-tablet' ),
				array( 'key' => 'hide_on_desktop', 'prefix' => 'wsu-c-em-decorator--', 'is_bool' => true, 'value' => 'hide-on-desktop' ),
			),
			$atts,
			array( 'wsu-c-em-decorator' )
		);

		$content = ( ! empty( $atts['text'] ) ) ? $atts['text'] : '';

		ob_start();

		switch ( $atts['type'] ) {

			case 'wsu-watermark-vertical-white':
			case 'wsu-watermark-vertical-crimson':
			case 'wsu-watermark-vertical-gray':
				include __DIR__ . '/templates/wsu-watermark-vertical.php';
				break;
			case 'cougar-head-white':
			case 'cougar-head-crimson':
				include __DIR__ . '/templates/wsu-cougar-head.php';
				break;
			default:
				include __DIR__ . '/templates/default.php';
		}

		return ob_get_clean();

	}

}