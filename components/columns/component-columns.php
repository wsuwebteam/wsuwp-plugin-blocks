<?php namespace WSUWP\Theme\Binder;

class Component_Columns {

	protected $args = array();
	protected $content = '';
	protected $default_args = array(
		'site_title'    => '',
		'site_subtitle' => '',
	);


	public function __construct( $args = array(), $content = '' ) {

		$this->args    = $this->parse_args( $args );
		$this->content = $content;

	}


	protected function parse_args( $args ) {

		// Make sure $args is an array
		if ( ! is_array( $args ) ) {

			$args = array();

		} // End if

		return array_merge( $this->default_args, $args );

	}


	public function render() {

		$content = $this->content;

		include __DIR__ . '/template.php';

	}

}
