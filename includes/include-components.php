<?php namespace WSUWP\Plugin\Blocks;


class Components {


	public function init() {
	}


	public static function render( $slug, $args = array(), $content = '' ) {

		do_action( 'wsuwp_wds_component_render', $slug, $args );

		$component = self::get( $slug, $args, $content );

		if ( is_object( $component ) ) {

			$component->render();

		}

	}

	public static function get( $slug, $args = array(), $content = '' ) {

		$component = false;

		// No ... in paths please :)
		$slug = str_replace( '.', '', $slug );

		$slug_base = explode( '-', $slug );

		$slug_base = array_map( 'ucfirst', $slug_base );

		$component_class = 'Component_' . implode( '_', $slug_base );

		$component_path = Plugin::get_plugin_dir() . 'components/' . $slug . '/component-' . $slug . '.php';

		if ( file_exists( $component_path ) ) {

			require_once $component_path;

			if ( class_exists( __NAMESPACE__ . '\\' . $component_class ) ) {

				$component_class = __NAMESPACE__ . '\\' . $component_class;

				$component = new $component_class( $args, $content );

			} // End if
		} // End if

		return $component;

	}

}

(new Components)->init();
