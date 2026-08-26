<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'custom-logo', array( 'width' => 180, 'height' => 48, 'flex-width' => true, 'flex-height' => true ) );
		add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script', 'comment-form', 'comment-list' ) );
		add_theme_support( 'align-wide' );
		add_theme_support( 'responsive-embeds' );
		add_theme_support( 'editor-styles' );
		register_nav_menus(
			array(
				'primary' => __( 'Primary', 'wx-theme' ),
				'footer'  => __( 'Footer practice', 'wx-theme' ),
			)
		);
		load_theme_textdomain( 'wx-theme', WX_THEME_PATH . '/languages' );
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		$css = WX_THEME_URL . '/assets/css/';
		wp_enqueue_style(
			'plus-jakarta',
			'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap',
			array(),
			null
		);
		wp_enqueue_style( 'wx-tokens', $css . 'tokens.css', array( 'plus-jakarta' ), WX_THEME_VER );
		wp_enqueue_style( 'wx-chrome', $css . 'chrome.css', array( 'wx-tokens' ), WX_THEME_VER );
		wp_enqueue_style( 'wx-mega', $css . 'mega.css', array( 'wx-chrome' ), WX_THEME_VER );
		wp_enqueue_style( 'wx-pages', $css . 'pages.css', array( 'wx-mega' ), WX_THEME_VER );
		wp_enqueue_style( 'wx-blog-two', $css . 'blog-two.css', array( 'wx-pages' ), WX_THEME_VER );
		wp_enqueue_style( 'wx-builder', $css . 'wx-builder.css', array( 'wx-blog-two' ), WX_THEME_VER );
		wp_enqueue_style( 'wx-qa', $css . 'qa.css', array( 'wx-builder' ), WX_THEME_VER );
		wp_enqueue_style( 'wx-reduced', $css . 'reduced-motion.css', array( 'wx-qa' ), WX_THEME_VER );
		wp_enqueue_script( 'wx-chrome', WX_THEME_URL . '/assets/js/chrome.js', array(), WX_THEME_VER, true );
	}
);

add_action(
	'wp_body_open',
	function () {
		echo '<a class="skip-link" href="#content">' . esc_html__( 'Skip to content', 'wx-theme' ) . '</a>';
	}
);

add_filter(
	'body_class',
	function ( $classes ) {
		$classes[] = 'woodex';
		$classes[] = 'wx-theme';
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
	'after_setup_theme',
	function () {
		if ( ! isset( $GLOBALS['content_width'] ) ) {
			$GLOBALS['content_width'] = 1320;
		}
	},
	0
);
