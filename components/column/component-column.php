<?php namespace WSUWP\Plugin\Blocks;

class Component_Column extends Component {

	protected $args = array();
	protected $content = '';
	protected $default_args = array(
		'wrapper_class' => '',
	);


	public function render( $args = array() ) {

		$args = array_merge( $this->args, $args );

		if ( ! empty( $args['className'] ) ) {

			$args['wrapper_class'] .= ' ' . $args['className'];

		}

		$content = $this->content;

		include __DIR__ . '/template.php';
	}

}
