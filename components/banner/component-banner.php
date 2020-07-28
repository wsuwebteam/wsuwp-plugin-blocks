<?php namespace WSUWP\Plugin\Blocks;

class Component_Banner extends Component_Base {

	protected $args = array();
	protected $content = '';
	protected $default_args = array(
		'img_src'      => '',
		'title'        => '',
		'subtitle'     => '',
		'button_text'  => '',
		'button_link'  => '',
		'caption_text' => '',
		'caption'      => '',
	);


	public function render() {

		$args = $this->args;

		include __DIR__ . '/template.php';
	}

}
