<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function woodex_el_id() {
	return substr( md5( uniqid( (string) wp_rand(), true ) ), 0, 7 );
}

function woodex_el_widget( $type, $settings = array() ) {
	return array(
		'id'         => woodex_el_id(),
		'elType'     => 'widget',
		'isInner'    => false,
		'widgetType' => $type,
		'settings'   => $settings,
		'elements'   => array(),
	);
}

function woodex_el_container( $elements, $settings = array() ) {
	$defaults = array(
		'content_width'  => 'full',
		'flex_direction' => 'column',
		'padding'        => array(
			'unit'     => 'px',
			'top'      => '0',
			'right'    => '0',
			'bottom'   => '0',
			'left'     => '0',
			'isLinked' => true,
		),
	);
	return array(
		'id'       => woodex_el_id(),
		'elType'   => 'container',
		'isInner'  => false,
		'settings' => array_merge( $defaults, $settings ),
		'elements' => $elements,
	);
}

function woodex_el_padded( $elements ) {
	return woodex_el_container(
		$elements,
		array(
			'content_width' => 'boxed',
			'boxed_width'   => array( 'unit' => 'px', 'size' => 1320 ),
			'padding'       => array(
				'unit'     => 'px',
				'top'      => '96',
				'right'    => '32',
				'bottom'   => '96',
				'left'     => '32',
				'isLinked' => false,
			),
		)
	);
}

function woodex_el_heading( $title, $tag = 'h2' ) {
	return woodex_el_widget(
		'heading',
		array(
			'title'       => $title,
			'header_size' => $tag,
		)
	);
}

function woodex_el_text( $html ) {
	return woodex_el_widget( 'text-editor', array( 'editor' => $html ) );
}

function woodex_el_button( $label, $url ) {
	return woodex_el_widget(
		'button',
		array(
			'text' => $label,
			'link' => array( 'url' => $url ),
		)
	);
}

function woodex_tpl_home() {
	$slides = array(
		array(
			'_id'    => woodex_el_id(),
			'kicker' => 'Drawn. Then built.',
			'h1a'    => 'We turn ideas',
			'h1b'    => 'into spaces',
			'copy'   => 'Start with what you have. Plan, 3D, then budget and BOQ if you want it built.',
			'cta'    => 'Start your project',
			'url'    => array( 'url' => home_url( '/start-your-project/' ) ),
		),
		array(
			'_id'    => woodex_el_id(),
			'kicker' => 'One partner',
			'h1a'    => 'Concept to',
			'h1b'    => 'completion',
			'copy'   => 'Designers, in-house 3D, execution and the mill — one studio. Not a moodboard plus a contractor hunt.',
			'cta'    => 'Explore interiors',
			'url'    => array( 'url' => home_url( '/services/' ) ),
		),
		array(
			'_id'    => woodex_el_id(),
			'kicker' => 'See it first',
			'h1a'    => 'Approved visual.',
			'h1b'    => 'Built reality.',
			'copy'   => '3D is how a family or a board decides. Stills first. Then budget and BOQ. Then the mill and the site — if that is the brief.',
			'cta'    => 'Open 3D Studio',
			'url'    => array( 'url' => home_url( '/3d-studio/' ) ),
		),
	);
	return array(
		woodex_el_container(
			array(
				woodex_el_widget(
					'woodex-hero-slider',
					array(
						'slides'   => $slides,
						'duration' => 6800,
						'labels'   => 'LAYOUT,DESIGN,CREATE',
					)
				),
			)
		),
		woodex_el_container(
			array(
				woodex_el_widget(
					'woodex-ticker',
					array(
						'words' => array(
							array( '_id' => woodex_el_id(), 'word' => 'Design' ),
							array( '_id' => woodex_el_id(), 'word' => 'Visualize' ),
							array( '_id' => woodex_el_id(), 'word' => 'Plan' ),
							array( '_id' => woodex_el_id(), 'word' => 'Budget' ),
							array( '_id' => woodex_el_id(), 'word' => 'BOQ' ),
							array( '_id' => woodex_el_id(), 'word' => 'Execute' ),
							array( '_id' => woodex_el_id(), 'word' => 'Deliver' ),
						),
					)
				),
			)
		),
		woodex_el_padded(
			array(
				woodex_el_heading( 'The interiors you can actually commission', 'h2' ),
				woodex_el_text( '<p>Interior, commercial, residential, office, retail, brand shop. Same discipline as 3D Studio — not six cloned cards.</p>' ),
				woodex_el_button( 'Explore interiors', home_url( '/services/' ) ),
			)
		),
		woodex_el_padded(
			array(
				woodex_el_heading( 'See it. Understand it. Build it.', 'h2' ),
				woodex_el_text( '<p>3D is how a family or a board decides. Stills first. Then budget and BOQ. Then the mill and the site — if that is the brief.</p>' ),
				woodex_el_button( 'Open 3D Studio', home_url( '/3d-studio/' ) ),
			)
		),
		woodex_el_padded(
			array(
				woodex_el_heading( 'How a room is documented', 'h2' ),
				woodex_el_text( '<p>Survey, still, sheets. Then budget and BOQ if you want it built. Not a moodboard pack.</p>' ),
			)
		),
		woodex_el_padded(
			array(
				woodex_el_heading( '500+ projects · founder ~20 years · execution 10+ years · ISO 9001', 'h2' ),
				woodex_el_text( '<p>Studios in Gulberg III Lahore, Clifton Karachi, F-7 Islamabad. Named work: Wellstar Pharmacy → Cosmetics → Mini Hospital, DHA Lahore. Numbers are static. No 0→500 theatre. No 95%.</p>' ),
				woodex_el_button( 'Start your project', home_url( '/start-your-project/' ) ),
			)
		),
		woodex_el_padded(
			array(
				woodex_el_widget(
					'woodex-gates',
					array(
						'heading' => 'Discover → Design → Visualize → Plan → Build → Install → Deliver',
					)
				),
			)
		),
		woodex_el_padded(
			array(
				woodex_el_heading( 'Send the brief', 'h2' ),
				woodex_el_text( '<p>Tell us what you have and where you are. A studio lead replies within one working day.</p>' ),
				woodex_el_widget( 'woodex-brief-form', array( 'heading' => 'Tell us about your space' ) ),
			)
		),
	);
}

