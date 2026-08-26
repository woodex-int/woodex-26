<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header" id="masthead">
	<div class="header-inner">
		<a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php esc_attr_e( 'Woodex Interior', 'woodex' ); ?>">
			<?php
			if ( has_custom_logo() ) {
				the_custom_logo();
			} else {
				echo woodex_logo_mark(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				echo '<span class="logo-lockup"><span class="logo-word">WOODEX</span><span class="logo-sub">interior</span></span>';
			}
			?>
		</a>
		<nav class="nav" aria-label="<?php esc_attr_e( 'Primary', 'woodex' ); ?>">
			<a href="<?php echo esc_url( woodex_url( '/about/' ) ); ?>"><?php esc_html_e( 'About', 'woodex' ); ?></a>
			<div class="has-sub has-mega">
				<a class="nav-toggle" href="<?php echo esc_url( woodex_url( '/services/' ) ); ?>">
					<?php esc_html_e( 'Services', 'woodex' ); ?>
					<svg class="nav-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</a>
				<div class="mega" role="menu">
					<div class="mega-block">
						<div class="mega-wrap">
							<div class="mega-main is-5">
								<div class="mega-col-group">
									<p class="mega-h"><?php esc_html_e( 'Interior Design', 'woodex' ); ?></p>
									<div class="mega-col">
										<a href="<?php echo esc_url( woodex_url( '/services/' ) ); ?>"><?php esc_html_e( 'All interiors', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/residential/' ) ); ?>"><?php esc_html_e( 'Residential', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/office/' ) ); ?>"><?php esc_html_e( 'Office & Corporate', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/retail/' ) ); ?>"><?php esc_html_e( 'Retail & Shop', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/shops/' ) ); ?>"><?php esc_html_e( 'Brand Shop & Outlet', 'woodex' ); ?></a>
									</div>
								</div>
								<div class="mega-col-group">
									<p class="mega-h"><?php esc_html_e( 'Fit-Out', 'woodex' ); ?></p>
									<div class="mega-col">
										<a href="<?php echo esc_url( woodex_url( '/services/fit-out/' ) ); ?>"><?php esc_html_e( 'Fit-Out', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/office-fit-out/' ) ); ?>"><?php esc_html_e( 'Office Fit-Out', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/commercial-fit-out/' ) ); ?>"><?php esc_html_e( 'Commercial Fit-Out', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/residential-fit-out/' ) ); ?>"><?php esc_html_e( 'Residential Fit-Out', 'woodex' ); ?></a>
									</div>
								</div>
								<div class="mega-col-group">
									<p class="mega-h"><?php esc_html_e( 'Industries', 'woodex' ); ?></p>
									<div class="mega-col">
										<a href="<?php echo esc_url( woodex_url( '/services/restaurant/' ) ); ?>"><?php esc_html_e( 'Hospitality', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/restaurant/' ) ); ?>"><?php esc_html_e( 'Restaurant Interior', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/cafe/' ) ); ?>"><?php esc_html_e( 'Café Interior', 'woodex' ); ?></a>
									</div>
								</div>
								<div class="mega-col-group">
									<p class="mega-h"><?php esc_html_e( 'Specialist', 'woodex' ); ?></p>
									<div class="mega-col">
										<a href="<?php echo esc_url( woodex_url( '/woodex-craft/' ) ); ?>"><?php esc_html_e( 'Custom Furniture', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/joinery/' ) ); ?>"><?php esc_html_e( 'Joinery', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/renovation/' ) ); ?>"><?php esc_html_e( 'Interior Renovation', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/turnkey/' ) ); ?>"><?php esc_html_e( 'Turnkey Interiors', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/architecture/' ) ); ?>"><?php esc_html_e( 'Architecture', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/space-planning/' ) ); ?>"><?php esc_html_e( 'Space planning', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/lighting/' ) ); ?>"><?php esc_html_e( 'Lighting', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/drawings/' ) ); ?>"><?php esc_html_e( 'Drawings', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/pharmacy/' ) ); ?>"><?php esc_html_e( 'Pharmacy', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/software-house/' ) ); ?>"><?php esc_html_e( 'Software house', 'woodex' ); ?></a>
									</div>
								</div>
								<div class="mega-col-group">
									<p class="mega-h"><?php esc_html_e( 'Studio', 'woodex' ); ?></p>
									<div class="mega-col">
										<a href="<?php echo esc_url( woodex_url( '/3d-studio/' ) ); ?>"><?php esc_html_e( '3D Visualization', 'woodex' ); ?></a>
										<a href="<?php echo esc_url( woodex_url( '/services/visualization/' ) ); ?>"><?php esc_html_e( 'Rendering & walkthrough', 'woodex' ); ?></a>
									</div>
								</div>
							</div>
						</div>
						<div class="mega-cta">
							<p class="mega-cta-title"><?php esc_html_e( 'See it. Understand it. Build it.', 'woodex' ); ?></p>
							<?php echo woodex_btn( woodex_url( '/3d-studio/' ), __( 'Open 3D Studio', 'woodex' ), 'btn btn-light' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						</div>
					</div>
				</div>
			</div>
			<a href="<?php echo esc_url( woodex_url( '/3d-studio/' ) ); ?>"><?php esc_html_e( '3D Studio', 'woodex' ); ?></a>
			<a href="<?php echo esc_url( woodex_url( '/projects/' ) ); ?>"><?php esc_html_e( 'Projects', 'woodex' ); ?></a>
			<a href="<?php echo esc_url( woodex_url( '/insights/' ) ); ?>"><?php esc_html_e( 'Insights', 'woodex' ); ?></a>
			<a href="<?php echo esc_url( woodex_url( '/contact/' ) ); ?>"><?php esc_html_e( 'Contact', 'woodex' ); ?></a>
		</nav>
		<div class="header-cta">
			<?php echo woodex_btn( woodex_url( '/start-your-project/' ), __( 'Start your project', 'woodex' ), 'btn btn-light' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</div>
		<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="<?php esc_attr_e( 'Open menu', 'woodex' ); ?>">
			<span></span><span></span><span></span>
		</button>
	</div>
	<nav class="mobile-nav" id="mobile-nav" hidden>
		<a href="<?php echo esc_url( woodex_url( '/about/' ) ); ?>"><?php esc_html_e( 'About', 'woodex' ); ?></a>
		<div class="m-acc">
			<button type="button"><?php esc_html_e( 'Services', 'woodex' ); ?> <svg class="nav-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></button>
			<div class="m-sub">
				<a href="<?php echo esc_url( woodex_url( '/services/' ) ); ?>"><?php esc_html_e( 'All interiors', 'woodex' ); ?></a>
				<a href="<?php echo esc_url( woodex_url( '/services/residential/' ) ); ?>"><?php esc_html_e( 'Residential', 'woodex' ); ?></a>
				<a href="<?php echo esc_url( woodex_url( '/services/office/' ) ); ?>"><?php esc_html_e( 'Office', 'woodex' ); ?></a>
				<a href="<?php echo esc_url( woodex_url( '/services/fit-out/' ) ); ?>"><?php esc_html_e( 'Fit-Out', 'woodex' ); ?></a>
				<a href="<?php echo esc_url( woodex_url( '/services/restaurant/' ) ); ?>"><?php esc_html_e( 'Restaurant', 'woodex' ); ?></a>
				<a href="<?php echo esc_url( woodex_url( '/woodex-craft/' ) ); ?>"><?php esc_html_e( 'Woodex Craft', 'woodex' ); ?></a>
			</div>
		</div>
		<a href="<?php echo esc_url( woodex_url( '/3d-studio/' ) ); ?>"><?php esc_html_e( '3D Studio', 'woodex' ); ?></a>
		<a href="<?php echo esc_url( woodex_url( '/projects/' ) ); ?>"><?php esc_html_e( 'Projects', 'woodex' ); ?></a>
		<a href="<?php echo esc_url( woodex_url( '/insights/' ) ); ?>"><?php esc_html_e( 'Insights', 'woodex' ); ?></a>
		<a href="<?php echo esc_url( woodex_url( '/contact/' ) ); ?>"><?php esc_html_e( 'Contact', 'woodex' ); ?></a>
		<div class="m-cta">
			<?php echo woodex_btn( woodex_url( '/start-your-project/' ), __( 'Start your project', 'woodex' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</div>
	</nav>
</header>
<main id="content" class="site-main">
