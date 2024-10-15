// VARIABLES

let clickCookie = 0;
let cookieMultiplieur = 1;

// FONCTIONS

// KONAMI CODE

const allowedKeys = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b",
};

const konamiCode = [
  "up",
  "up",
  "down",
  "down",
  "left",
  "right",
  "left",
  "right",
  "b",
  "a",
];

let konamiCodePosition = 0;

document.addEventListener("keydown", function (e) {
  let key = allowedKeys[e.keyCode];
  let requiredKey = konamiCode[konamiCodePosition];

  if (key == requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  const img = document.querySelector(".clickableImg");
  img.src = "./assets/img/click/Mangekyou.png";

  let audio = new Audio("./assets/sound/itachi.mp3");
  audio.play();

  const title = document.querySelector("#title");
  title.textContent = "Itachi Clicker";

  const mangekyou = document.querySelector("#typeName");
  mangekyou.textContent = "Sharingans";

  alert("Bien joué, digne de Parzival! 🥚");
}

// ouvrir modale
function openModal() {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".modal").classList.add("modal--open");
}
// fermer la modale
function closeModal() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".modal").classList.remove("modal--open");
}

// Compteur cookie
const buttonClick = document.querySelector("#cookieBouton");

buttonClick.addEventListener("click", () => {
  clickCookie += 1 * cookieMultiplieur;
  document.getElementById("nombreDeCookiesBanque").innerHTML = clickCookie;
});

// Mateusz

const toggleStatsButton = document.getElementById("toggle-stats");
const statsMenu = document.getElementById("stats-menu");

toggleStatsButton.addEventListener("click", function () {
  if (statsMenu.style.display === "none" || statsMenu.style.display === "") {
    statsMenu.style.display = "block"; // Affiche le menu
  } else {
    statsMenu.style.display = "none"; // Cache le menu
  }
});

// AURELIA

let curseur = 0;
let gm = 0;
let ferme = 0;
let usine = 0;
let automaticClicks = 0;
let curseurPrice = 10;
let gmPrice = 50;
let fermePrice = 100;
let usinePrice = 500;

const buttonCurseur = document.querySelector("#buttonCurseur");

buttonCurseur.addEventListener("click", () => {
  if (clickCookie >= curseurPrice) {
    curseur += 1;
    clickCookie -= curseurPrice;
    document.getElementById("nbrCurseur").innerHTML = curseur;
    automaticClicks += 1;
    document.getElementById("nombreDeCookiesBanque").innerHTML = clickCookie;
  }
});

const buttonGm = document.querySelector("#buttonGm");

buttonGm.addEventListener("click", () => {
  if (clickCookie >= gmPrice) {
    gm += 1;
    clickCookie -= gmPrice;
    document.getElementById("nbrGm").innerHTML = gm;
    automaticClicks += 5;
    document.getElementById("nombreDeCookiesBanque").innerHTML = clickCookie;
  }
});

const buttonFerme = document.querySelector("#buttonFerme");

buttonFerme.addEventListener("click", () => {
  if (clickCookie >= fermePrice) {
    ferme += 1;
    clickCookie -= fermePrice;
    document.getElementById("nbrFerme").innerHTML = ferme;
    automaticClicks += 10;
    document.getElementById("nombreDeCookiesBanque").innerHTML = clickCookie;
  }
});

const buttonUsine = document.querySelector("#buttonUsine");

buttonUsine.addEventListener("click", () => {
  if (clickCookie >= usinePrice) {
    usine += 1;
    clickCookie -= usinePrice;
    document.getElementById("nbrUsine").innerHTML = usine;
    automaticClicks += 20;
    document.getElementById("nombreDeCookiesBanque").innerHTML = clickCookie;
  }
});

// Fonction clics automatiques
function automaticClick() {
  clickCookie += automaticClicks * cookieMultiplieur;
  document.getElementById("nombreDeCookiesBanque").innerHTML = clickCookie;
}

setInterval(automaticClick, 1000);
