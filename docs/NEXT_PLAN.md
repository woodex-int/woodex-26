# Next plan — after zip extract + GitHub read

**Status:** organized. No merge / no push until you answer and say **START**.

## Facts

1. HTML site is complete enough to stay live. Home hero and 3D Studio stay locked.
2. Upload kit exists: `WP-THEME/dist/WOODEX-WP-MASTER.zip`.
3. GitHub `main` is one commit ahead (Impreza stub text only).
4. GitHub `WX-Theme-Master` is a **different product**: Impreza + WPBakery + FileBird Pro + agent zips.
5. This sandbox cannot install WordPress. Your `woodex-26.local` is on your machine.

## Three legal next tracks (pick one)

**A — HTML**  
Finish Home duplicate services, P4 QA 375–1440, then static deploy.

**B — WordPress (locked stack)**  
Push `WP-THEME/` to GitHub. You install Hello + child + woodex-core + Elementor + Xpro on a real WP. Tools → Woodex Setup.

**C — WordPress (GitHub Impreza)**  
Abandon Hello/Elementor. Use Impreza + WPBakery from `WX-Theme-Master`. Restyles Home. Needs licenses. Not the plan we wrote.

Do not run A+C or B+C in the same repo.

## Push rule (if you choose B)

Commit: HTML Home proof + `WP-THEME/` + docs.  
Do **not** commit `DEPLOY_KEY.txt`.  
Do **not** merge `js_composer` / `filebird-pro` / Impreza onto `main` unless you explicitly choose C.
