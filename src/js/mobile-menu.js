const openMenu = document.querySelector(".js-open-menu");
const closeMenu = document.querySelector(".js-close-menu");
const mobMenu = document.querySelector(".mob-menu");
const menuLinks = document.querySelectorAll(".mob-list a")

openMenu.addEventListener("click", handleOpenMenu)
closeMenu.addEventListener("click", handleCloseMenu)

function handleOpenMenu() {
    mobMenu.classList.add("is-open")
}

function handleCloseMenu() {
    mobMenu.classList.remove("is-open")
}

menuLinks.forEach(link => {
    link.addEventListener("click", handleCloseMenu);
});