function woodex_tpl_3d() {
	return array(
		woodex_el_container(
			array(
				woodex_el_widget(
					'woodex-cine',
					array(
						'mode'   => 'full',
						'crumbs' => 'Home · 3D Studio',
						'eye'    => 'In-house 3D',
						'title'  => 'See it. Understand it. Build it.',
						'copy'   => 'Stills first. Then a walkthrough if the still is not enough. Then budget and BOQ if you want it built.',
						'cta'    => 'Start your project',
						'url'    => array( 'url' => home_url( '/start-your-project/' ) ),
					)
				),
			)
		),
		woodex_el_container(
			array(
				woodex_el_widget(
					'woodex-ticker',
					array(
						'words' => array(
							array( '_id' => woodex_el_id(), 'word' => 'Still' ),
							array( '_id' => woodex_el_id(), 'word' => 'Walkthrough' ),
							array( '_id' => woodex_el_id(), 'word' => '360' ),
							array( '_id' => woodex_el_id(), 'word' => 'Approve' ),
							array( '_id' => woodex_el_id(), 'word' => 'Budget' ),
							array( '_id' => woodex_el_id(), 'word' => 'BOQ' ),
						),
					)
				),
			)
		),
		woodex_el_padded(
			array(
				woodex_el_heading( 'You are not approving a plan. You are approving a room.', 'h2' ),
				woodex_el_text( '<p>This line lives on 3D Studio only. 3D does not invent a layout and call it design. Design first. Then the still.</p>' ),
			)
		),
		woodex_el_padded(
			array(
				woodex_el_widget( 'woodex-brief-form', array( 'heading' => 'Brief the 3D studio' ) ),
			)
		),
	);
}

function woodex_tpl_inner( $h1, $copy, $cine_mode = 'short', $phone = false ) {
	$els = array(
		woodex_el_container(
			array(
				woodex_el_widget(
					'woodex-cine',
					array(
						'mode'   => $cine_mode,
						'crumbs' => 'Home · ' . $h1,
						'title'  => $h1,
						'copy'   => $copy,
						'cta'    => 'Start your project',
						'url'    => array( 'url' => home_url( '/start-your-project/' ) ),
					)
				),
			)
		),
		woodex_el_padded(
			array(
				woodex_el_text( '<p>' . esc_html( $copy ) . '</p><p class="woodex-proof">500+ projects · founder ~20 years · execution 10+ years · ISO 9001. LG 90 Link Road, Model Town, Lahore · 10:00–8:30.</p>' ),
				woodex_el_button( 'Start your project', home_url( '/start-your-project/' ) ),
			)
		),
	);
	if ( $phone ) {
		$els[] = woodex_el_padded(
			array(
				woodex_el_widget(
					'woodex-brief-form',
					array(
						'heading'       => 'Tell us about your space',
						'require_phone' => 'yes',
					)
				),
			)
		);
	}
	return $els;
}

