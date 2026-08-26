<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'elementor/widgets/register',
	function ( $widgets_manager ) {
		require_once WOODEX_CORE_PATH . 'elementor/class-hero-slider.php';
		require_once WOODEX_CORE_PATH . 'elementor/class-cine.php';
		require_once WOODEX_CORE_PATH . 'elementor/class-ticker.php';
		require_once WOODEX_CORE_PATH . 'elementor/class-gates.php';
		require_once WOODEX_CORE_PATH . 'elementor/class-brief-form.php';
		$widgets_manager->register( new \Woodex_Widget_Hero_Slider() );
		$widgets_manager->register( new \Woodex_Widget_Cine() );
		$widgets_manager->register( new \Woodex_Widget_Ticker() );
		$widgets_manager->register( new \Woodex_Widget_Gates() );
		$widgets_manager->register( new \Woodex_Widget_Brief_Form() );
	}
);

add_action(
	'elementor/elements/categories_registered',
	function ( $elements ) {
		$elements->add_category(
			'woodex',
			array(
				'title' => 'Woodex',
				'icon'  => 'fa fa-plug',
			)
		);
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style( 'woodex-hero', WOODEX_CORE_URL . 'assets/hero.css', array(), WOODEX_CORE_VER );
		wp_enqueue_style( 'woodex-widgets', WOODEX_CORE_URL . 'assets/widgets.css', array( 'woodex-hero' ), WOODEX_CORE_VER );
		wp_enqueue_script( 'woodex-widgets', WOODEX_CORE_URL . 'assets/widgets.js', array(), WOODEX_CORE_VER, true );
	}
);
