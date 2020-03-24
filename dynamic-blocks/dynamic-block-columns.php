<?php namespace WSUWP\Plugin\Blocks;

class Dynamic_Block_Columns extends Dynamic_Block {

	protected $slug = 'wsuwp/columns';


	public function register() {

		$columns = array(
			'single',
			'halves',
			'thirds',
			'quarters',
			'sidebar-right',
			'sidebar-left',
		);

		foreach ( $columns as $format ) {

			register_block_type(
				$this->slug . '-' . $format,
				array(
					'render_callback' => array( $this, 'render' ),
					'attributes' => array(
						'format' => array(
							'type' => 'string',
							'default' => $format,
						),
					),
				)
			);

		} // End foreach

	}

	public function render( $atts, $content = '' ) {

		ob_start();

		Components::render( 'columns', $atts, $content );

		return ob_get_clean();

	}

}
