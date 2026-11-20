const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
const yearFooter = document.getElementById("year-footer");
if (yearFooter) yearFooter.textContent = new Date().getFullYear();

const links = [...document.querySelectorAll('.nav a[href^="#"]')];
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (links.length && sections.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.removeAttribute("aria-current"));
        const active = links.find(
          (link) => link.getAttribute("href") === `#${entry.target.id}`
        );
        if (active) active.setAttribute("aria-current", "true");
      });
    },
    { rootMargin: "-20% 0px -70% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}
