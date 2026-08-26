(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const mobile = document.querySelector(".mobile-nav");
  let lastY = window.scrollY;

  const onScroll = () => {
    if (!header) return;
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 12);
    if (window.innerWidth > 820) {
      header.classList.toggle("hidden", y > lastY && y > 120);
    }
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const open = !mobile.classList.contains("is-open");
      mobile.classList.toggle("is-open", open);
      mobile.hidden = !open;
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      header?.classList.toggle("is-menu", open);
    });
  }

  document.querySelectorAll(".m-acc > button").forEach((btn) => {
    btn.addEventListener("click", () => btn.parentElement.classList.toggle("is-open"));
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
