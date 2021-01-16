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


// ISSUE 2 Implémenter entrées du formulaire
//(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
const inputFirstName = document.getElementById("first")
inputFirstName.addEventListener("input", function(e){
  var value = e.target.value;
  inputFirstName.onblur = isFirstCorrect
  function isFirstCorrect(){
    if (value.length < 2) {
      inputFirstName.classList.add("border-wrong");
      inputFirstName.setCustomValidity("Vous devez saisir au moins 2 caractères ?")
    } else {
      inputFirstName.classList.add("border-good");
    }
  }



});


//let nameInput = document.reserve.first.value
// On vérifie (une fois que l'utilisateur a fini de saisir son prénom) ce qu'il a écrit 
// si la valeur NE contient PAS au moins 2 caractères
// alors le bouton submit du formulaire est disabled="true" 


// ISSUE 3 Ajouter validation ou messages d'erreur
/*
Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte.
 Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

"Veuillez entrer 2 caractères ou plus pour le champ du nom."
"Vous devez choisir une option."
"Vous devez vérifier que vous acceptez les termes et conditions."
"Vous devez entrer votre date de naissance."
*/

//ISSUE 4 Ajouter confirmation quand envoie réussi
/*
Après une validation réussie, inclure un message de confirmation 
de la soumission réussie pour l'utilisateur 
(ex. "Merci ! Votre réservation a été reçue.")
*/

//ISSUE 5 Tests manuels
/*
Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, 
ainsi que dans les versions mobile et desktop. 
Corriger les erreurs d'affichage existantes.
Tester toutes les fonctionnalités des boutons et des entrées de formulaire 
(tester les valeurs correctes et incorrectes)
*/