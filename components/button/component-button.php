<?php namespace WSUWP\Plugin\Blocks;

class Component_Button extends Component {

	protected $args = array();
	protected $content = '';
	protected $default_args = array(
		'text'          => '',
		'url'           => '',
		'wrapper_class' => '',
	);


	public function render( $args = array() ) {

		$args = array_merge( $this->args, $args );

		if ( ! empty( $args['className'] ) ) {

			$args['wrapper_class'] .= ' ' . $args['className'];

		}

		include __DIR__ . '/template.php';
	}

}
