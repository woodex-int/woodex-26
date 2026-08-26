<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function woodex_arrow_svgs() {
	return '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"/></svg>';
}

function woodex_btn( $href, $label, $class = 'btn' ) {
	$href  = esc_url( $href );
	$label = esc_html( $label );
	$class = esc_attr( $class );
	$icon  = woodex_arrow_svgs();
	return "<a class=\"{$class}\" href=\"{$href}\"><span class=\"btn-label\"><span>{$label}</span><span>{$label}</span></span><span class=\"btn-icon\" aria-hidden=\"true\">{$icon}</span></a>";
}

function woodex_logo_mark() {
	return '<svg class="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 6.5L9.2 25.5h2.15L16 13.2l4.65 12.3H22.8L27 6.5h-2.35l-3.2 14.6L17.4 8.2h-2.8L9.35 21.1 6.2 6.5H5z" fill="currentColor"/></svg>';
}

function woodex_url( $path = '/' ) {
	return home_url( $path );
}
