const hamburgerIcon = document.querySelector(".menu-btn");
const offcanvas = document.querySelector(".offcanvas");
// const mobileNav = document.querySelector(".mobile-nav");
const body = document.getElementsByTagName("body")[0];

hamburgerIcon.addEventListener("click", isToggledMenu);

function isToggledMenu() {
  hamburgerIcon.classList.toggle("isToggled");
  offcanvas.classList.toggle("isToggled");
  // mobileNav.classList.toggle("isToggled");
  body.classList.toggle("isToggled");
}
