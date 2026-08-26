<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function woodex_apply_elementor( $post_id, $elements, $type = 'wp-page' ) {
	update_post_meta( $post_id, '_elementor_edit_mode', 'builder' );
	update_post_meta( $post_id, '_elementor_template_type', $type );
	update_post_meta( $post_id, '_elementor_version', '3.24.0' );
	update_post_meta( $post_id, '_elementor_data', wp_slash( wp_json_encode( $elements ) ) );
	if ( 'wp-page' === $type ) {
		update_post_meta( $post_id, '_wp_page_template', 'elementor_header_footer' );
	}
}

function woodex_upsert_page( $title, $slug ) {
	$existing = get_page_by_path( $slug );
	if ( $existing ) {
		return (int) $existing->ID;
	}
	return (int) wp_insert_post(
		array(
			'post_title'  => $title,
			'post_name'   => $slug,
			'post_status' => 'publish',
			'post_type'   => 'page',
			'post_content'=> '',
		)
	);
}

function woodex_seed_services() {
	$items = array(
		array( 'residential', 'Residential Interior Design', 'A home considered, personal and complete', 'interior', 'Homes · Pakistan', 'You know what you like. The hard part is making layout, storage, light and furniture work as one house — not one board per room.' ),
		array( 'office', 'Office Interior Design', 'Your office is your most visible brand', 'interior', 'Workplace · Pakistan', 'Talent and clients decide before they sit down. Plan work, collaborate, connect and represent — then visualise, then fit out.' ),
		array( 'retail', 'Retail Interior Design', 'Turn your brand into a space people remember', 'interior', 'Retail · Brand into space', 'Entrance, flow, display, checkout and staff zones — then 3D, then build. Not a warehouse with lights.' ),
		array( 'shops', 'Shops & Showrooms', 'Product, path, pause', 'interior', 'Showroom · Product in a room', 'A showroom is hospitality for a product. Path first. Then the still.' ),
		array( 'restaurant', 'Restaurant Interior Design', 'Design the experience before the first guest', 'industry', 'Hospitality · Night mood', 'Atmosphere has to work alongside circulation, seating and the kitchen. A beautiful room that cannot turn tables is a set.' ),
		array( 'cafe', 'Cafe Interior Design', 'A place people want to stay', 'industry', 'Café · Counter first', 'Counter, seating, identity and dwell — a room that holds a morning laptop crowd and a midnight conversation.' ),
		array( 'renovation', 'Renovation Services', 'Rethink the space you already have', 'specialist', 'Renovation · Survey first', 'Outdated layout, tired finishes, poor storage or light. Survey first. Then design. Then budget.' ),
		array( 'fit-out', 'Fit-Out & Execution', 'You have the design. We finish the space.', 'fitout', 'Execution · Two routes', 'Two routes. Woodex-designed: design → 3D → budget → BOQ → site. Your drawings: review → commercial → execute.' ),
		array( 'architecture', 'Interior Architecture', 'The room and the building must agree', 'specialist', 'Architecture · Inside the envelope', 'Interior architecture is not decoration of a leftover shell. Openings, levels, light and structure decide the rooms.' ),
		array( 'drawings', 'Construction Drawings', 'Sheets the site can actually build', 'specialist', 'Drawings · Buildable sheets', 'Plans, elevations, joinery, lighting, ceiling. Not a pretty PDF. A package that can go to BOQ and the mill.' ),
		array( 'joinery', 'Joinery & Furniture', 'Joinery as it will be made', 'specialist', 'Woodex Furniture · The mill', 'Kitchens, wardrobes, reception desks, banquettes. Drawn, then built in the workshop — not guessed on site.' ),
		array( 'lighting', 'Lighting Design', 'A room approved only at noon will fail at 9pm', 'specialist', 'Light · Day and night', 'Daylight and night mood. Two kitchens. Three scenes. Choose before the mill and the electrician start.' ),
		array( 'pharmacy', 'Pharmacy & Clinic Interiors', 'Calm rooms that have to work', 'industry', 'Pharmacy · Clinic', 'Counter, waiting, dispensary, consult. Named work: Wellstar Pharmacy, Cosmetics and Mini Hospital, DHA Lahore.' ),
		array( 'software-house', 'Software House Interiors', 'Focus rooms. Then the mural.', 'industry', 'Workplace · Product teams', 'Focus rooms, collaboration, a client path. Not a mural first.' ),
		array( 'space-planning', 'Space Planning', 'Test the rooms before you decorate', 'specialist', 'Plan · Before the still', 'Adjacencies, widths, storage. Approve the volume first.' ),
		array( 'visualization', 'Rendering & Walkthrough', 'Stills. Walkthrough. 360. Say which.', 'studio', '3D · In-house', '3D does not invent a layout and call it design. Design first. Then the still.' ),
		array( 'office-fit-out', 'Office Fit-Out', 'A floor that can stay open', 'fitout', 'Fit-out · Workplace', 'Headcount, hybrid, a client path. Execute after the still — or after we have reviewed your drawings.' ),
		array( 'commercial-fit-out', 'Commercial Fit-Out', 'A shop that can open on time', 'fitout', 'Fit-out · Trade', 'Enter, pause, pay. The path is the brief. We execute after the still or after we have reviewed your drawings.' ),
		array( 'residential-fit-out', 'Residential Fit-Out', 'The house as it will be lived', 'fitout', 'Fit-out · House', 'Living, kitchen, the quiet room — executed after the still. Joinery from the mill, not a catalogue dropped on a plan.' ),
		array( 'turnkey', 'Turnkey Interiors', 'One partner. Concept to keys.', 'specialist', 'Turnkey · One studio', 'DESIGN → VISUALIZE → PLAN → BUDGET → BOQ → EXECUTE → DELIVER. One partner. Not a moodboard plus a contractor hunt.' ),
	);
	$count = 0;
	foreach ( $items as $row ) {
		list( $slug, $title, $h1, $group, $eye, $para ) = $row;
		if ( get_page_by_path( $slug, OBJECT, 'woodex_service' ) ) {
			continue;
		}
		$id = wp_insert_post(
			array(
				'post_type'    => 'woodex_service',
				'post_status'  => 'publish',
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_excerpt' => $para,
				'post_content' => $para,
				'meta_input'   => array(
					'cine_h1'  => $h1,
					'cine_eye' => $eye,
					'cine_p'   => $para,
				),
			)
		);
		if ( $id && ! is_wp_error( $id ) ) {
			wp_set_object_terms( $id, $group, 'service_group' );
			++$count;
		}
	}
	return $count;
}

