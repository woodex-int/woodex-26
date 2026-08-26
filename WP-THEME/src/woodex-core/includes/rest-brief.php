<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'woodex/v1',
			'/brief',
			array(
				'methods'             => 'POST',
				'callback'            => 'woodex_rest_brief',
				'permission_callback' => '__return_true',
			)
		);
	}
);

function woodex_rest_brief( WP_REST_Request $req ) {
	$nonce = $req->get_header( 'X-WP-Nonce' );
	if ( $nonce && ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
		return new WP_Error( 'bad_nonce', 'Invalid nonce.', array( 'status' => 403 ) );
	}

	$name    = sanitize_text_field( $req->get_param( 'name' ) );
	$email   = sanitize_email( $req->get_param( 'email' ) );
	$message = sanitize_textarea_field( $req->get_param( 'message' ) );

	if ( ! $name || ! $email || ! $message ) {
		return new WP_Error( 'missing', 'Please complete name, email and project notes.', array( 'status' => 400 ) );
	}

	$phone = sanitize_text_field( $req->get_param( 'phone' ) );
	$city  = sanitize_text_field( $req->get_param( 'city' ) );
	$have  = sanitize_text_field( $req->get_param( 'have' ) );
	$need  = sanitize_text_field( $req->get_param( 'need' ) );

	$id = wp_insert_post(
		array(
			'post_type'   => 'woodex_brief',
			'post_status' => 'private',
			'post_title'  => $name . ' — ' . ( $city ? $city : 'brief' ),
			'post_content'=> $message,
			'meta_input'  => array(
				'email' => $email,
				'phone' => $phone,
				'city'  => $city,
				'have'  => $have,
				'need'  => $need,
				'area'  => sanitize_text_field( $req->get_param( 'area' ) ),
				'stage' => sanitize_text_field( $req->get_param( 'stage' ) ),
				'when'  => sanitize_text_field( $req->get_param( 'when' ) ),
				'budget'=> sanitize_text_field( $req->get_param( 'budget' ) ),
			),
		)
	);

	if ( is_wp_error( $id ) ) {
		return $id;
	}

	$lines = array( 'Hello Woodex — project brief.', 'Name: ' . $name, 'Email: ' . $email );
	if ( $phone ) {
		$lines[] = 'Phone: ' . $phone;
	}
	if ( $city ) {
		$lines[] = 'City: ' . $city;
	}
	if ( $have ) {
		$lines[] = 'Have: ' . $have;
	}
	if ( $need ) {
		$lines[] = 'Need: ' . $need;
	}
	$lines[] = 'Notes: ' . $message;
	$wa      = WOODEX_WA . '?text=' . rawurlencode( implode( "\n", $lines ) );

	return rest_ensure_response(
		array(
			'ok'      => true,
			'id'      => $id,
			'whatsapp'=> $wa,
			'note'    => 'Brief received. A studio lead replies within one working day.',
		)
	);
}
