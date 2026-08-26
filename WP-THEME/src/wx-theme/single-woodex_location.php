<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
while ( have_posts() ) :
	the_post();
	$presence = get_post_meta( get_the_ID(), 'presence', true );
	?>
	<article <?php post_class( 'wx-page' ); ?>>
		<div class="container wx-page-inner">
			<p class="eyebrow"><?php echo 'studio' === $presence ? esc_html__( 'Studio', 'wx-theme' ) : esc_html__( 'Nationwide', 'wx-theme' ); ?></p>
			<h1><?php the_title(); ?></h1>
			<?php the_content(); ?>
			<p>LG 90 Link Road, Model Town, Lahore · 10:00–8:30</p>
			<p><?php echo woodex_btn( home_url( '/start-your-project/' ), __( 'Start your project', 'wx-theme' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
		</div>
	</article>
	<?php
endwhile;
get_footer();
