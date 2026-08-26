<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'admin_notices',
	function () {
		if ( ! current_user_can( 'install_plugins' ) ) {
			return;
		}
		$need = array();
		if ( ! did_action( 'elementor/loaded' ) && ! defined( 'ELEMENTOR_VERSION' ) ) {
			$need[] = 'Elementor (Free)';
		}
		if ( ! function_exists( 'woodex_register_cpts' ) ) {
			$need[] = 'Woodex Core';
		}
		if ( ! $need ) {
			return;
		}
		echo '<div class="notice notice-info"><p><strong>WX Theme:</strong> Install ' . esc_html( implode( ' + ', $need ) ) . '. Then Tools → Woodex Setup. Do not install WPBakery, Slider Revolution, or us-core.</p></div>';
	}
);
