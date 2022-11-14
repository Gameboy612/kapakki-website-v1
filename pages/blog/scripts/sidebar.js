
const top_part = document.querySelector(".top-menu");
const mid_part = document.querySelector(".mid-menu");
const bottom_part = document.querySelector(".bottom-menu");
const sidebar = document.querySelector(".sidebar");

function togglemenu() {

    sidebar.classList.toggle("sidebar-activated");
    // sidebar.classList.remove("sidebar-init");
    top_part.classList.toggle("menu-close");
    mid_part.classList.toggle("menu-close");
    bottom_part.classList.toggle("menu-close");
}
