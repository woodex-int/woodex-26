<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
while ( have_posts() ) :
	the_post();
	?>
	<article <?php post_class( 'wx-page' ); ?>>
		<div class="container wx-page-inner">
			<p class="eyebrow"><?php esc_html_e( 'Study', 'wx-theme' ); ?></p>
			<h1><?php the_title(); ?></h1>
			<?php if ( has_post_thumbnail() ) : ?>
				<div class="bp-hero" style="margin:28px 0"><?php the_post_thumbnail( 'large' ); ?></div>
			<?php endif; ?>
			<?php the_content(); ?>
		</div>
	</article>
	<?php
endwhile;
get_footer();
