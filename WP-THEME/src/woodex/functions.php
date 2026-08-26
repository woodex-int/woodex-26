<?php
/**
 * Woodex — Hello Elementor child.
 * Tokens, chrome, mega, skip-link, reduced-motion. No Tailwind CDN.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'WOODEX_THEME_VER', '1.1.0' );

require_once get_stylesheet_directory() . '/inc/chrome.php';

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'custom-logo', array( 'width' => 180, 'height' => 48, 'flex-width' => true, 'flex-height' => true ) );
		add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script', 'comment-form', 'comment-list' ) );
		add_theme_support( 'align-wide' );
		add_theme_support( 'responsive-embeds' );
		register_nav_menus(
			array(
				'primary' => __( 'Primary', 'woodex' ),
				'footer'  => __( 'Footer practice', 'woodex' ),
			)
		);
		load_child_theme_textdomain( 'woodex', get_stylesheet_directory() . '/languages' );
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style(
			'hello-elementor',
			get_template_directory_uri() . '/style.css',
			array(),
			WOODEX_THEME_VER
		);
		wp_enqueue_style(
			'plus-jakarta',
			'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap',
			array(),
			null
		);
		$base = get_stylesheet_directory_uri() . '/assets/';
		wp_enqueue_style( 'woodex-tokens', $base . 'tokens.css', array( 'hello-elementor', 'plus-jakarta' ), WOODEX_THEME_VER );
		wp_enqueue_style( 'woodex-chrome', $base . 'chrome.css', array( 'woodex-tokens' ), WOODEX_THEME_VER );
		wp_enqueue_style( 'woodex-mega', $base . 'mega.css', array( 'woodex-chrome' ), WOODEX_THEME_VER );
		wp_enqueue_style( 'woodex-pages', $base . 'pages.css', array( 'woodex-mega' ), WOODEX_THEME_VER );
		wp_enqueue_style( 'woodex-blog-two', $base . 'blog-two.css', array( 'woodex-pages' ), WOODEX_THEME_VER );
		wp_enqueue_style( 'woodex-reduced', $base . 'reduced-motion.css', array( 'woodex-blog-two' ), WOODEX_THEME_VER );
		wp_enqueue_script( 'woodex-site', $base . 'site.js', array(), WOODEX_THEME_VER, true );
	}
);

add_action(
	'wp_body_open',
	function () {
		echo '<a class="skip-link" href="#content">' . esc_html__( 'Skip to content', 'woodex' ) . '</a>';
	}
);

add_filter(
	'body_class',
	function ( $classes ) {
		$classes[] = 'woodex';
		if ( ! is_front_page() && ! is_page( '3d-studio' ) ) {
			$classes[] = 'light-page';
		}
		return $classes;
	}
);

function woodex_is_elementor_page( $post_id = 0 ) {
	$post_id = $post_id ? $post_id : get_the_ID();
	if ( ! $post_id || ! class_exists( '\Elementor\Plugin' ) ) {
		return false;
	}
	$doc = \Elementor\Plugin::$instance->documents->get( $post_id );
	return $doc && $doc->is_built_with_elementor();
}

add_action(
	'widgets_init',
	function () {
		register_sidebar(
			array(
				'name'          => __( 'Footer note', 'woodex' ),
				'id'            => 'footer-note',
				'before_widget' => '<div class="widget">',
				'after_widget'  => '</div>',
				'before_title'  => '<h4>',
				'after_title'   => '</h4>',
			)
		);
	}
);
