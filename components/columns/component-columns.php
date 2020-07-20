<?php namespace WSUWP\Plugin\Blocks;

class Component_Columns extends Component {

	protected $args = array();
	protected $content = '';
	protected $default_args = array(
		'format'        => 'single',
		'classes'       => array( 'wsu-c-column__wrapper' ),
	);

	
	public function render( $args = array() ) {

		$args = array_merge( $this->args, $args );

		$args['classes'] = array_merge( $this->args['classes'], $this->get_classes() );

		$content = $this->content;

		include __DIR__ . '/template.php';

	}


	protected function get_classes() {

		$classes = array();

		if ( ! empty( $this->args['className'] ) ) {

			$classes[] = $this->args['className'];

		}

		if ( ( 'single' !== $this->args['format'] ) ) {

			$classes[] = 'wsu-c-columns--' . $this->args['format'];

		}

		if ( ! empty( $this->args['backgroundColor'] ) && 'default' !== $this->args['backgroundColor'] ) {

			$classes[] = 'wsu-u-background--' . $this->args['backgroundColor'];

		}

		if ( ! empty( $this->args['paddingBefore'] ) ) {

			$classes[] = 'wsu-u-padding-before--' . $this->args['paddingBefore'];

		}

		if ( ! empty( $this->args['paddingAfter'] ) ) {

			$classes[] = 'wsu-u-padding-after--' . $this->args['paddingAfter'];

		}

		if ( ! empty( $this->args['marginAfter'] ) ) {

			$classes[] = 'wsu-u-margin-after--' . $this->args['marginAfter'];

		}

		if ( ! empty( $this->args['marginBefore'] ) ) {

			$classes[] = 'wsu-u-margin-before--' . $this->args['marginBefore'];

		}

		return $classes;

	}

}
