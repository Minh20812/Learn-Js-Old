const header_menu = document.getElementById("header_menu");
const nav = document.getElementById("nav");
const navClose = document.getElementById("nav_close");

// Tạo một biến để lưu trạng thái hiển thị của menu
let isMenuShown = false;

if (header_menu) {
  header_menu.addEventListener("click", () => {
    nav.classList.toggle("show_menu");
    isMenuShown = !isMenuShown; // Đảo ngược trạng thái của menu
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    nav.classList.remove("show_menu");
    isMenuShown = false;
  });
}
