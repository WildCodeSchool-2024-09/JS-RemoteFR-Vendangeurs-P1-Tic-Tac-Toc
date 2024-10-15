// VARIABLES

let clickCookie = 0;
let cookieMultiplieur = 1;

// FONCTIONS

// KONAMI CODE
// a key map of allowed keys
var allowedKeys = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b",
};

// the 'official' Konami Code sequence
var konamiCode = [
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

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener("keydown", function (e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {
    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
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
  img.src = "./assets/img/click/citrouille.png";

  var audio = new Audio("./assets/sound/konami_intro.mp3");
  audio.play();

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
