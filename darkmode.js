const themeSwitch = document.getElementById("theme-switch");
const header = document.querySelector("header");
const main = document.querySelector("main");
const icon_cursor = document.querySelector("icon_cursor");


themeSwitch.addEventListener("click", () => {
  header.classList.toggle("darkmode");
  main.classList.toggle("darkmode");
  icon_cursor.classList("darkmode");
});
