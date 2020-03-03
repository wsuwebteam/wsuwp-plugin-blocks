<?php namespace WSUWP\Plugin\Blocks;

class Component_Heading extends Component_Base  {

	protected $args = array();
	protected $content = '';
	protected $default_args = array(
		'content' => '',
		'level'   => 'h2',
		'link'    => '',
		'anchor'  => '',
	);


	public function render() {

		$args = $this->args;

		include __DIR__ . '/template.php';
	}

}
