<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function woodex_register_cpts() {
	$common = array(
		'public'       => true,
		'show_in_rest' => true,
		'supports'     => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
		'has_archive'  => true,
	);

	register_post_type(
		'woodex_service',
		array_merge(
			$common,
			array(
				'label'     => 'Services',
				'rewrite'   => array( 'slug' => 'services' ),
				'menu_icon' => 'dashicons-layout',
			)
		)
	);

	register_post_type(
		'woodex_study',
		array_merge(
			$common,
			array(
				'label'     => 'Studies',
				'rewrite'   => array( 'slug' => 'studies' ),
				'menu_icon' => 'dashicons-camera',
			)
		)
	);

	register_post_type(
		'woodex_location',
		array_merge(
			$common,
			array(
				'label'     => 'Locations',
				'rewrite'   => array( 'slug' => 'locations' ),
				'menu_icon' => 'dashicons-location',
			)
		)
	);

	register_post_type(
		'woodex_brief',
		array(
			'label'        => 'Briefs',
			'public'       => false,
			'show_ui'      => true,
			'show_in_rest' => true,
			'supports'     => array( 'title', 'editor', 'custom-fields' ),
			'menu_icon'    => 'dashicons-email',
			'capability_type' => 'post',
		)
	);

	register_post_type(
		'woodex_testimonial',
		array_merge(
			$common,
			array(
				'label'     => 'Testimonials',
				'public'    => false,
				'show_ui'   => true,
				'rewrite'   => array( 'slug' => 'testimonials' ),
				'menu_icon' => 'dashicons-format-quote',
			)
		)
	);

	register_taxonomy(
		'service_group',
		'woodex_service',
		array(
			'label'        => 'Service group',
			'public'       => true,
			'hierarchical' => true,
			'show_in_rest' => true,
		)
	);

	register_taxonomy(
		'insight_gate',
		'post',
		array(
			'label'        => 'Insight gate',
			'public'       => true,
			'hierarchical' => true,
			'show_in_rest' => true,
		)
	);
}
add_action( 'init', 'woodex_register_cpts' );
