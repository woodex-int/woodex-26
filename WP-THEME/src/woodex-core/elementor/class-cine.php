<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Woodex_Widget_Cine extends \Elementor\Widget_Base {
	public function get_name() {
		return 'woodex-cine';
	}
	public function get_title() {
		return 'Woodex Cine';
	}
	public function get_icon() {
		return 'eicon-slider-video';
	}
	public function get_categories() {
		return array( 'woodex' );
	}

	protected function register_controls() {
		$this->start_controls_section( 'sec', array( 'label' => 'Cine' ) );
		$this->add_control( 'mode', array( 'label' => 'Mode', 'type' => \Elementor\Controls_Manager::SELECT, 'default' => 'short', 'options' => array( 'short' => 'Short (inner)', 'full' => 'Full (3D Studio)' ) ) );
		$this->add_control( 'crumbs', array( 'label' => 'Crumbs', 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Home · Page' ) );
		$this->add_control( 'eye', array( 'label' => 'Eye', 'type' => \Elementor\Controls_Manager::TEXT ) );
		$this->add_control( 'title', array( 'label' => 'H1', 'type' => \Elementor\Controls_Manager::TEXTAREA, 'default' => 'See it. Understand it. Build it.' ) );
		$this->add_control( 'copy', array( 'label' => 'Paragraph', 'type' => \Elementor\Controls_Manager::TEXTAREA ) );
		$this->add_control( 'cta', array( 'label' => 'CTA', 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Start your project' ) );
		$this->add_control( 'url', array( 'label' => 'CTA URL', 'type' => \Elementor\Controls_Manager::URL ) );
		$this->add_control( 'image', array( 'label' => 'Image', 'type' => \Elementor\Controls_Manager::MEDIA ) );
		$this->end_controls_section();
	}

	protected function render() {
		$s    = $this->get_settings_for_display();
		$mode = 'full' === $s['mode'] ? 'cine-hero' : 'cine-hero cine-short';
		$url  = ! empty( $s['url']['url'] ) ? $s['url']['url'] : home_url( '/start-your-project/' );
		$src  = ! empty( $s['image']['url'] ) ? $s['image']['url'] : '';
		echo '<section class="wx-cine ' . esc_attr( $mode ) . '">';
		if ( $s['crumbs'] ) {
			echo '<p class="cine-crumbs">' . esc_html( $s['crumbs'] ) . '</p>';
		}
		echo '<div class="cine-bg" aria-hidden="true"><div class="cine-slide is-on">';
		if ( $src ) {
			echo '<img src="' . esc_url( $src ) . '" alt="" />';
		}
		echo '</div><div class="cine-shade"></div></div><div class="cine-inner">';
		if ( $s['eye'] ) {
			echo '<p class="cine-eye">' . esc_html( $s['eye'] ) . '</p>';
		}
		echo '<h1>' . wp_kses_post( nl2br( esc_html( $s['title'] ) ) ) . '</h1>';
		echo '<div class="cine-row"><a class="btn btn-light" href="' . esc_url( $url ) . '"><span class="btn-label"><span>' . esc_html( $s['cta'] ) . '</span><span>' . esc_html( $s['cta'] ) . '</span></span><span class="btn-icon">→</span></a>';
		if ( $s['copy'] ) {
			echo '<p>' . esc_html( $s['copy'] ) . '</p>';
		}
		echo '</div></div></section>';
	}
}
