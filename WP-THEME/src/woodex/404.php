<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
?>
<section class="err">
	<div>
		<h1><?php esc_html_e( 'This room does not exist', 'woodex' ); ?></h1>
		<p><?php esc_html_e( 'The page was moved, or the URL was never a room. Start again from Home, or send the brief.', 'woodex' ); ?></p>
		<div class="row">
			<?php echo woodex_btn( home_url( '/' ), __( 'Back to Home', 'woodex' ), 'btn btn-light' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			<?php echo woodex_btn( home_url( '/start-your-project/' ), __( 'Start your project', 'woodex' ), 'btn btn-light' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</div>
	</div>
</section>
<?php
get_footer();
