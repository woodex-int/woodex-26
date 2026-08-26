# Woodex project map — 22 August 2026

Site of record: `/home/user/WOODEX-26/`  
GitHub: `https://github.com/woodex-int/woodex-26`  
**Status:** `docs/STATUS_REPORT.md` · **Todo:** `docs/TODO.md`  
Local `main` was `7de27fe`. Remote `origin/main` is `9fd4c23` (one stub file).  
Remote branches: `WX-Theme-Master` (uploaded zips), `theme` (same as old main).

## Layout (organized)

```
WOODEX-26/                     live HTML site (66 pages) — do not delete
  index.html …                 Home locked 3-slide
  3d-studio.html               cine locked
  services/ locations/ …       unique pages
  css/ js/ images/ content/
  docs/                        plans + this map
  WP-THEME/
    src/wx-theme/              NEW parent (Elementor). Impreza = reference only
    src/woodex/                Hello child (legacy until cut to wx-theme)
    src/woodex-core/           plugin source
    src/INSTALL.md
    kit/json/                  Elementor v0.4 templates
    dist/                      UPLOAD THIS
      theme.zip                Hello Elementor 3.4.9 official
      child.zip                Woodex child
      woodex-core.zip          plugin
      templates/*.json
      WOODEX-WP-MASTER.zip     master kit
      INSTALL.md
    01–06 + ADVANCED_MASTER_PLAN.md
```

`DEPLOY_KEY.txt` is local only. Never commit.

## Master zip (extracted into `WP-THEME/dist/`)

| File | Role |
|---|---|
| `theme.zip` | Parent. Official Hello Elementor. |
| `child.zip` | Woodex tokens, chrome, mega, header/footer. |
| `woodex-core.zip` | CPT + 5 Elementor widgets + installer. |
| `templates/*.json` | Optional import. Prefer Tools → Woodex Setup. |

## GitHub `WX-Theme-Master` (not merged)

Uploaded under `wx-theme/`:

| Zip | What it is | Conflict |
|---|---|---|
| `wp-theme.zip` | **Impreza** (UpSolution / us-core) | Different engine than Hello |
| `theme-child.zip` | Stock **Impreza-child** (2014 files) | Empty. Not Woodex chrome |
| `js_composer.zip` | **WPBakery** | Second page builder. Refuse with Elementor |
| `filebird-pro.zip` | FileBird Pro | Commercial. Do not ship unless licensed |
| `elementor-mcp-main.zip` | Agent MCP kit | Staging only |
| `claude-elementor-kit-main.zip` | Agent install scripts | Not a Woodex theme |
| `Ak-Elementor-Studio-main.zip` | Agent UI pack | Not Xpro |
| `agentbridge.zip` | Local WP CLI bridge | Needs their Windows path |

`origin/main` also has a stub “WX Theme Master” describing Impreza. That is **not** the locked stack.

Recommended WP stack: **`wx-theme` parent + Elementor Free + Xpro + woodex-core**.  
Hello child remains as fallback. Impreza / WPBakery zips on `WX-Theme-Master` stay unmerged.

## Local uncommitted (not pushed)

- `index.html` — static proof numbers, documentation band
- `css/lx.css` — pin track 200vh
- `README.md` — small edit
- `WP-THEME/` — entire kit (untracked)

## Do not

- Merge Impreza + WPBakery onto this HTML site
- Restyle Home 3-slide or 3D Studio
- Commit `DEPLOY_KEY.txt`
- Invent testimonials / 95% / industrial
