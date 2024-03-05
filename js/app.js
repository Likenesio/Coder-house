document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".navbarLinks");
    const navLinksLi = document.querySelectorAll(".navbarLinks li");

    burger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");

      burger.classList.toggle("toggle");
    });

    navLinksLi.forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("nav-active")) {
          navLinks.classList.remove("nav-active");
          burger.classList.remove("toggle");
        }
      });
    });
    document.addEventListener("click", (e) => {
      if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
        if (navLinks.classList.contains("nav-active")) {
          navLinks.classList.remove("nav-active");
          burger.classList.remove("toggle");
        }
      }
    });
  });