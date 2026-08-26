<?php
/**
 * Plugin Name: Woodex Core
 * Plugin URI: https://woodex.interior
 * Description: CPTs, Elementor widgets (Hero Slider, Cine, Ticker, Gates, Brief), WhatsApp float, REST brief, page installer. No HTML box. No Tailwind CDN.
 * Version: 1.2.0
 * Author: Woodex Interior
 * Author URI: https://woodex.interior
 * License: GPL-2.0-or-later
 * Text Domain: woodex-core
 * Requires at least: 6.4
 * Requires PHP: 8.1
 * Requires Plugins: elementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'WOODEX_CORE_VER', '1.2.0' );
define( 'WOODEX_CORE_PATH', plugin_dir_path( __FILE__ ) );
define( 'WOODEX_CORE_URL', plugin_dir_url( __FILE__ ) );
define( 'WOODEX_WA', 'https://wa.me/923224000768' );
define( 'WOODEX_TEL', '+923362259477' );

require_once WOODEX_CORE_PATH . 'includes/cpt.php';
require_once WOODEX_CORE_PATH . 'includes/rest-brief.php';
require_once WOODEX_CORE_PATH . 'includes/rest-mcp.php';
require_once WOODEX_CORE_PATH . 'includes/whatsapp-float.php';
require_once WOODEX_CORE_PATH . 'includes/schema.php';
require_once WOODEX_CORE_PATH . 'includes/elementor-data.php';
require_once WOODEX_CORE_PATH . 'includes/installer.php';
require_once WOODEX_CORE_PATH . 'includes/admin.php';
require_once WOODEX_CORE_PATH . 'elementor/loader.php';

register_activation_hook(
	__FILE__,
	function () {
		woodex_register_cpts();
		flush_rewrite_rules();
	}
);

register_deactivation_hook(
	__FILE__,
	function () {
		flush_rewrite_rules();
	}
);
