<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * v1 ships one skin: Woodex Interior.
 * Next client = new folder under assets/skins/. Do not copy Woodex proof into it.
 */
function wx_theme_presets() {
	return array(
		'woodex-interior' => array(
			'label' => 'Woodex Interior',
			'file'  => WX_THEME_PATH . '/assets/skins/woodex-interior/tokens.json',
		),
	);
}

function wx_theme_active_preset() {
	$key = get_option( 'wx_theme_preset', 'woodex-interior' );
	$all = wx_theme_presets();
	return isset( $all[ $key ] ) ? $key : 'woodex-interior';
}
