const headerMenu = document.getElementById("header_menu");
const menu = document.getElementById("menu");
const btnClose = document.getElementById("close");

if (headerMenu) {
  headerMenu.addEventListener("click", () => {
    menu.classList.add("showMenu");
  });
}

if (btnClose) {
  btnClose.addEventListener("click", () => {
    menu.classList.remove("showMenu");
  });
}
