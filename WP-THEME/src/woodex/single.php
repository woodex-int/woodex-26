<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
while ( have_posts() ) :
	the_post();
	?>
	<article <?php post_class( 'bp' ); ?>>
		<div class="bp-wrap">
			<p class="bp-meta"><time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time> · <?php esc_html_e( 'Woodex studio', 'woodex' ); ?></p>
			<h1><?php the_title(); ?></h1>
		</div>
		<?php if ( has_post_thumbnail() ) : ?>
			<div class="bp-hero"><?php the_post_thumbnail( 'large' ); ?></div>
		<?php endif; ?>
		<div class="bp-prose">
			<?php the_content(); ?>
		</div>
	</article>
	<?php
endwhile;
get_footer();
