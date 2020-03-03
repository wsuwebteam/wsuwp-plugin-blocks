<?php namespace WSUWP\Plugin\Blocks;

class Component_Column extends Component_Base  {

	protected $args = array();
	protected $content = '';
	protected $default_args = array();


	public function render() {

		$content = $this->content;

		include __DIR__ . '/template.php';
	}

}
