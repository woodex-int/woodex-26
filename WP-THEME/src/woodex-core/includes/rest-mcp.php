<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Handshake only. Token MUST be defined in wp-config.php:
 *   define( 'WOODEX_MCP_SECRET', 'long-random-string' );
 * If the constant is missing, the route denies all requests.
 */
add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'woodex/v1',
			'/mcp',
			array(
				'methods'             => 'GET',
				'callback'            => 'woodex_rest_mcp',
				'permission_callback' => 'woodex_rest_mcp_auth',
			)
		);
	}
);

function woodex_rest_mcp_auth( WP_REST_Request $req ) {
	if ( ! defined( 'WOODEX_MCP_SECRET' ) || ! WOODEX_MCP_SECRET ) {
		return false;
	}
	$auth = $req->get_header( 'Authorization' );
	return is_string( $auth ) && hash_equals( 'Bearer ' . WOODEX_MCP_SECRET, $auth );
}

function woodex_rest_mcp() {
	return rest_ensure_response(
		array(
			'mcp_status' => 'CONNECTED',
			'proof'      => '500+ projects · founder ~20 years · execution 10+ years · ISO 9001',
			'studio'     => 'LG 90 Link Road, Model Town, Lahore · 10:00–8:30',
			'named'      => 'Wellstar only',
		)
	);
}
