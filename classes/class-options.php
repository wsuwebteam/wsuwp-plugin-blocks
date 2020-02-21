<?php namespace WSUWP\Plugin\Blocks;

class Options {


	protected $theme_key = 'wsu_wsd_theme_option';
	protected $site_key  = 'wsu_wsd_site_option';
	protected $options = array(
		'components' => array(
			'global_header' => array(
				'is_active' => true,
			),
			'global_footer' => array(
				'is_active' => true,
			),
			'site_header' => array(
				'is_active' => true,
			),
			'site_footer' => array(
				'is_active' => true,
			),
			'site_nav_vertical' => array(
				'is_active' => true,
			),
		),

	);


	public function set_options() {

		$custom_options = apply_filters( 'wsu_wds_options', array() );
		$site_options   = get_option( $this->site_key );
		$site_options   = ( is_array( $site_options ) ) ? $site_options : array();
		$theme_options  = get_theme_mod( $this->theme_key, array() );

		$this->options = array_merge_recursive( $this->options, $site_options, $custom_options, $theme_options );

	}



	public function get_option( $group, $object, $property, $default = '' ) {

		if ( isset( $this->options[ $group ][ $object ][ $property ] ) ) {

			$property_value = $this->options[ $group ][ $object ][ $property ];

			if ( is_array( $property_value ) ) {

				$property_value = end( $property_value ); 

			}

			return $property_value;

		} else {

			return $default;

		}

	}

}
