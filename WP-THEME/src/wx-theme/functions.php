<?php
/**
 * WX Theme — parent. No Hello. No Impreza.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'WX_THEME_VER', '1.0.0' );
define( 'WX_THEME_PATH', get_template_directory() );
define( 'WX_THEME_URL', get_template_directory_uri() );

require_once WX_THEME_PATH . '/inc/header-footer.php';
require_once WX_THEME_PATH . '/inc/setup.php';
require_once WX_THEME_PATH . '/inc/presets.php';
require_once WX_THEME_PATH . '/inc/elementor.php';
if ( is_admin() ) {
	require_once WX_THEME_PATH . '/inc/admin.php';
}
