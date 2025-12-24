const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  if (window.location.hash === link.getAttribute("href")) {
    link.classList.add("active");
  }
});

const contactBar = document.querySelector(".contact-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    contactBar.style.transform = "translateY(0)";
    contactBar.setAttribute("aria-hidden", "false");
  } else {
    contactBar.style.transform = "translateY(-100%)";
    contactBar.setAttribute("aria-hidden", "true");
  }
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));