function woodex_tpl_catalog() {
	return array(
		'home'               => array( 'title' => 'Home', 'slug' => 'home', 'fn' => 'woodex_tpl_home', 'front' => true ),
		'about'              => array( 'title' => 'About', 'slug' => 'about', 'h1' => 'Design should be built, not presented', 'copy' => 'Woodex Interior — plan, in-house 3D and execution. 500+ projects. Founder ~20 years. Execution 10+ years. ISO 9001. Named client: Wellstar Pharmacy → Cosmetics → Mini Hospital, DHA Lahore.' ),
		'3d-studio'          => array( 'title' => '3D Studio', 'slug' => '3d-studio', 'fn' => 'woodex_tpl_3d' ),
		'services'           => array( 'title' => 'Services', 'slug' => 'services', 'h1' => 'You get a path from idea to space', 'copy' => 'Interior design, fit-out, industries and specialist rooms. DESIGN → VISUALIZE → PLAN → BUDGET → BOQ → EXECUTE → DELIVER.' ),
		'process'            => array( 'title' => 'Process', 'slug' => 'process', 'h1' => 'Drawn. Then built.', 'copy' => 'Discover → Design → Visualize → Plan (budget + BOQ) → Build → Install → Deliver. Fit-out has two routes: Woodex-designed, or your drawings after review.' ),
		'woodex-craft'       => array( 'title' => 'Woodex Craft', 'slug' => 'woodex-craft', 'h1' => 'Made for the room', 'copy' => 'Kitchens, wardrobes, reception desks, banquettes. Drawn, then built in the mill — not guessed on site.' ),
		'projects'           => array( 'title' => 'Projects', 'slug' => 'projects', 'h1' => 'Rooms drawn so they can be built', 'copy' => 'These are studies. Not a fake award wall. Wellstar is the named client story.' ),
		'client-stories'     => array( 'title' => 'Client stories', 'slug' => 'client-stories', 'h1' => 'Wellstar', 'copy' => 'Wellstar Pharmacy → Cosmetics → Mini Hospital, DHA Lahore. The only named client on this site.' ),
		'insights'           => array( 'title' => 'Insights', 'slug' => 'insights', 'h1' => 'Studio notes. Then the next gate.', 'copy' => 'Notes on 3D, cost, rooms and process. Not a magazine.' ),
		'locations'          => array( 'title' => 'Locations', 'slug' => 'locations', 'h1' => 'We work where the site is', 'copy' => 'Studios: Gulberg III Lahore, Clifton Karachi, F-7 Islamabad. Desk: LG 90 Link Road, Model Town, Lahore · 10:00–8:30. Nationwide survey, then 3D.' ),
		'start-your-project' => array( 'title' => 'Start your project', 'slug' => 'start-your-project', 'h1' => 'Tell us about your space', 'copy' => 'What you have. What you need. City. A studio lead replies within one working day.', 'form' => true ),
		'contact'            => array( 'title' => 'Contact', 'slug' => 'contact', 'h1' => 'Tell us what you have', 'copy' => 'WhatsApp +92 322 4000768. Call +92 336 2259477. studio@woodex.interior. LG 90 Link Road, Model Town, Lahore · 10:00–8:30.', 'form' => true, 'phone' => true ),
		'faq'                => array( 'title' => 'FAQ', 'slug' => 'faq', 'h1' => 'Questions, then the room', 'copy' => 'We do not invent a layout in 3D and call it design. We do not publish a square-foot rate. Unlimited free design is not a Woodex offer.' ),
		'careers'            => array( 'title' => 'Careers', 'slug' => 'careers', 'h1' => 'Come draw. Then build.', 'copy' => 'No fake openings. If a seat is open, it is listed here. Until then, send a brief of the work you have done.' ),
	);
}

function woodex_tpl_for( $key ) {
	$cat = woodex_tpl_catalog();
	if ( empty( $cat[ $key ] ) ) {
		return array();
	}
	$item = $cat[ $key ];
	if ( ! empty( $item['fn'] ) && function_exists( $item['fn'] ) ) {
		return call_user_func( $item['fn'] );
	}
	return woodex_tpl_inner(
		$item['h1'],
		$item['copy'],
		'short',
		! empty( $item['phone'] )
	);
}