function woodex_seed_locations() {
	$items = array(
		array( 'lahore', 'Interior design in Lahore', 'studio', 'Gulberg III studio, material library, 3D suite, Woodex Furniture. Where Wellstar DHA was designed and executed.' ),
		array( 'karachi', 'Interior design in Karachi', 'studio', 'Clifton studio. Coastal light, retail hours, hospitality that lasts a Saturday.' ),
		array( 'islamabad', 'Interior design in Islamabad', 'studio', 'F-7 studio. North execution. Quieter rooms, stricter envelopes.' ),
		array( 'rawalpindi', 'Interior design in Rawalpindi', 'nationwide', 'Served from Islamabad. Same process. Site by appointment.' ),
		array( 'faisalabad', 'Interior design in Faisalabad', 'nationwide', 'Nationwide execution. Survey, 3D, BOQ, site from Lahore.' ),
		array( 'multan', 'Interior design in Multan', 'nationwide', 'Heat, courtyards, renovation of old bones. Survey first.' ),
		array( 'peshawar', 'Interior design in Peshawar', 'nationwide', 'Nationwide. We fly the still, then the team.' ),
		array( 'quetta', 'Interior design in Quetta', 'nationwide', 'Nationwide. Climate and structure decide the plan.' ),
		array( 'sialkot', 'Interior design in Sialkot', 'nationwide', 'Workplaces and homes. Served from Lahore.' ),
		array( 'gujranwala', 'Interior design in Gujranwala', 'nationwide', 'Nationwide. Same seven gates.' ),
		array( 'hyderabad', 'Interior design in Hyderabad', 'nationwide', 'Served from Karachi. Retail and homes.' ),
		array( 'bahawalpur', 'Interior design in Bahawalpur', 'nationwide', 'Nationwide. Survey, then 3D.' ),
	);
	$count = 0;
	foreach ( $items as $row ) {
		list( $slug, $title, $presence, $para ) = $row;
		if ( get_page_by_path( $slug, OBJECT, 'woodex_location' ) ) {
			continue;
		}
		$id = wp_insert_post(
			array(
				'post_type'    => 'woodex_location',
				'post_status'  => 'publish',
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_excerpt' => $para,
				'post_content' => $para,
				'meta_input'   => array( 'presence' => $presence ),
			)
		);
		if ( $id && ! is_wp_error( $id ) ) {
			++$count;
		}
	}
	return $count;
}

