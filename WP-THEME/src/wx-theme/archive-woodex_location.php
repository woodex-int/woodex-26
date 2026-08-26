<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
?>
<section class="wx-archive">
	<div class="container">
		<h1><?php esc_html_e( 'We work where the site is', 'wx-theme' ); ?></h1>
		<p class="woodex-proof">Studios: Gulberg III Lahore, Clifton Karachi, F-7 Islamabad. Desk: LG 90 Link Road, Model Town · 10:00–8:30.</p>
		<?php if ( have_posts() ) : ?>
			<ol class="b2-list">
				<?php
				while ( have_posts() ) :
					the_post();
					$presence = get_post_meta( get_the_ID(), 'presence', true );
					?>
					<li>
						<small><?php echo 'studio' === $presence ? esc_html__( 'Studio', 'wx-theme' ) : esc_html__( 'Nationwide', 'wx-theme' ); ?></small>
						<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<?php echo woodex_btn( get_permalink(), __( 'Discover more', 'wx-theme' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</li>
				<?php endwhile; ?>
			</ol>
		<?php endif; ?>
	</div>
</section>
<?php
get_footer();
