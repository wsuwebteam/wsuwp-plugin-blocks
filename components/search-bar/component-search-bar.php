<?php namespace WSUWP\Plugin\Blocks;

class Component_Search_Bar extends Component {

	protected $args = array();
	protected $content = '';
	protected $default_args = array();


	public function render( $args = array() ) {

		include __DIR__ . '/template.php';
	}

}
