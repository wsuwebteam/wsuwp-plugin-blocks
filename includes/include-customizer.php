<?php namespace WSUWP\Plugin\Blocks;

/**
 * Plugin initiates the plugin to be loaded into WP dashboard.
 *
 * @since 0.0.1
 *
 */
class Customizer {


	public function init() {

		add_action( 'customize_register', __CLASS__ . '::add_customizer_options' );

	}

	public static function add_customizer_options( $wp_customize ) {

		$section_id        = 'block_settings';
		$authorized_admins = Plugin::get( 'authorized_admins' );
		$current_user      = wp_get_current_user();

		$wp_customize->add_section(
			$section_id,
			array(
				'title'      => 'WSU Block Settings',
				'priority'   => 30,
			)
		);

		$wp_customize->add_setting(
			'wsu_options[block_settings_enable_em_blocks]',
			array(
				'default'     => false,
				'transport'   => 'refresh',
				'type'        => 'option',
			)
		);

		$wp_customize->add_setting(
			'wsu_options[block_settings_enqueue_stylesheet]',
			array(
				'default'     => false,
				'transport'   => 'refresh',
				'type'        => 'option',
			)
		);

		$wp_customize->add_control(
			'wsu_options_block_settings_enqueue_stylesheet_control',
			array(
				'settings'    => 'wsu_options[block_settings_enqueue_stylesheet]',
				'label'       => 'Enqueue WDS Component Stylesheet',
				'description' => 'This option allows you to enqueue the WDS stylesheet without having to use the WDS theme.',
				'section'     => $section_id,
				'type'        => 'checkbox',
			)
		);

		if ( in_array( $current_user->user_email, $authorized_admins ) ) {

			$wp_customize->add_control(
				'wsu_options_block_settings_enable_em_blocks_control',
				array(
					'settings' => 'wsu_options[block_settings_enable_em_blocks]',
					'label'    => 'Enable EM Blocks',
					'section'  => $section_id,
					'type'     => 'checkbox',
				)
			);

		}

	}

}

(new Customizer)->init();
