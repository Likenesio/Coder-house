document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".navbar-items");
  const navLinksLi = document.querySelectorAll(".navbar-items li");

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
let currentItem = 0;
const totalItems = 3;


function moveCarousel(action, targetItem) {
  if (action === "prev") {
    currentItem = currentItem === 1 ? totalItems : currentItem - 1;
  } else if (action === "next") {
    currentItem = currentItem === totalItems ? 1 : currentItem + 1;
  } else if (action === "goTo") {
    currentItem = targetItem;
  }
  for (let i = 1; i <= totalItems; i++) {
    document.getElementById(`itemCarrousel-${i}`).style.display = "none";
  }
  document.getElementById(`itemCarrousel-${currentItem}`).style.display = "block";
  updateActiveCircle();
}

function updateActiveCircle() {
  const circles = document.querySelectorAll(".itemCarrouselArrows-circulo");
  circles.forEach((circle, index) => {
    if (index + 1 === currentItem) {
      circle.style.color = "white";
    } else {
      circle.style.color = "#888888";
    }
  });
}
moveCarousel("next");
setInterval(function () {
  moveCarousel("next");
}, 3000);