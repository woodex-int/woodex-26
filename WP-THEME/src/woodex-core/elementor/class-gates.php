<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Woodex_Widget_Gates extends \Elementor\Widget_Base {
	public function get_name() {
		return 'woodex-gates';
	}
	public function get_title() {
		return 'Woodex Gates';
	}
	public function get_icon() {
		return 'eicon-number-field';
	}
	public function get_categories() {
		return array( 'woodex' );
	}

	protected function register_controls() {
		$this->start_controls_section( 'sec', array( 'label' => 'Gates' ) );
		$this->add_control( 'heading', array( 'label' => 'Heading', 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Discover → Design → Visualize → Plan → Build → Install → Deliver' ) );
		$rep = new \Elementor\Repeater();
		$rep->add_control( 'n', array( 'label' => 'N', 'type' => \Elementor\Controls_Manager::TEXT ) );
		$rep->add_control( 'title', array( 'label' => 'Title', 'type' => \Elementor\Controls_Manager::TEXT ) );
		$rep->add_control( 'note', array( 'label' => 'Note', 'type' => \Elementor\Controls_Manager::TEXTAREA ) );
		$this->add_control(
			'gates',
			array(
				'type'    => \Elementor\Controls_Manager::REPEATER,
				'fields'  => $rep->get_controls(),
				'default' => array(
					array( 'n' => '01', 'title' => 'Discover', 'note' => 'What you have.' ),
					array( 'n' => '02', 'title' => 'Design', 'note' => 'Direction you can refuse.' ),
					array( 'n' => '03', 'title' => 'Visualize', 'note' => 'Stills first.' ),
					array( 'n' => '04', 'title' => 'Plan', 'note' => 'Budget + BOQ.' ),
					array( 'n' => '05', 'title' => 'Build', 'note' => 'Optional.' ),
					array( 'n' => '06', 'title' => 'Install', 'note' => 'Mill and site.' ),
					array( 'n' => '07', 'title' => 'Deliver', 'note' => 'Handover.' ),
				),
				'title_field' => '{{{ n }}} {{{ title }}}',
			)
		);
		$this->end_controls_section();
	}

	protected function render() {
		$s = $this->get_settings_for_display();
		echo '<section class="wx-gates"><h2>' . esc_html( $s['heading'] ) . '</h2><ol class="wx-gates-list">';
		foreach ( $s['gates'] as $g ) {
			echo '<li><span class="n">' . esc_html( $g['n'] ) . '</span><h3>' . esc_html( $g['title'] ) . '</h3><p>' . esc_html( $g['note'] ) . '</p></li>';
		}
		echo '</ol></section>';
	}
}
