<?php namespace WSUWP\Plugin\Blocks;

class Component_Heading extends Component_Base  {

	protected $args = array();
	protected $content = '';
	protected $default_args = array(
		'content'       => '',
		'level'         => 'h2',
		'link'          => '',
		'anchor'        => '',
		'classes'       => array(),
	);


	protected function get_classes() {

		$classes = array();

		if ( ! empty( $this->args['className'] ) ) {

			$classes[] = $this->args['className'];

		}

		if ( ! empty( $this->args['style'] ) ) {

			$classes[] = 'wsu-c-heading--' . $this->args['style'];

		}

		return $classes;

	}


	public function render() {

		$args = $this->args;

		$args['classes'] = array_merge( $args['classes'], $this->get_classes() );

		include __DIR__ . '/template.php';
	}

}
