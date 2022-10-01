
const top_part = document.querySelector(".top-menu");
const mid_part = document.querySelector(".mid-menu");
const bottom_part = document.querySelector(".bottom-menu");
const menubar = document.querySelector(".menubar");

function togglemenu() {

    menubar.classList.toggle("menubar-activated");
    menubar.classList.remove("menubar-init");
    top_part.classList.toggle("menu-close");
    mid_part.classList.toggle("menu-close");
    bottom_part.classList.toggle("menu-close");
}
