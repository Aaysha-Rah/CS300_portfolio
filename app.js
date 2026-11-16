const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#site-nav");

function toggleMenu() {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open");
}

menuButton.addEventListener("click", toggleMenu);
