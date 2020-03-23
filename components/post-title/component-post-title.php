<?php namespace WSUWP\Plugin\Blocks;

class Component_Post_Title extends Component_Base  {

	protected $args = array();
	protected $content = '';
	protected $default_args = array(
		'title' => '',
	);


	public function render() {

		$args = $this->args;

		include __DIR__ . '/template.php';
	}

}
