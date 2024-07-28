const navbar = document.querySelector("nav");
const Mbutton = document.querySelector("#menu-button");

Mbutton.addEventListener("click", () => {
    navbar.classList.toggle("menu-visible");
});