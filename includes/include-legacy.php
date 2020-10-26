<?php namespace WSUWP\Plugin\Blocks;


class Legacy {

	protected static $spacing_legacy_map = array(
		'none'         => '0',
		'xsmall'       => '0.5rem',
		'small'        => '1rem',
		'medium'       => '2rem',
		'medium-large' => '3rem',
		'large'        => '4rem',
		'xlarge'       => '6rem',
	);
	
	
	public static function get( $property ) {

		switch ( $property ) {

			case 'spacing_legacy_map':
				return static::$spacing_legacy_map;
			default:
				return '';
		}

	}

}
