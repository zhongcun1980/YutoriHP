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

  const faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach((item) => {
    const button = item.querySelector(".faq__question");
    const answer = item.querySelector(".faq__answer");
    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("faq__item--open");

      faqItems.forEach((otherItem) => {
        const otherButton = otherItem.querySelector(".faq__question");
        const otherAnswer = otherItem.querySelector(".faq__answer");
        if (!otherButton || !otherAnswer) return;

        otherItem.classList.remove("faq__item--open");
        otherButton.setAttribute("aria-expanded", "false");
        otherAnswer.hidden = true;
      });

      if (!isOpen) {
        item.classList.add("faq__item--open");
        button.setAttribute("aria-expanded", "true");
        answer.hidden = false;
      }
    });
  });
});
