const themeSwitch = document.getElementById("theme-switch");
const header = document.querySelector("header");
const main = document.querySelector("main");

themeSwitch.addEventListener("click", () => {
  header.classList.toggle("darkmode");
  main.classList.toggle("darkmode");
});

// TEST LOCALSAVE

// let darkmode = localStorage.getItem("darkmode");
// const themeSwitch = document.getElementById("theme-switch");
// const header = document.querySelector("header");
// const main = document.querySelector("main");

// const enableDarkmode = () => {
//   document.header.classList.add("darkmode");
//   document.main.classList.add("darkmode");
//   localStorage.setItem("darkmode", "active");
// };
// const disableDarkmode = () => {
//   document.header.classList.remove("darkmode");
//   document.main.classList.remove("darkmode");
//   localStorage.setItem("darkmode", null);
// };

// if (darkmode === "active") enableDarkmode();

// themeSwitch.addEventListener("click", () => {
//   darkmode = localStorage.getItem("darkmode");
//   darkmode !== "active" ? enableDarkmode() : disableDarkmode();
// });
