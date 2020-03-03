<?php namespace WSUWP\Plugin\Blocks;

class Component_Columns extends Component_Base  {

	protected $args = array();
	protected $content = '';
	protected $default_args = array();

	
	public function render() {

		$format = ( ! empty( $this->args['format'] ) ) ? $this->args['format'] : 'single';
		$format_class = ( 'single' !== $format ) ? 'wsu-c-columns--' . $format : '';
		$content = $this->content;

		include __DIR__ . '/template.php';

	}

}
