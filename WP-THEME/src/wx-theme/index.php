<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
?>
<section class="wx-archive">
	<div class="container">
		<h1><?php echo esc_html( get_the_archive_title() ? wp_strip_all_tags( get_the_archive_title() ) : __( 'Insights', 'woodex' ) ); ?></h1>
		<?php if ( have_posts() ) : ?>
			<ol class="b2-list">
				<?php
				while ( have_posts() ) :
					the_post();
					?>
					<li>
						<time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time>
						<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<?php echo woodex_btn( get_permalink(), __( 'Discover more', 'woodex' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</li>
				<?php endwhile; ?>
			</ol>
			<?php the_posts_pagination(); ?>
		<?php else : ?>
			<p><?php esc_html_e( 'Nothing here yet.', 'woodex' ); ?></p>
		<?php endif; ?>
	</div>
</section>
<?php
get_footer();