function woodex_seed_studies() {
	$items = array(
		array( 'contemporary-retreat', 'Contemporary retreat', 'A house that can gather' ),
		array( 'urban-living-concept', 'Urban living', 'The long table in a small plan' ),
		array( 'spatial-innovation', 'Spatial innovation', 'Approve the volume first' ),
		array( 'concrete-harmony', 'Concrete harmony', 'Survey, then courtyard' ),
		array( 'minimal-space-design', 'Minimal space', 'Path and pause' ),
		array( 'modern-facade-study', 'Modern facade', 'The room and the building' ),
	);
	$count = 0;
	foreach ( $items as $row ) {
		list( $slug, $title, $h1 ) = $row;
		if ( get_page_by_path( $slug, OBJECT, 'woodex_study' ) ) {
			continue;
		}
		$id = wp_insert_post(
			array(
				'post_type'    => 'woodex_study',
				'post_status'  => 'publish',
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_excerpt' => 'Study. ' . $h1,
				'post_content' => $h1 . ' Labelled a study — not a fabricated award.',
			)
		);
		if ( $id && ! is_wp_error( $id ) ) {
			++$count;
		}
	}
	return $count;
}

function woodex_seed_insights() {
	$items = array(
		array( 'what-is-3d-visualization', 'What is 3D visualization?', 'A still is a meeting', '3d' ),
		array( 'interior-design-cost-pakistan', 'Interior design cost in Pakistan', 'Price without a BOQ is a guess', 'cost' ),
		array( 'design-vs-turnkey', 'Design vs turnkey execution', 'You can stop after the still', 'process' ),
		array( 'home-renovation-checklist', 'Home renovation checklist', 'Do not 3D a fiction', 'rooms' ),
		array( 'office-interior-guide', 'Office interior design guide', 'What workplace do you have?', 'rooms' ),
		array( 'restaurant-planning', 'Restaurant interior planning', 'Lunch and midnight are different plots', 'rooms' ),
		array( 'retail-shop-interior', 'Retail shop interiors', 'A shop is not a warehouse with lights', 'rooms' ),
	);
	$gates = array(
		'3d'      => '3D',
		'cost'    => 'Cost & BOQ',
		'rooms'   => 'Rooms',
		'process' => 'Process',
	);
	foreach ( $gates as $slug => $name ) {
		if ( ! term_exists( $slug, 'insight_gate' ) ) {
			wp_insert_term( $name, 'insight_gate', array( 'slug' => $slug ) );
		}
		if ( ! term_exists( $slug, 'category' ) ) {
			wp_insert_term( $name, 'category', array( 'slug' => $slug ) );
		}
	}
	$count = 0;
	foreach ( $items as $row ) {
		list( $slug, $title, $h1, $gate ) = $row;
		if ( get_page_by_path( $slug, OBJECT, 'post' ) ) {
			continue;
		}
		$id = wp_insert_post(
			array(
				'post_type'    => 'post',
				'post_status'  => 'publish',
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_excerpt' => $h1,
				'post_content' => '<p>' . esc_html( $h1 ) . '</p><p>500+ projects · founder ~20 years · execution 10+ years · ISO 9001.</p>',
			)
		);
		if ( $id && ! is_wp_error( $id ) ) {
			wp_set_object_terms( $id, $gate, 'insight_gate' );
			wp_set_object_terms( $id, $gate, 'category' );
			++$count;
		}
	}
	return $count;
}

