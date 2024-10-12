// VARIABLES

let clickCookie = 0;
let cookieMultiplieur = 1;

// FONCTIONS

// Compteur cookie
const buttonClick = document.querySelector("#cookieBouton");

buttonClick.addEventListener("click", () => {
  clickCookie += 1 * cookieMultiplieur;
  document.getElementById("nombreDeCookiesBanque").innerHTML = clickCookie;
});
localStorage.setItem("nbCookies", clickCookie);

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

const container = document.querySelector("#container_card");
const card = `<button class="container_carte" id="container_carte">
                    <div class="carte">
                        <img src="assets/png/cursor.png" alt="curseur" class="image">
                        <p>0</p>
                    </div>
                    <span>0€</span>
                </button>`;
console.log(card);
