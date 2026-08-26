<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'wp_footer',
	function () {
		if ( is_admin() ) {
			return;
		}
		$href = WOODEX_WA . '?text=' . rawurlencode( 'Hello Woodex — I have a space in mind.' );
		?>
<a class="wa-float" href="<?php echo esc_url( $href ); ?>" target="_blank" rel="noopener" aria-label="<?php esc_attr_e( 'WhatsApp Woodex', 'woodex-core' ); ?>">
	<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 3.9A10 10 0 0 0 3.3 17.6L2 22l4.5-1.2A10 10 0 0 0 20 3.9zm-8 16.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.6.7.7-2.5-.2-.3A8.2 8.2 0 1 1 12 20.1zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.1-.3.2-.5.1s-1-.4-1.9-1.2-1.3-1.8-1.4-2.1.0-.4.1-.6l.4-.5c.1-.1.1-.2.2-.4 0-.1 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.8 3.4 1.4.6 1.8.6 2.5.5.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.1-.4-.2z"/></svg>
</a>
		<?php
	},
	20
);
