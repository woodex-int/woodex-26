<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
get_header();
while ( have_posts() ) :
	the_post();
	$h1  = get_post_meta( get_the_ID(), 'cine_h1', true );
	$eye = get_post_meta( get_the_ID(), 'cine_eye', true );
	$p   = get_post_meta( get_the_ID(), 'cine_p', true );
	?>
	<article <?php post_class( 'wx-page' ); ?>>
		<section class="wx-page-band navy">
			<div class="container">
				<?php if ( $eye ) : ?>
					<p class="eyebrow" style="color:rgba(255,255,255,.7)"><?php echo esc_html( $eye ); ?></p>
				<?php endif; ?>
				<h1><?php echo esc_html( $h1 ? $h1 : get_the_title() ); ?></h1>
				<?php if ( $p ) : ?>
					<p class="lead"><?php echo esc_html( $p ); ?></p>
				<?php endif; ?>
				<p><?php echo woodex_btn( home_url( '/start-your-project/' ), __( 'Start your project', 'wx-theme' ), 'btn btn-light' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
			</div>
		</section>
		<div class="container wx-page-inner">
			<?php the_content(); ?>
			<p class="woodex-proof">500+ projects · founder ~20 years · execution 10+ years · ISO 9001</p>
		</div>
	</article>
	<?php
endwhile;
get_footer();
