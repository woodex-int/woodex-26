<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'wp_head',
	function () {
		if ( ! is_singular() && ! is_front_page() ) {
			return;
		}
		$data = array(
			'@context' => 'https://schema.org',
			'@type'    => 'InteriorDesignStudio',
			'name'     => 'Woodex Interior',
			'url'      => home_url( '/' ),
			'email'    => 'studio@woodex.interior',
			'telephone'=> '+923362259477',
			'description' => 'Interior design, in-house 3D and execution. 500+ projects, ISO 9001. LG 90 Link Road, Model Town, Lahore.',
			'areaServed'  => array( 'Lahore', 'Karachi', 'Islamabad', 'Pakistan' ),
			'address'     => array(
				'@type'           => 'PostalAddress',
				'streetAddress'   => 'LG 90 Link Road, Model Town',
				'addressLocality' => 'Lahore',
				'addressRegion'   => 'Punjab',
				'addressCountry'  => 'PK',
			),
			'openingHoursSpecification' => array(
				'@type'     => 'OpeningHoursSpecification',
				'dayOfWeek' => array( 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ),
				'opens'     => '10:00',
				'closes'    => '20:30',
			),
		);
		echo '<script type="application/ld+json">' . wp_json_encode( $data ) . '</script>' . "\n";
	},
	8
);
