# Import SOP — after a kit exists

Do not hand-author Elementor JSON in this phase. Export from a staging WordPress.

## Staging build (future)

1. WP 6.6+ · PHP 8.1+ · HTTPS  
2. Install Hello Elementor → activate → install child `woodex`  
3. Plugins: Elementor → Xpro → woodex-core → Rank Math → WPForms  
4. Elementor → Features: Flexbox Container **On**, Grid **On**  
5. Xpro → enable Theme Builder, Mega Menu, Floating, only needed widgets  
6. Settings → Permalinks: Post name  
7. woodex-core: flush rewrite (activate plugin)  
8. Create sample CPT items by importing HTML copy (script later)  
9. Build Theme Builder: Header, Footer, Single Service, Single Study, Single Post, Archive Insights, Archive Studies, 404  
10. Build Pages: Home, About, Services, 3D Studio, Process, Craft, Contact, Start, FAQ, Careers, Locations, Wellstar  
11. Elementor → Tools → Export Kit → `woodex-elementor-kit.zip`  
12. Also export critical templates as individual JSON into `kit/json/`

## Production import

1. Fresh WP. Same plugin versions as staging.  
2. Install child + plugins. Activate woodex-core first (CPTs).  
3. Elementor → Tools → Import Kit → zip  
4. Xpro Theme Builder: confirm display conditions (Entire site header/footer)  
5. Assign Home  
6. Rank Math: import titles or re-save permalinks  
7. Forms: test Brief → CPT + email + WhatsApp  
8. Redirect HTML `.html` URLs  
9. Novamira: **do not** install on production in v1  

## Individual JSON import

Elementor → Templates → Saved Templates → Import Templates → `.json`  
Insert via folder icon → My Templates.

Kit ZIP = site settings + templates. JSON = one template.

## Media

Kit import can miss local images. Upload `/images/` to Media Library first, or use a search-replace on attachment URLs after import.

## Failure modes

- “Invalid JSON” → file was edited by hand or truncated. Re-export.  
- Header not showing → Theme Builder condition + Hello canvas.  
- Fonts wrong → child still enqueues Plus Jakarta.  
- Mega empty → Xpro Mega Menu assigned to a WP menu.
