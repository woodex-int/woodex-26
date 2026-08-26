<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Woodex_Widget_Ticker extends \Elementor\Widget_Base {
	public function get_name() {
		return 'woodex-ticker';
	}
	public function get_title() {
		return 'Woodex Ticker';
	}
	public function get_icon() {
		return 'eicon-animation-text';
	}
	public function get_categories() {
		return array( 'woodex' );
	}

	protected function register_controls() {
		$this->start_controls_section( 'sec', array( 'label' => 'Words' ) );
		$rep = new \Elementor\Repeater();
		$rep->add_control( 'word', array( 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Plan' ) );
		$this->add_control(
			'words',
			array(
				'type'    => \Elementor\Controls_Manager::REPEATER,
				'fields'  => $rep->get_controls(),
				'default' => array(
					array( 'word' => 'Plan' ),
					array( 'word' => '3D' ),
					array( 'word' => 'Budget' ),
					array( 'word' => 'BOQ' ),
					array( 'word' => 'Build' ),
					array( 'word' => 'Deliver' ),
				),
				'title_field' => '{{{ word }}}',
			)
		);
		$this->end_controls_section();
	}

	protected function render() {
		$s     = $this->get_settings_for_display();
		$words = $s['words'] ? $s['words'] : array();
		echo '<div class="st-ticker wx-ticker" aria-hidden="true"><div class="st-ticker-track wx-ticker-track">';
		for ( $i = 0; $i < 2; $i++ ) {
			foreach ( $words as $w ) {
				echo '<span>' . esc_html( $w['word'] ) . '</span>';
			}
		}
		echo '</div></div>';
	}
}
