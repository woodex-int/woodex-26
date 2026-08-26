# Docker WordPress — your machine

This sandbox cannot run Docker. Copy the repo and:

```bash
cd docker
docker compose up -d
```

Open http://localhost:8081 — finish the WP 5-minute install.

Then:

1. Appearance → Themes → activate **WX Theme** (parent). Hello is optional.
2. Plugins → Add New → **Elementor**. Activate.
3. Plugins → Add New → **Xpro Elementor Addons**. Activate.
4. Plugins → activate **Woodex Core**.
5. Settings → Permalinks → Post name.
6. Elementor → Features → Flexbox Container On.
7. Tools → **Woodex Setup** → Install pages and templates.

Do not install WPBakery, Slider Revolution, or us-core.

Optional MCP (staging only) in `wp-config.php`:

```php
define( 'WOODEX_MCP_SECRET', 'long-random-string' );
```
