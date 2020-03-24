<?php namespace WSUWP\Plugin\Blocks;

class Component_Button extends Component_Base  {

	protected $args = array();
	protected $content = '';
	protected $default_args = array();


	public function render( $args = array() ) {

		include __DIR__ . '/template.php';
	}

}
