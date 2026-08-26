<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Woodex_Widget_Brief_Form extends \Elementor\Widget_Base {
	public function get_name() {
		return 'woodex-brief-form';
	}
	public function get_title() {
		return 'Woodex Brief Form';
	}
	public function get_icon() {
		return 'eicon-form-horizontal';
	}
	public function get_categories() {
		return array( 'woodex' );
	}

	protected function register_controls() {
		$this->start_controls_section( 'sec', array( 'label' => 'Form' ) );
		$this->add_control( 'heading', array( 'label' => 'Heading', 'type' => \Elementor\Controls_Manager::TEXT, 'default' => 'Tell us about your space' ) );
		$this->add_control( 'require_phone', array( 'label' => 'Phone required', 'type' => \Elementor\Controls_Manager::SWITCHER, 'default' => '' ) );
		$this->end_controls_section();
	}

	protected function render() {
		$s    = $this->get_settings_for_display();
		$req  = 'yes' === $s['require_phone'];
		$ep   = esc_url_raw( rest_url( 'woodex/v1/brief' ) );
		$nonc = wp_create_nonce( 'wp_rest' );
		echo '<section class="wx-brief"><h2>' . esc_html( $s['heading'] ) . '</h2>';
		echo '<form class="wx-brief-form form" data-endpoint="' . esc_attr( $ep ) . '" data-nonce="' . esc_attr( $nonc ) . '">';
		echo '<p class="field"><label>Name</label><input name="name" required /></p>';
		echo '<p class="field"><label>Email</label><input name="email" type="email" required /></p>';
		echo '<p class="field"><label>Phone</label><input name="phone"' . ( $req ? ' required' : '' ) . ' /></p>';
		echo '<p class="field"><label>City</label><select name="city"><option>Lahore</option><option>Karachi</option><option>Islamabad</option><option>Other Pakistan</option></select></p>';
		echo '<p class="field"><label>What do you have?</label><select name="have"><option>Empty space</option><option>Floor plan</option><option>Existing design</option><option>Brand guidelines</option><option>Reference images</option><option>Existing space / renovation</option><option>Nothing yet</option></select></p>';
		echo '<p class="field"><label>What do you need?</label><select name="need"><option>Interior design</option><option>3D visualization</option><option>Design + execution</option><option>Execution only</option><option>Renovation</option><option>Joinery / furniture</option></select></p>';
		echo '<p class="field"><label>Notes</label><textarea name="message" required></textarea></p>';
		echo '<button class="btn" type="submit"><span class="btn-label"><span>Send the brief</span><span>Send the brief</span></span><span class="btn-icon">→</span></button>';
		echo '<p class="form-note"></p></form></section>';
	}
}
