document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  window.addEventListener("scroll", () => {
    header.classList.toggle("header--scrolled", window.scrollY > 50);
  });

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("menu-toggle--open");
      nav.classList.toggle("nav--open");
    });

    nav.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("menu-toggle--open");
        nav.classList.remove("nav--open");
      });
    });
  }

  const fadeElements = document.querySelectorAll(".fade-in");
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in--visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeElements.forEach((el) => observer.observe(el));
  }
});
