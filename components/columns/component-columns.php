<?php namespace WSUWP\Plugin\Blocks;

class Component_Columns extends Component {

	protected $args = array();
	protected $content = '';
	protected $default_args = array(
		'format'        => 'single',
		'wrapper_class' => '',
	);

	
	public function render( $args = array() ) {

		$args = array_merge( $this->args, $args );

		if ( ( 'single' !== $args['format'] ) ) {

			$args['wrapper_class'] .= 'wsu-c-columns--' . $args['format'];

		}

		if ( ! empty( $args['className'] ) ) {

			$args['wrapper_class'] .= ' ' . $args['className'];

		}

		$content = $this->content;

		include __DIR__ . '/template.php';

	}

}
