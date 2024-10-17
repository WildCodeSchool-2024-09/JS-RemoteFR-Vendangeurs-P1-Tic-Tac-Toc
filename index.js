// VARIABLES

let clickCookie = 0;
let cookieMultiplier = 100000;
let Cps = 0;

// constructions

let cursor = 0;
let gm = 0;
let farm = 0;
let factory = 0;
let automaticClicks = 0;
let cursorPrice = 10;
let gmPrice = 50;
let farmPrice = 100;
let factoryPrice = 500;

// upgrades

let multiplierCursor = 1;
let multiplierGm = 1;
let multiplierFarm = 1;
let multiplierFactory = 1;

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
const buttonClick = document.querySelector("#cookieButton");

buttonClick.addEventListener("click", () => {
  clickCookie += 1 * cookieMultiplier;
  document.getElementById("cookiesInBank").innerHTML = clickCookie;
});

// CONSTRUCTIONS + UPGRADES

const buttonCursor = document.querySelector("#buttonCursor");
buttonCursor.addEventListener("click", () => {
  if (clickCookie >= cursorPrice) {
    cursor += 1;
    clickCookie -= cursorPrice;
    document.getElementById("cursorNbr").innerHTML = cursor;
    automaticClicks += 1 * multiplierCursor;
    document.getElementById("cookiesInBank").innerHTML = clickCookie;
    cursorPrice = cursorPrice + 2;
    document.getElementById("cursorPrice").innerHTML = cursorPrice + "🍪";
    if (cursor >= 10) {
      const img = document.querySelector("#star-icon1");
      img.src = "./assets/img/upgrades/ShinyStar.svg";
      multiplierCursor = 2;

      if (cursor >= 20) {
        const img = document.querySelector("#star-icon2");
        multiplierCursor = 3;
        img.src = "./assets/img/upgrades/ShinyStar.svg";

        if (cursor >= 50) {
          const img = document.querySelector("#star-icon3");
          multiplierCursor = 5;
          img.src = "./assets/img/upgrades/ShinyStar.svg";

          if (cursor >= 100) {
            const img = document.querySelector("#star-icon4");
            multiplierCursor = 10;
            img.src = "./assets/img/upgrades/ShinyStar.svg";

            if (curseor >= 500) {
              const img = document.querySelector("#star-icon5");
              multiplierCursor = 20;
              img.src = "./assets/img/upgrades/ShinyStar.svg";
            }
          }
        }
      }
    }
  }
});

const buttonGm = document.querySelector("#buttonGm");

buttonGm.addEventListener("click", () => {
  if (clickCookie >= gmPrice) {
    gm += 1;
    clickCookie -= gmPrice;
    document.getElementById("gmNbr").innerHTML = gm;
    automaticClicks += 5 * multiplierGm;
    document.getElementById("cookiesInBank").innerHTML = clickCookie;
    gmPrice = gmPrice + 5;
    document.getElementById("gmPrice").innerHTML = gmPrice + "🍪";
    if (gm >= 10) {
      const img = document.querySelector("#star-icon6");
      img.src = "./assets/img/upgrades/ShinyStar.svg";
      multiplierGm = 2;

      if (gm >= 20) {
        const img = document.querySelector("#star-icon7");
        multiplierGm = 3;
        img.src = "./assets/img/upgrades/ShinyStar.svg";

        if (gm >= 50) {
          const img = document.querySelector("#star-icon8");
          multiplierGm = 5;
          img.src = "./assets/img/upgrades/ShinyStar.svg";

          if (gm >= 100) {
            const img = document.querySelector("#star-icon9");
            multiplierGm = 10;
            img.src = "./assets/img/upgrades/ShinyStar.svg";

            if (gm >= 500) {
              const img = document.querySelector("#star-icon10");
              multiplierGm = 20;
              img.src = "./assets/img/upgrades/ShinyStar.svg";
            }
          }
        }
      }
    }
  }
});

const buttonFarm = document.querySelector("#buttonFarm");

buttonFarm.addEventListener("click", () => {
  if (clickCookie >= farmPrice) {
    farm += 1;
    clickCookie -= farmPrice;
    document.getElementById("farmNbr").innerHTML = farm;
    automaticClicks += 10 * multiplierFarm;
    document.getElementById("cookiesInBank").innerHTML = clickCookie;
    farmPrice = farmPrice + 10;
    document.getElementById("farmPrice").innerHTML = farmPrice + "🍪";
    if (farm >= 10) {
      const img = document.querySelector("#star-icon11");
      img.src = "./assets/img/upgrades/ShinyStar.svg";
      multiplierFarm = 2;

      if (farm >= 20) {
        const img = document.querySelector("#star-icon12");
        multiplierFarm = 3;
        img.src = "./assets/img/upgrades/ShinyStar.svg";

        if (farm >= 50) {
          const img = document.querySelector("#star-icon13");
          multiplierFarm = 5;
          img.src = "./assets/img/upgrades/ShinyStar.svg";

          if (farm >= 100) {
            const img = document.querySelector("#star-icon14");
            multiplierFarm = 10;
            img.src = "./assets/img/upgrades/ShinyStar.svg";

            if (farm >= 500) {
              const img = document.querySelector("#star-icon15");
              multiplierFarm = 20;
              img.src = "./assets/img/upgrades/ShinyStar.svg";
            }
          }
        }
      }
    }
  }
});

const buttonFactory = document.querySelector("#buttonFactory");

buttonFactory.addEventListener("click", () => {
  if (clickCookie >= factoryPrice) {
    factory += 1;
    clickCookie -= factoryPrice;
    document.getElementById("factoryNbr").innerHTML = factory;
    automaticClicks += 20 * multiplierFactory;
    document.getElementById("cookiesInBank").innerHTML = clickCookie;
    factoryPrice = factoryPrice + 50;
    document.getElementById("factoryPrice").innerHTML = factoryPrice + "🍪";
    if (factory >= 10) {
      const img = document.querySelector("#star-icon16");
      img.src = "./assets/img/upgrades/ShinyStar.svg";
      multiplierFactory = 2;

      if (factory >= 20) {
        const img = document.querySelector("#star-icon17");
        multiplierFactory = 3;
        img.src = "./assets/img/upgrades/ShinyStar.svg";

        if (factory >= 50) {
          const img = document.querySelector("#star-icon18");
          multiplierFactory = 5;
          img.src = "./assets/img/upgrades/ShinyStar.svg";

          if (factory >= 100) {
            const img = document.querySelector("#star-icon19");
            multiplierFactory = 10;
            img.src = "./assets/img/upgrades/ShinyStar.svg";

            if (factory >= 500) {
              const img = document.querySelector("#star-icon20");
              multiplierFactory = 20;
              img.src = "./assets/img/upgrades/ShinyStar.svg";
            }
          }
        }
      }
    }
  }
});

// MATEUSZ Fonction clics automatiques
function automaticClick() {
  clickCookie += automaticClicks;
  document.getElementById("cookiesInBank").innerHTML = clickCookie;
  document.getElementById("cookiesPerSecondNbr").innerHTML = automaticClicks;
}

setInterval(automaticClick, 1000);
