import "./style.css";

/* ── header state ───────────────────────────────────────────── */
const head = document.getElementById("head");
const onScroll = () => head.classList.toggle("is-stuck", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ── mobile menu ────────────────────────────────────────────── */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

/* ── catalogue filters ──────────────────────────────────────── */
const filterBtns = document.querySelectorAll(".chip-btn");
const products = document.querySelectorAll(".product");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.toggle("is-on", b === btn));
    const filter = btn.dataset.filter;
    products.forEach((card) => {
      const show = filter === "all" || card.dataset.cat === filter;
      card.classList.toggle("is-hidden", !show);
      if (show) {
        card.classList.remove("is-in");
        requestAnimationFrame(() => card.classList.add("is-in"));
      }
    });
  });
});

/* ── testimonial scroller ───────────────────────────────────── */
const quotes = document.getElementById("quotes");
const step = () => quotes.querySelector(".quote").offsetWidth + 18;

document.getElementById("qPrev").addEventListener("click", () => {
  quotes.scrollBy({ left: -step(), behavior: "smooth" });
});
document.getElementById("qNext").addEventListener("click", () => {
  quotes.scrollBy({ left: step(), behavior: "smooth" });
});

/* ── reveal on scroll ───────────────────────────────────────── */
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const siblings = [...entry.target.parentElement.children].filter((el) =>
          el.classList.contains("reveal")
        );
        const index = Math.min(siblings.indexOf(entry.target), 4);
        entry.target.style.transitionDelay = `${index * 70}ms`;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

/* ── enquiry form (demo: no backend) ───────────────────────── */
const form = document.getElementById("enqForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const contact = form.contact.value.trim();

  if (!name || !contact) {
    note.textContent = "Please add your name and a way to reach you.";
    note.style.color = "#f3c86b";
    return;
  }

  note.textContent = `Thanks ${name.split(" ")[0]} — your enquiry is ready. Call +91 97161 78449 or email info@ctcbookworld.com to confirm it.`;
  note.style.color = "#f8f4ec";
  form.reset();
});

/* ── year ───────────────────────────────────────────────────── */
document.getElementById("year").textContent = new Date().getFullYear();
