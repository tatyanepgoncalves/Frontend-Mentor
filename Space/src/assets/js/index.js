const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const menuMobile = document.getElementById("menu-mobile");

function openMenu() {
  menuMobile.classList.add("open");
}

function closeMenu() {
  menuMobile.classList.remove("open");
}