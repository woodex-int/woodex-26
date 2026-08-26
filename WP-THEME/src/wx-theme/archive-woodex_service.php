<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
?>
<section class="wx-archive">
	<div class="container">
		<h1><?php esc_html_e( 'You get a path from idea to space', 'wx-theme' ); ?></h1>
		<p class="woodex-proof">DESIGN → VISUALIZE → PLAN → BUDGET → BOQ → EXECUTE → DELIVER</p>
		<?php if ( have_posts() ) : ?>
			<ol class="b2-list">
				<?php
				while ( have_posts() ) :
					the_post();
					?>
					<li>
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
