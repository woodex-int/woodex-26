/* ============================================================
   WOODEX 3D STUDIO — SCROLL & MOTION ENGINE (js/motion.js)
   Page-scoped: loaded only by 3d-studio.html.

   Architecture
   ─ Native scroll is preserved (a11y, mobile, SEO).
   ─ A rAF loop feeds a lerped "virtual scroll" (vy) that drives
     parallax + pinned scrubs → glide without hijacking.
   ─ Text reveals use WORD masks — no line measurement, so headings
     can never stack one-word-per-line regardless of font timing.
   ─ Scenes are measured, not hardcoded: heights derive from content,
     recomputed on resize + image load (ResizeObserver).
   ─ Reduced motion or < 980px → pins release, text un-splits,
     reveals resolve instantly. Content is never hidden.
   ============================================================ */
(() => {
  const docEl = document.documentElement;
  docEl.classList.add("m-js");

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;

  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const PINMQ = window.matchMedia("(min-width: 980px)");
  let PINS_ON = !REDUCED && PINMQ.matches;

  /* ---------- 1 · Split text into word masks ----------
     No line measurement at all — words keep their natural flow and
     the browser wraps them. Each word sits in an overflow-hidden
     mask and rises in sequence (45ms apart). Immune to font-load
     timing, proxies and layout environments. */
  const splitWords = (el) => {
    const nodes = [...el.childNodes];
    const frag = document.createDocumentFragment();
    let i = 0;
    const mask = (content) => {
      const m = document.createElement("span");
      m.className = "m-w";
      const inner = document.createElement("span");
      inner.className = "m-wi";
      inner.style.setProperty("--i", i++);
      if (typeof content === "string") inner.textContent = content;
      else inner.appendChild(content);
      m.appendChild(inner);
      frag.appendChild(m);
      frag.appendChild(document.createTextNode(" "));
    };
    nodes.forEach((n) => {
      if (n.nodeType === Node.TEXT_NODE) {
        n.textContent.split(/\s+/).filter(Boolean).forEach((w) => mask(w));
      } else if (n.nodeName === "BR") {
        frag.appendChild(n);
      } else if (n.nodeType === 1) {
        mask(n.cloneNode(true));
      }
    });
    el.textContent = "";
    el.appendChild(frag);
  };

  const lineEls = $$('[data-m="lines"]');
  if (!REDUCED) lineEls.forEach((el) => { splitWords(el); el.classList.add("m-split"); });
  else lineEls.forEach((el) => el.classList.add("m-split", "m-nosplit"));

  /* ---------- 2 · Reveal observer ---------- */
  const revealEls = $$("[data-m], [data-m-group]");
  revealEls.forEach((el) => {
    if (el.dataset.mDelay) el.style.setProperty("--m-delay", el.dataset.mDelay + "ms");
    if (el.dataset.mGroup) {
      const gd = el.dataset.mGdelay;
      [...el.children].forEach((c, i) => {
        c.style.setProperty("--i", i);
        const chk = c.querySelector && c.querySelector(".m-check");
        if (chk) chk.style.setProperty("--i", i);
      });
      if (gd) el.style.setProperty("--m-gdelay", gd + "ms");
    }
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("m-in");
      io.unobserve(en.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });
  revealEls.forEach((el) => io.observe(el));

  /* Reduced motion → everything resolves now */
  if (REDUCED) {
    revealEls.forEach((el) => el.classList.add("m-in"));
    $$("[data-m-count]").forEach((el) => {
      el.textContent = (el.dataset.mPrefix || "") + (+el.dataset.mCount).toLocaleString() + (el.dataset.mSuffix || "");
    });
    return; // no loop, no pins, no parallax
  }

  /* ---------- 3 · Registry: parallax layers ---------- */
  const pxEls = $$("[data-m-px]").map((el) => ({ el, speed: parseFloat(el.dataset.mPx) || 0.12, mid: 0, live: false }));
  const pxIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const rec = pxEls.find((p) => p.el === en.target);
      if (rec) rec.live = en.isIntersecting;
    });
  }, { rootMargin: "30% 0px 30% 0px" });
  pxEls.forEach((p) => pxIO.observe(p.el));

  /* ---------- 4 · Scenes (pinned scrubs) ---------- */
  const scenes = [];
  $$("[data-scene]").forEach((scene) => {
    const type = scene.dataset.scene;
    if (type === "hscroll") {
      const wrap = $(".m-hwrap", scene);
      const track = $(".m-htrack", scene);
      const bar = $(".hx-work-bar i", scene);
      if (!wrap || !track) return;
      scenes.push({
        type, scene, wrap, track, bar, extra: 0, top: 0,
        setMode(on) {
          scene.classList.toggle("m-pin-on", on);
          scene.classList.toggle("m-pin-off", !on);
          if (!on) { scene.style.height = ""; track.style.transform = ""; }
          this.measure();
        },
        measure() {
          if (!scene.classList.contains("m-pin-on")) return;
          this.extra = Math.max(0, track.scrollWidth - this.wrap.clientWidth);
          this.top = scene.offsetTop;
          scene.style.height = Math.round(window.innerHeight + this.extra + window.innerHeight * 0.25) + "px";
        },
        update(y) {
          if (!scene.classList.contains("m-pin-on") || !this.extra) return;
          const p = clamp((y - this.top) / (scene.offsetHeight - window.innerHeight), 0, 1);
          this.track.style.transform = `translate3d(${(-p * this.extra).toFixed(1)}px,0,0)`;
          if (this.bar) this.bar.style.width = (p * 100).toFixed(2) + "%";
        }
      });
    }
    if (type === "steps") {
      const cards = $$(".hx-step", scene);
      const imgs = $$(".m-steps-img", scene);
      const counter = $(".hx-proc-count b", scene);
      scenes.push({
        type, scene, cards, imgs, counter, n: cards.length, top: 0, cur: 0,
        setMode(on) {
          scene.classList.toggle("m-pin-on", on);
          scene.classList.toggle("m-pin-off", !on);
          if (!on) {
            scene.style.height = "";
            cards.forEach((c) => c.classList.add("is-on"));
          } else {
            this.setActive(0);
          }
          this.measure();
        },
        measure() {
          if (!scene.classList.contains("m-pin-on")) return;
          this.top = scene.offsetTop;
          scene.style.height = Math.round(window.innerHeight * (1.1 + this.n * 0.85)) + "px";
        },
        setActive(i) {
          this.cur = i;
          cards.forEach((c, k) => c.classList.toggle("is-on", k === i));
          imgs.forEach((im, k) => im.classList.toggle("is-on", k === i));
          if (counter) counter.textContent = "0" + (i + 1);
        },
        update(y) {
          if (!scene.classList.contains("m-pin-on")) return;
          const p = clamp((y - this.top) / (scene.offsetHeight - window.innerHeight), 0, 1);
          const idx = clamp(Math.floor(p * this.n * 0.999), 0, this.n - 1);
          if (idx !== this.cur) this.setActive(idx);
        }
      });
    }
  });
  scenes.forEach((s) => s.setMode(PINS_ON));

  /* Re-measure when content/images change size */
  const chapters = $$("[data-chapter]").map((el) => ({
    el, top: 0, tone: el.dataset.tone || "light",
    label: el.dataset.chapter
  }));
  let roT;
  const remeasure = () => {
    clearTimeout(roT);
    roT = setTimeout(() => {
      scenes.forEach((s) => s.measure());
      pxEls.forEach((p) => {
        const r = p.el.getBoundingClientRect();
        p.mid = r.top + window.scrollY + r.height / 2;
      });
      chapters.forEach((c) => (c.top = c.el.getBoundingClientRect().top + window.scrollY));
    }, 160);
  };
  new ResizeObserver(remeasure).observe(document.body);
  window.addEventListener("load", remeasure);

  /* ---------- 5 · Progress rail ---------- */
  const rail = document.createElement("nav");
  rail.className = "m-rail";
  rail.setAttribute("aria-label", "Page chapters");
  rail.innerHTML = chapters
    .map((c, i) => `<a href="#${c.el.id || ""}" data-i="${i}"><span>${c.label}</span><i></i></a>`)
    .join("");
  document.body.appendChild(rail);
  const railLinks = $$("a", rail);
  railLinks.forEach((a) =>
    a.addEventListener("click", (e) => {
      const ch = chapters[+a.dataset.i];
      if (!ch) return;
      e.preventDefault();
      window.scrollTo({ top: ch.top - 70, behavior: "smooth" });
    })
  );
  requestAnimationFrame(() => rail.classList.add("is-ready"));
  remeasure();

  /* ---------- 6 · Counters ---------- */
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      cio.unobserve(el);
      const target = +el.dataset.mCount;
      const start = performance.now();
      const D = 1600;
      const tick = (now) => {
        const t = clamp((now - start) / D, 0, 1);
        const e = 1 - Math.pow(1 - t, 4); /* power4 out */
        el.textContent = Math.round(target * e).toLocaleString();
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  $$("[data-m-count]").forEach((el) => cio.observe(el));

  /* ---------- 7 · Magnetic CTAs ---------- */
  if (PINMQ.matches) {
    $$("[data-m-magnet]").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const dx = clamp((e.clientX - (r.left + r.width / 2)) * 0.22, -10, 10);
        const dy = clamp((e.clientY - (r.top + r.height / 2)) * 0.3, -8, 8);
        btn.classList.add("is-magnet");
        btn.style.transform = `translate3d(${dx.toFixed(1)}px,${dy.toFixed(1)}px,0)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.classList.remove("is-magnet");
        btn.style.transform = "";
      });
    });
  }

  /* ---------- 8 · Hero dolly + ticker skew + main loop ---------- */
  const heroInner = $(".cine-hero .cine-inner");
  const heroBg = $(".cine-hero .cine-bg");
  const ticker = $(".st-ticker");
  let vy = window.scrollY, lastVy = vy, skew = 0;

  const frame = () => {
    const y = window.scrollY;
    vy = lerp(vy, y, 0.09);
    if (Math.abs(vy - y) < 0.05) vy = y;
    const vh = window.innerHeight;

    /* Hero dolly-out: content recedes, background lags → depth */
    if (heroInner && y < vh * 1.2) {
      const t = clamp(y / vh, 0, 1);
      heroInner.style.transform = `translate3d(0,${(-t * 22).toFixed(2)}vh,0) scale(${(1 - t * 0.06).toFixed(3)})`;
      heroInner.style.opacity = (1 - t * 0.9).toFixed(3);
      if (heroBg) heroBg.style.transform = `translate3d(0,${(t * 12).toFixed(2)}vh,0)`;
    }

    /* Layered parallax */
    pxEls.forEach((p) => {
      if (!p.live) return;
      const off = (p.mid - (y + vh / 2)) * p.speed;
      p.el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
    });

    /* Pinned scrubs (lerped vy = glide) */
    scenes.forEach((s) => s.update(vy));

    /* Ticker velocity skew */
    if (ticker) {
      const v = y - lastVy;
      skew = lerp(skew, clamp(v * 0.06, -3, 3), 0.12);
      ticker.style.setProperty("--m-skew", skew.toFixed(2) + "deg");
    }
    lastVy = y;

    /* Rail state */
    const cur = vh * 0.42;
    let active = 0;
    chapters.forEach((c, i) => { if (c.top - 70 <= y + cur) active = i; });
    railLinks.forEach((a, i) => a.classList.toggle("is-on", i === active));
    rail.classList.toggle("m-rail-dark", chapters[active] && chapters[active].tone === "dark");

    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);

  /* ---------- 9 · Breakpoint change → re-pin ---------- */
  PINMQ.addEventListener("change", (e) => {
    PINS_ON = e.matches;
    scenes.forEach((s) => s.setMode(PINS_ON));
    remeasure();
  });
})();
