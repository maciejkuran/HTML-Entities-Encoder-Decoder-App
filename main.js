const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector("nav");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("showNav");
  hamburgerMenu.classList.toggle("active");
});
