const hamburgerIcon = document.querySelector(".menu-btn");

hamburgerIcon.addEventListener("click", isToggledMenu);

function isToggledMenu() {
  hamburgerIcon.classList.toggle("isToggled");
}
