// si le header a la class topnav seulement on ajoute la class responsiv sinon on l'enleve
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close"); // select btn closing modal

// launch modal event 
// tous les .modal-btn au click transforme le style display du modale en block
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// au clic change le display de modalbg en none
close.addEventListener("click", function(){
  modalbg.style.display = "none";
})

/*
(1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et 
"id" dans le code existant. 
Corriger le code HTML quand nécessaire.

Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
Les données doivent être saisies correctement :
(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
(3) L'adresse électronique est valide.
(4) Pour le nombre de concours, une valeur numérique est saisie.
(5) Un bouton radio est sélectionné.
(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

*/