function woodex_seed_menu( $page_ids ) {
	$menu_name = 'Woodex Primary';
	$menu      = wp_get_nav_menu_object( $menu_name );
	if ( ! $menu ) {
		$menu_id = wp_create_nav_menu( $menu_name );
	} else {
		$menu_id = (int) $menu->term_id;
	}
	$items = array( 'about', 'services', '3d-studio', 'projects', 'insights', 'contact' );
	foreach ( $items as $slug ) {
		if ( empty( $page_ids[ $slug ] ) ) {
			continue;
		}
		wp_update_nav_menu_item(
			$menu_id,
			0,
			array(
				'menu-item-title'     => $page_ids[ $slug ]['title'],
				'menu-item-object'    => 'page',
				'menu-item-object-id' => $page_ids[ $slug ]['id'],
				'menu-item-type'      => 'post_type',
				'menu-item-status'    => 'publish',
			)
		);
	}
	$locations            = get_theme_mod( 'nav_menu_locations', array() );
	$locations['primary'] = $menu_id;
	set_theme_mod( 'nav_menu_locations', $locations );
	return $menu_id;
}

function woodex_save_library_template( $title, $elements, $type = 'page' ) {
	$id = wp_insert_post(
		array(
			'post_title'  => $title,
			'post_status' => 'publish',
			'post_type'   => 'elementor_library',
		)
	);
	if ( ! $id || is_wp_error( $id ) ) {
		return 0;
	}
	woodex_apply_elementor( $id, $elements, $type );
	update_post_meta( $id, '_elementor_template_type', $type );
	return (int) $id;
}

function woodex_run_installer() {
	if ( ! function_exists( 'woodex_tpl_catalog' ) ) {
		return 'Template catalog missing.';
	}
	woodex_register_cpts();
	$created = array();
	$page_ids = array();
	foreach ( woodex_tpl_catalog() as $key => $item ) {
		$id = woodex_upsert_page( $item['title'], $item['slug'] );
		if ( $id ) {
			woodex_apply_elementor( $id, woodex_tpl_for( $key ) );
			$page_ids[ $item['slug'] ] = array( 'id' => $id, 'title' => $item['title'] );
			$created[] = $item['slug'];
			if ( ! empty( $item['front'] ) ) {
				update_option( 'show_on_front', 'page' );
				update_option( 'page_on_front', $id );
			}
		}
	}
	$svc  = woodex_seed_services();
	$loc  = woodex_seed_locations();
	$stu  = woodex_seed_studies();
	$ins  = woodex_seed_insights();
	woodex_seed_menu( $page_ids );
	woodex_save_library_template( 'Woodex Home', woodex_tpl_home(), 'page' );
	woodex_save_library_template( 'Woodex 3D Studio', woodex_tpl_3d(), 'page' );
	flush_rewrite_rules();
	$theme = wp_get_theme();
	$note  = ( 'WX Theme' === $theme->get( 'Name' ) || 'wx-theme' === $theme->get_stylesheet() )
		? ' Theme: WX Theme.'
		: ' Activate WX Theme (parent) for the intended chrome.';
	return sprintf(
		'Pages: %s. Services %d. Locations %d. Studies %d. Insights %d. Home assigned. Menu set.%s',
		implode( ', ', $created ),
		$svc,
		$loc,
		$stu,
		$ins,
		$note
	);
}
