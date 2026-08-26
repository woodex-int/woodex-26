<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
?>
<section class="wx-archive">
	<div class="container">
		<h1><?php printf( esc_html__( 'Search: %s', 'woodex' ), esc_html( get_search_query() ) ); ?></h1>
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
		<?php else : ?>
			<p><?php esc_html_e( 'No rooms matched that search.', 'woodex' ); ?></p>
		<?php endif; ?>
	</div>
</section>
<?php
get_footer();
