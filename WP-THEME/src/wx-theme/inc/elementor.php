<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'elementor' );
		add_theme_support( 'elementor-header-footer' );
	}
);

add_action(
	'elementor/theme/register_locations',
	function ( $manager ) {
		if ( ! method_exists( $manager, 'register_all_core_location' ) ) {
			return;
		}
		$manager->register_all_core_location();
	}
);

/**
 * Xpro / Elementor Theme Builder conditions (document, not auto-assigned here):
 * Header  → Entire site
 * Footer  → Entire site
 * Single  → woodex_service / woodex_study / woodex_location / Post
 * Archive → woodex_service / woodex_study / Posts
 * 404     → 404
 * Do not drop an HTML widget on Home or 3D Studio.
 */
add_filter(
	'body_class',
	function ( $classes ) {
		if ( woodex_is_elementor_page() ) {
			$classes[] = 'wx-elementor';
		}
		return $classes;
	}
);
