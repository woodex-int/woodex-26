<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Woodex_Widget_Hero_Slider extends \Elementor\Widget_Base {
	public function get_name() {
		return 'woodex-hero-slider';
	}
	public function get_title() {
		return 'Woodex Hero Slider';
	}
	public function get_icon() {
		return 'eicon-slider-push';
	}
	public function get_categories() {
		return array( 'woodex' );
	}

	protected function register_controls() {
		$this->start_controls_section( 'sec', array( 'label' => 'Slides' ) );
		$rep = new \Elementor\Repeater();
		$rep->add_control( 'image', array( 'label' => 'Image', 'type' => \Elementor\Controls_Manager::MEDIA ) );
		$rep->add_control( 'kicker', array( 'label' => 'Kicker', 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Drawn. Then built.' ) );
		$rep->add_control( 'h1a', array( 'label' => 'H1 line 1', 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'We turn ideas' ) );
		$rep->add_control( 'h1b', array( 'label' => 'H1 line 2', 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'into spaces' ) );
		$rep->add_control( 'copy', array( 'label' => 'Paragraph', 'type' => \Elementor\Controls_Manager::TEXTAREA ) );
		$rep->add_control( 'cta', array( 'label' => 'CTA label', 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Start your project' ) );
		$rep->add_control( 'url', array( 'label' => 'CTA URL', 'type' => \Elementor\Controls_Manager::URL ) );
		$this->add_control(
			'slides',
			array(
				'label'   => 'Slides (keep 3)',
				'type'    => \Elementor\Controls_Manager::REPEATER,
				'fields'  => $rep->get_controls(),
				'default' => array(
					array(
						'kicker' => 'Drawn. Then built.',
						'h1a'    => 'We turn ideas',
						'h1b'    => 'into spaces',
						'copy'   => 'Start with what you have. Plan, 3D, then budget and BOQ if you want it built.',
						'cta'    => 'Start your project',
					),
					array(
						'kicker' => 'One partner',
						'h1a'    => 'Concept to',
						'h1b'    => 'completion',
						'copy'   => 'Designers, in-house 3D, execution and the mill — one studio. Not a moodboard plus a contractor hunt.',
						'cta'    => 'Explore interiors',
					),
					array(
						'kicker' => 'See it first',
						'h1a'    => 'Approved visual.',
						'h1b'    => 'Built reality.',
						'copy'   => '3D is how a family or a board decides. Stills first. Then budget and BOQ. Then the mill and the site — if that is the brief.',
						'cta'    => 'Open 3D Studio',
					),
				),
				'title_field' => '{{{ h1a }}} {{{ h1b }}}',
			)
		);
		$this->add_control( 'duration', array( 'label' => 'Duration ms', 'type' => \Elementor\Controls_Manager::NUMBER, 'default' => 6800 ) );
		$this->add_control( 'labels', array( 'label' => 'Index words', 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'LAYOUT,DESIGN,CREATE' ) );
		$this->end_controls_section();
	}

	protected function render() {
		$s      = $this->get_settings_for_display();
		$slides = $s['slides'] ? $s['slides'] : array();
		$labels = array_map( 'trim', explode( ',', $s['labels'] ? $s['labels'] : 'LAYOUT,DESIGN,CREATE' ) );
		$side   = array( 'Layout', 'Design', 'Create' );
		echo '<section class="wx-hero hero" data-duration="' . esc_attr( $s['duration'] ) . '" data-labels="' . esc_attr( implode( ',', $labels ) ) . '" aria-label="Featured stories">';
		echo '<div class="hero-slides">';
		foreach ( $slides as $n => $slide ) {
			$on  = 0 === $n ? ' is-active' : '';
			$src = ! empty( $slide['image']['url'] ) ? $slide['image']['url'] : '';
			$url = ! empty( $slide['url']['url'] ) ? $slide['url']['url'] : home_url( '/start-your-project/' );
			echo '<article class="hero-slide' . esc_attr( $on ) . '">';
			echo '<div class="media">';
			if ( $src ) {
				echo '<img src="' . esc_url( $src ) . '" alt="" />';
			}
			echo '</div><div class="hero-overlay"></div><div class="hero-content"><div class="container">';
			echo '<p class="hero-label"><i></i> ' . esc_html( $slide['kicker'] ) . '</p>';
			echo '<h1><span class="line"><span>' . esc_html( $slide['h1a'] ) . '</span></span>';
			echo '<span class="line"><span>' . esc_html( $slide['h1b'] ) . '</span></span></h1>';
			echo '<div class="hero-cta"><a class="btn btn-light" href="' . esc_url( $url ) . '">';
			echo '<span class="btn-label"><span>' . esc_html( $slide['cta'] ) . '</span><span>' . esc_html( $slide['cta'] ) . '</span></span>';
			echo '<span class="btn-icon" aria-hidden="true">→</span></a>';
			if ( ! empty( $slide['copy'] ) ) {
				echo '<p class="hero-copy">' . esc_html( $slide['copy'] ) . '</p>';
			}
			echo '</div></div></div></article>';
		}
		echo '</div>';
		echo '<div class="hero-side" aria-hidden="true">';
		foreach ( $side as $n => $lab ) {
			echo '<span' . ( 0 === $n ? ' class="is-on"' : '' ) . '>' . esc_html( $lab ) . '</span>';
		}
		echo '</div><div class="hero-lines" aria-hidden="true"><i></i><i></i><i></i><i></i></div>';
		echo '<div class="hero-index" aria-hidden="true">' . esc_html( $labels[0] ) . '</div>';
		echo '<div class="hero-nav"><div class="hero-nav-inner"><div class="hero-pips" role="tablist">';
		foreach ( $slides as $n => $_ ) {
			$on = 0 === $n ? ' is-active' : '';
			printf( '<button class="hero-pip%s" type="button"><span>%02d</span><span class="track"><i></i></span></button>', esc_attr( $on ), $n + 1 );
		}
		echo '</div><div class="hero-arrows">';
		echo '<button class="hero-arrow wx-hero-prev" type="button" aria-label="Previous">←</button>';
		echo '<button class="hero-arrow wx-hero-next" type="button" aria-label="Next">→</button>';
		echo '</div></div></div></section>';
	}
}
