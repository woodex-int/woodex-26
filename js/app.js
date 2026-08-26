/* WOODEX-26 — chrome, cine, motion, forms */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* Preloader — must dismiss or Home stays on the WOODEX word */
  const pre = $(".preloader");
  const boot = () => {
    document.body.style.overflow = "";
    pre?.classList.add("is-done");
  };
  if (pre) document.body.style.overflow = "hidden";
  if (document.readyState === "complete") boot();
  else window.addEventListener("load", boot);
  setTimeout(boot, 1800);

  const header = $(".site-header");
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    if (!header) return;
    header.classList.toggle("scrolled", y > 40);
    const mobile = window.matchMedia("(max-width: 820px)").matches;
    const menuOpen = header.classList.contains("is-menu");
    const megaOpen = !!header.querySelector(".has-sub:hover, .has-sub:focus-within");
    if (!mobile && !menuOpen && !megaOpen && y > 280 && y > lastY) header.classList.add("hidden");
    else header.classList.remove("hidden");
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const toggle = $(".menu-toggle");
  const mobile = $(".mobile-nav");
  const setMenu = (open) => {
    toggle?.classList.toggle("is-open", open);
    mobile?.classList.toggle("is-open", open);
    header?.classList.toggle("is-menu", open);
    document.body.style.overflow = open ? "hidden" : "";
    toggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle?.setAttribute("aria-expanded", open ? "true" : "false");
  };
  toggle?.addEventListener("click", () => setMenu(!toggle.classList.contains("is-open")));
  $$(".mobile-nav a").forEach((a) =>
    a.addEventListener("click", () => setMenu(false))
  );
  $$(".m-acc > button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const open = !item.classList.contains("is-open");
      $$(".m-acc", mobile).forEach((i) => { if (i !== item) i.classList.remove("is-open"); });
      item.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });

  $$(".mega-pp").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const media = btn.closest(".mega-media");
      if (!media) return;
      const paused = media.classList.toggle("is-paused");
      btn.setAttribute("aria-label", paused ? "Play" : "Pause");
      const pauseIco = btn.querySelector(".ico-pause");
      const playIco = btn.querySelector(".ico-play");
      if (pauseIco) pauseIco.hidden = paused;
      if (playIco) playIco.hidden = !paused;
    });
  });

  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  const cine = $$(".cine-slide");
  if (cine.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let ci = 0;
    setInterval(() => {
      cine[ci].classList.remove("is-on");
      ci = (ci + 1) % cine.length;
      cine[ci].classList.add("is-on");
    }, 7200);
  }

  const anims = $$("[data-anim]");
  if (anims.length) {
    const ao = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("in");
          ao.unobserve(en.target);
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -8% 0px" }
    );
    anims.forEach((el) => ao.observe(el));
    requestAnimationFrame(() => {
      anims.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.classList.add("in");
      });
    });
  }

  /* Auto-mark gallery images for tilt + lightbox */
  $$(".folio-card, .found-card, .case-gallery, .case-feat, .lx-doc-main").forEach((el) => {
    if (!el.hasAttribute("data-tilt")) el.setAttribute("data-tilt", "");
    $$("img", el).forEach((img) => img.classList.add("lb-src"));
  });
  $$(".folio-card img, .found-card img, .case-gallery img").forEach((img) => img.classList.add("lb-src"));

  if (!$("#lightbox") && $$(".lb-src").length) {
    const box = document.createElement("div");
    box.id = "lightbox";
    box.className = "lb";
    box.hidden = true;
    box.innerHTML = '<button class="lb-x" type="button" aria-label="Close">×</button><img alt="" />';
    document.body.appendChild(box);
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $$("[data-tilt]").forEach((el) => {
      const face = el.querySelector("img");
      if (!face) return;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        face.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 7}deg) scale(1.05)`;
      });
      el.addEventListener("mouseleave", () => { face.style.transform = ""; });
    });
  }

  const lb = $("#lightbox");
  if (lb) {
    const lbImg = lb.querySelector("img");
    const closeLb = () => {
      lb.classList.remove("is-open");
      lb.hidden = true;
      document.body.style.overflow = "";
    };
    $$(".lb-src").forEach((img) => {
      img.addEventListener("click", () => {
        lb.hidden = false;
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt || "";
        requestAnimationFrame(() => lb.classList.add("is-open"));
        document.body.style.overflow = "hidden";
      });
    });
    lb.querySelector(".lb-x")?.addEventListener("click", closeLb);
    lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lb.classList.contains("is-open")) closeLb();
    });
  }

  const setList = (btns, img, cap) => {
    btns.forEach((btn) => {
      const go = () => {
        btns.forEach((b) => b.classList.remove("is-on"));
        btn.classList.add("is-on");
        if (img && btn.dataset.img) {
          img.src = btn.dataset.img;
          img.alt = btn.dataset.alt || "";
        }
        if (cap && btn.dataset.cap) cap.textContent = btn.dataset.cap;
      };
      btn.addEventListener("mouseenter", go);
      btn.addEventListener("focus", go);
      btn.addEventListener("click", go);
    });
  };
  setList($$(".st-space"), $("#st-space-img"), $("#st-space-cap"));
  setList($$(".sv-room"), $("#sv-room-img"), null);

  const delImg = $("#st-del-img");
  $$(".st-acc-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".st-acc");
      $$(".st-acc", item.parentElement).forEach((i) => i.classList.remove("is-open"));
      item.classList.add("is-open");
      if (delImg && item.dataset.img) {
        delImg.src = item.dataset.img;
        delImg.alt = item.dataset.alt || "";
      }
    });
  });

  $$(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const open = item.classList.contains("is-open");
      $$(".faq-item", item.parentElement).forEach((i) => i.classList.remove("is-open"));
      if (!open) item.classList.add("is-open");
    });
  });

  const WA = "https://wa.me/923224000768";
  const LABELS = {
    name: "Name", email: "Email", phone: "Phone", city: "City",
    have: "Have", need: "Need", area: "Area", stage: "Stage",
    when: "Timeline", budget: "Budget", message: "Notes",
    have3d: "Have", views: "Views"
  };
  const bindBrief = (form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".form-note");
      const data = Object.fromEntries(new FormData(form));
      const phoneEl = form.querySelector("[name=phone]");
      const needPhone = phoneEl && phoneEl.hasAttribute("required");
      if (!data.name || !data.email || !data.message) {
        if (note) { note.textContent = "Please complete name, email and project notes."; note.classList.remove("ok"); }
        return;
      }
      if (needPhone && !String(data.phone || "").trim()) {
        if (note) { note.textContent = "Please add a phone number."; note.classList.remove("ok"); }
        return;
      }
      const lines = ["Hello Woodex — project brief."];
      Object.entries(data).forEach(([k, v]) => {
        const val = String(v || "").trim();
        if (!val) return;
        lines.push((LABELS[k] || k) + ": " + val);
      });
      const url = WA + "?text=" + encodeURIComponent(lines.join("\n"));
      if (note) {
        note.classList.add("ok");
        note.replaceChildren(
          document.createTextNode("Brief ready. Opening WhatsApp — a studio lead replies within one working day. "),
          Object.assign(document.createElement("a"), {
            href: url, target: "_blank", rel: "noopener", textContent: "If it did not open, tap here."
          })
        );
      }
      window.open(url, "_blank", "noopener");
    });
  };
  $$("#project-form, #contact-form").forEach(bindBrief);

  /* Home hero slider (ported) */
  const slides = $$(".hero-slide");
  const pips = $$(".hero-pip");
  const indexEl = $(".hero-index");
  const sideEls = $$(".hero-side span");
  if (slides.length) {
    let i = 0;
    let timer;
    const DURATION = 6800;
    const labels = ["LAYOUT", "DESIGN", "CREATE"];
    const go = (n) => {
      const next = (n + slides.length) % slides.length;
      if (next === i) return;
      slides[i].classList.remove("is-active");
      slides[i].classList.add("is-leave");
      pips[i]?.classList.remove("is-active");
      const leaving = slides[i];
      setTimeout(() => leaving.classList.remove("is-leave"), 1200);
      i = next;
      slides[i].classList.add("is-active");
      pips[i]?.classList.add("is-active");
      if (indexEl) indexEl.textContent = labels[i];
      sideEls.forEach((el, idx) => el.classList.toggle("is-on", idx === i));
      pips.forEach((p) => {
        const bar = p.querySelector("i");
        if (bar) bar.style.animation = "none";
        void bar?.offsetWidth;
        if (p.classList.contains("is-active") && bar) bar.style.animation = "";
      });
    };
    const play = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), DURATION); };
    pips.forEach((p, idx) => p.addEventListener("click", () => { go(idx); play(); }));
    $("#hero-next")?.addEventListener("click", () => { go(i + 1); play(); });
    $("#hero-prev")?.addEventListener("click", () => { go(i - 1); play(); });
    play();
  }

  const cards = $$(".partner-card");
  const copies = $$(".partner-copy");
  if (cards.length && copies.length) {
    let cur = 0;
    let svcTimer;
    const setSvc = (n) => {
      cur = (n + cards.length) % cards.length;
      cards.forEach((c, idx) => c.classList.toggle("is-on", idx === cur));
      copies.forEach((c, idx) => {
        c.classList.toggle("is-on", idx === cur);
        c.classList.toggle("is-next", idx === (cur + 1) % copies.length);
      });
      const bar = document.getElementById("partner-indicator");
      if (bar) bar.style.transform = `translateX(${cur * 100}%)`;
    };
    cards.forEach((c, idx) => c.addEventListener("click", () => { setSvc(idx); clearInterval(svcTimer); svcTimer = setInterval(() => setSvc(cur + 1), 5200); }));
    setSvc(0);
    svcTimer = setInterval(() => setSvc(cur + 1), 5200);
  }

  const counters = $$("[data-count]");
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      countObs.unobserve(el);
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / 1600);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  counters.forEach((c) => countObs.observe(c));

  const rev = $$(".reveal");
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        setTimeout(() => en.target.classList.add("in"), en.target.dataset.delay || 0);
        revObs.unobserve(en.target);
      }
    });
  }, { threshold: 0.06, rootMargin: "0px 0px -8% 0px" });
  rev.forEach((el) => revObs.observe(el));
  requestAnimationFrame(() => {
    rev.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.classList.add("in");
    });
  });

  /* Linoxa About / Home sticky overview — does not stall */
  $$(".lx-pin").forEach((pin) => {
    const track = pin.querySelector(".lx-pin-track");
    const imgs = $$(".lx-split-media img", pin);
    const copies = $$(".lx-copy", pin);
    const thumbs = $$(".lx-thumb", pin);
    const bar = pin.querySelector(".lx-split-bar i");
    const n = copies.length;
    if (!n) return;
    let cur = 0;
    let lock = false;
    const set = (i) => {
      const next = Math.max(0, Math.min(n - 1, i));
      if (next === cur && copies[next].classList.contains("is-on")) return;
      cur = next;
      imgs.forEach((el, k) => el.classList.toggle("is-on", k === cur));
      copies.forEach((el, k) => el.classList.toggle("is-on", k === cur));
      thumbs.forEach((el, k) => el.classList.toggle("is-on", k === cur));
      if (bar) bar.style.width = ((cur + 1) / n) * 100 + "%";
    };
    const onPin = () => {
      if (lock || !track) return;
      if (window.matchMedia("(max-width: 1100px)").matches) return;
      const total = track.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(total, Math.max(0, -track.getBoundingClientRect().top));
      set(Math.min(n - 1, Math.floor((scrolled / total) * n * 0.999)));
    };
    window.addEventListener("scroll", onPin, { passive: true });
    thumbs.forEach((t, i) => t.addEventListener("click", () => {
      lock = true;
      set(i);
      setTimeout(() => { lock = false; }, 800);
    }));
    set(0);
  });

  const applyFilter = (f) => {
    $$(".filter-btn").forEach((b) => b.classList.toggle("is-on", b.dataset.filter === f));
    document.querySelectorAll("[data-cat]").forEach((card) => {
      const show = f === "all" || card.dataset.cat === f;
      card.style.display = show ? "" : "none";
    });
  };
  $$(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
  });
  if ($$(".filter-btn").length && location.hash) {
    const h = location.hash.replace("#", "");
    if ([...$$(".filter-btn")].some((b) => b.dataset.filter === h)) applyFilter(h);
  }
})();
