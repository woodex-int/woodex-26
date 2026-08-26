<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
</main>
<footer class="site-footer">
	<div class="container">
		<div class="footer-top">
			<div>
				<h3><?php esc_html_e( 'Stay connected with us', 'woodex' ); ?></h3>
				<p style="margin-bottom:22px"><?php esc_html_e( 'Have a space in mind? Tell us what you have and where you are in the process.', 'woodex' ); ?></p>
				<?php echo woodex_btn( woodex_url( '/start-your-project/' ), __( 'Start your project', 'woodex' ), 'btn btn-light' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</div>
			<div>
				<h4><?php esc_html_e( 'Practice', 'woodex' ); ?></h4>
				<div class="footer-links">
					<a href="<?php echo esc_url( woodex_url( '/about/' ) ); ?>"><?php esc_html_e( 'About', 'woodex' ); ?></a>
					<a href="<?php echo esc_url( woodex_url( '/process/' ) ); ?>"><?php esc_html_e( 'Process', 'woodex' ); ?></a>
					<a href="<?php echo esc_url( woodex_url( '/woodex-craft/' ) ); ?>"><?php esc_html_e( 'Woodex Craft', 'woodex' ); ?></a>
					<a href="<?php echo esc_url( woodex_url( '/3d-studio/' ) ); ?>"><?php esc_html_e( '3D Studio', 'woodex' ); ?></a>
					<a href="<?php echo esc_url( woodex_url( '/careers/' ) ); ?>"><?php esc_html_e( 'Careers', 'woodex' ); ?></a>
				</div>
			</div>
			<div>
				<h4><?php esc_html_e( 'Explore', 'woodex' ); ?></h4>
				<div class="footer-links">
					<a href="<?php echo esc_url( woodex_url( '/services/' ) ); ?>"><?php esc_html_e( 'Services', 'woodex' ); ?></a>
					<a href="<?php echo esc_url( woodex_url( '/projects/' ) ); ?>"><?php esc_html_e( 'Projects', 'woodex' ); ?></a>
					<a href="<?php echo esc_url( woodex_url( '/locations/' ) ); ?>"><?php esc_html_e( 'Locations', 'woodex' ); ?></a>
					<a href="<?php echo esc_url( woodex_url( '/insights/' ) ); ?>"><?php esc_html_e( 'Insights', 'woodex' ); ?></a>
					<a href="<?php echo esc_url( woodex_url( '/faq/' ) ); ?>"><?php esc_html_e( 'FAQ', 'woodex' ); ?></a>
					<a href="<?php echo esc_url( woodex_url( '/contact/' ) ); ?>"><?php esc_html_e( 'Contact', 'woodex' ); ?></a>
				</div>
			</div>
			<div>
				<h4><?php esc_html_e( 'Get in touch', 'woodex' ); ?></h4>
				<div class="footer-links">
					<a href="mailto:studio@woodex.interior">studio@woodex.interior</a>
					<a href="https://wa.me/923224000768?text=Hello%20Woodex%20%E2%80%94%20I%20have%20a%20space%20in%20mind." target="_blank" rel="noopener"><?php esc_html_e( 'WhatsApp Woodex', 'woodex' ); ?></a>
					<a href="tel:+923362259477"><?php esc_html_e( 'Call +92 336 2259477', 'woodex' ); ?></a>
					<p>LG 90 Link Road, Model Town<br />Lahore, Pakistan<br /><?php esc_html_e( 'Office 10:00 – 8:30', 'woodex' ); ?></p>
				</div>
			</div>
		</div>
		<div class="giant">INTERIORS</div>
		<div class="footer-bottom">
			<p>© <span data-year><?php echo esc_html( gmdate( 'Y' ) ); ?></span> Woodex Interior.</p>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
