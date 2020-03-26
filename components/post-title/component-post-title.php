<?php namespace WSUWP\Plugin\Blocks;

class Component_Post_Title extends Component_Base  {

	protected $args = array();
	protected $content = '';
	protected $default_args = array(
		'title' => '',
	);


	public function render() {

		$args = $this->args;

		if ( empty( $args['title'] ) && is_singular() ) {

			$args['title'] = get_the_title( get_the_ID() );

		}

		include __DIR__ . '/template.php';
	}

}
