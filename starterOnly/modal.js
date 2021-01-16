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
const inputFirstName = document.getElementById("first") // select first name in form input
const inputLastName = document.getElementById("last") // last name
const inputQuantity = document.getElementById("quantity") // last name

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


/*ISSUE 2 Implémenter entrées du formulaire
(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide. */
inputFirstName.addEventListener("input", function(e){
  var value = e.target.value;
  inputFirstName.onblur = isFirstCorrect
  function isFirstCorrect(){
    if (value.length < 2) {
      inputFirstName.classList.add("border-wrong");
      inputLastName.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du prénom.")

    } else {
      inputFirstName.classList.add("border-good");
    }
  }
});

inputLastName.addEventListener("input", function(e){
  var value = e.target.value;
  inputLastName.onblur = isFirstCorrect
  function isFirstCorrect(){
    if (value.length < 2) {
      inputLastName.classList.add("border-wrong");
      inputLastName.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    } else {
      inputLastName.classList.add("border-good");
    }
  }
});
// NE S'ACTUALISE PAS SI L'USER CHANGE L'INPUT



// (3) L'adresse électronique est valide.
/*
const inputMail = document.querySelector('email')
if(inputMail.validity.valid) {
  inputMail.classList.add("border-good")
} else {
  inputMail.classList.add("border-wrong");
  inputMail.setCustomValidity("Veuillez entrer une adresse électronique valide.")
}
*/

const inputMail = document.querySelector('email')
inputMail.addEventListener("input", function(e){
  var test = inputMail.value.length === 0 || emailRegExp.test(inputMail.value);
  if (test) {
    console.log("non")
  } else {
    console.log("oui")
  }
});


// Pour respecter la spécification HTML5 - issu de developper.mozzila
var emailRegExp  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


// (4) Pour le nombre de concours, une valeur numérique est saisie.
inputQuantity.addEventListener("input", function(e){
  var value = e.target.value;
  inputQuantity.onblur = isItANum
  function isItANum(){
    if (isNaN(value)) {
      inputQuantity.classList.add("border-wrong");
      inputQuantity.setCustomValidity("Vous devez entrer des chiffres")
    } else {
      inputQuantity.classList.add("border-good");
    }
  }
});


// (5) Un bouton radio est sélectionné.
const inputRadio = document.querySelector('input[name="location"]:checked')
// ou
const inputRadio2 = reserve.radio['prenom']
//inputRadio2.value
var radios = document.getElementsByTagName('radio');
var value;
for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        value = radios[i].value; 
        console.log(value)      
    }
  }


// (6) La case des conditions générales est cochée.
const inputCheckbox = document.querySelector('checkbox1')



// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.



// ISSUE 3 Ajouter validation ou messages d'erreur
/*
Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte.
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