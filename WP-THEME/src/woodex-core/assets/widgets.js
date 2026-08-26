/* Woodex Hero Slider — same machine as WOODEX-26 js/app.js */
(() => {
  document.querySelectorAll(".wx-hero").forEach((root) => {
    const slides = [...root.querySelectorAll(".hero-slide")];
    const pips = [...root.querySelectorAll(".hero-pip")];
    const indexEl = root.querySelector(".hero-index");
    const sideEls = [...root.querySelectorAll(".hero-side span")];
    if (!slides.length) return;
    let i = 0;
    let timer;
    const DURATION = parseInt(root.dataset.duration || "6800", 10);
    const labels = (root.dataset.labels || "LAYOUT,DESIGN,CREATE").split(",");
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
      if (indexEl) indexEl.textContent = labels[i] || labels[0];
      sideEls.forEach((el, idx) => el.classList.toggle("is-on", idx === i));
      pips.forEach((p) => {
        const bar = p.querySelector("i");
        if (bar) bar.style.animation = "none";
        void bar?.offsetWidth;
        if (p.classList.contains("is-active") && bar) bar.style.animation = "";
      });
    };
    const play = () => {
      clearInterval(timer);
      timer = setInterval(() => go(i + 1), DURATION);
    };
    pips.forEach((p, idx) => p.addEventListener("click", () => { go(idx); play(); }));
    root.querySelector(".wx-hero-next")?.addEventListener("click", () => { go(i + 1); play(); });
    root.querySelector(".wx-hero-prev")?.addEventListener("click", () => { go(i - 1); play(); });
    play();
  });

  document.querySelectorAll(".wx-brief-form").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const note = form.querySelector(".form-note");
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch(form.dataset.endpoint || "/wp-json/woodex/v1/brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": form.dataset.nonce || "",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (note) note.textContent = json.message || "Please complete name, email and project notes.";
        return;
      }
      if (note) {
        note.textContent = json.note || "Brief received.";
        if (json.whatsapp) {
          const a = document.createElement("a");
          a.href = json.whatsapp;
          a.target = "_blank";
          a.rel = "noopener";
          a.textContent = " If WhatsApp did not open, tap here.";
          note.appendChild(a);
        }
      }
      if (json.whatsapp) window.open(json.whatsapp, "_blank", "noopener");
    });
  });
})();
