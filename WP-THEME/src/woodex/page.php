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
			<?php if ( ! woodex_is_elementor_page() ) : ?>
				<h1><?php the_title(); ?></h1>
			<?php endif; ?>
			<?php the_content(); ?>
		</div>
	</article>
	<?php
endwhile;
get_footer();
