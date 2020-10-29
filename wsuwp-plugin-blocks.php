<?php
/**
 * Plugin Name: WSUWP Plugin Blocks
 * Plugin URI: https://web.wsu.edu/
 * Description: A WordPress implementation of WSU Design System components as Gutenberg blocks.
 * Version: 0.23.2.2
 * Requires PHP: 7.0
 * Author: Washington State University, Nic Ford, Danial Bleile
 * Author URI: https://web.wsu.edu/
 * Text Domain: wsuwp-plugin-blocks
 */


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Initiate plugin
require_once __DIR__ . '/includes/include-plugin.php';
