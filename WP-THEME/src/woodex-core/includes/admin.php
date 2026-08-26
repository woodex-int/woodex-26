<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'admin_menu',
	function () {
		add_management_page(
			'Woodex Setup',
			'Woodex Setup',
			'manage_options',
			'woodex-setup',
			'woodex_setup_page'
		);
	}
);

function woodex_setup_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	$notice = '';
	if ( isset( $_POST['woodex_install'] ) && check_admin_referer( 'woodex_install' ) ) {
		$report = woodex_run_installer();
		$notice = '<div class="notice notice-success"><p>' . esc_html( $report ) . '</p></div>';
	}
	?>
	<div class="wrap">
		<h1>Woodex Setup</h1>
		<?php echo $notice; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		<p>Creates core pages, menus, CPT shells and Elementor documents. Does not restyle Home or 3D Studio. Does not invent testimonials.</p>
		<p><strong>Proof:</strong> 500+ projects · founder ~20 years · execution 10+ years · ISO 9001</p>
		<p>Studio: LG 90 Link Road, Model Town, Lahore · 10:00–8:30</p>
		<p>WhatsApp +92 322 4000768 · Call +92 336 2259477</p>
		<form method="post">
			<?php wp_nonce_field( 'woodex_install' ); ?>
			<p><button class="button button-primary" name="woodex_install" value="1">Install pages and templates</button></p>
		</form>
		<p>After install: Settings → Reading → homepage = Home. Permalinks → Post name. Elementor → Features → Flexbox Container On.</p>
	</div>
	<?php
}
