<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
?>
<section class="wx-archive">
	<div class="container">
		<h1><?php the_archive_title(); ?></h1>
		<?php if ( get_the_archive_description() ) : ?>
			<div class="wx-archive-lead"><?php the_archive_description(); ?></div>
		<?php endif; ?>
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
		<?php endif; ?>
	</div>
</section>
<?php
get_footer();
