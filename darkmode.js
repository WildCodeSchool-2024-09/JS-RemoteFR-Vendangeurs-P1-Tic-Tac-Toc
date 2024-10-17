const themeSwitch = document.getElementById("theme-switch");
const header = document.querySelector("header");
const main = document.querySelector("main");

themeSwitch.addEventListener("click", () => {
  header.classList.toggle("darkmode");
  main.classList.toggle("darkmode");
});
