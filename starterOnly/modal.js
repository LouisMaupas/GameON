//Only if header has .topnav class we add .responsive class otherwise we remove others class (add exclusively .topnav)
function editNav() { //called lines 26 HTML
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"),
  modalBtn = document.querySelectorAll(".modal-btn"),
  formData = document.querySelectorAll(".formData"),
  close = document.querySelector(".close"), // select btn closing modal
  inputFirstName = document.getElementById("first"), // select first name in form input
  inputLastName = document.getElementById("last"), // last name
  inputQuantity = document.getElementById("quantity"), // last name
  inputMail = document.getElementById('email'), // mail
  inputBirthdate = document.getElementById('birthdate'), // birthdate
  inputCheckbox = document.getElementById('checkbox1'), //terms of use
  submitBtn = document.getElementById('submit'); //submit btn of form

//counter of users's input correctly entered
let validatorCounter = 0, //total of validators
  validatorOne, validatorTwo, validatorThree, validatorFour, validatorFive, validatorSix, validatorSeven, validatorEight, //each validator
  validatorBoolean; //If all validators are correct then validatorCounter is equal to 8 and validatorBoolean becomes true 


// launch modal event 
// All .modal-btn become display block on click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// On click change modalbg display to "none"
close.addEventListener("click", () => modalbg.style.display = "none");


/*ISSUE 2 Implémenter entrées du formulaire + ISSUE 3 Ajouter validation ou messages d'erreur*/
//(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
//(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide. 

function bindEvents(elements, events, callback){ //bind inputs with events to call the function that check inputs length
  for(let element of elements){ //for every elements 
      for(let event of events){ // we check every events 
          element.addEventListener(event, callback) // each combination element-listen-event is bind to (validateMinLengthTwo)
      }
  }
}

//the callback that check if length > 2
function validateMinLengthTwo(e) {
  let value = e.target.value //get the value of the object that sent the event
  if (value.length < 2) {
      e.target.classList.add("border-wrong");
      e.target.setCustomValidity("Veuillez entrer 2 caractères ou plus.").
      e.target.reportValidity()
  } else {
      e.target.classList.add("border-good");
  }
}

//calling blindEvents with the 2 input : first & last names + the events keyup focusout & blur  
bindEvents([inputFirstName, inputLastName], ["keyup", "focusout", "blur"], validateMinLengthTwo)


// (3) L'adresse électronique est valide.
// To respect the HTML5 specification - from developper.mozilla
const emailRegExp  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //The list of mandatory characters : x@x

inputMail.addEventListener("input", function(){
  const goodMail = emailRegExp.test(inputMail.value);// compare regex with  the input and retourn boolean
  if(goodMail) { //if true 
    inputMail.classList.add("border-good")
  } else {
    inputMail.classList.add("border-wrong");
    inputMail.setCustomValidity("Veuillez entrer une adresse électronique valide.");
    inputMail.reportValidity();
  }
})


//"Vous devez entrer votre date de naissance."
inputBirthdate.addEventListener("input", function(e){
  const value = e.target.value;
    if (!value) {
      inputBirthdate.classList.add("border-wrong");
      inputBirthdate.setCustomValidity("Vous devez entrer votre date de naissance.")
    } else {
      inputBirthdate.classList.add("border-good");
    }
  }
);


// (4) Pour le nombre de concours, une valeur numérique est saisie.
inputQuantity.addEventListener("input", function(e){
  const value = e.target.value;
    if (isNaN(value)) {
      inputQuantity.classList.add("border-wrong");
      inputQuantity.setCustomValidity("Vous devez entrer des chiffres")
    } else {
      inputQuantity.classList.add("border-good");
    }
  }
);


// (5) Un bouton radio est sélectionné. pour les villes
//"Vous devez choisir une option."
const inputRadio = document.querySelector('input[name="location"]:checked')

// ou
//const inputRadio2 = reserve.radio['prenom']
//inputRadio2.value
const radios = document.getElementsByTagName('radio');
let value;
for (let i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        value = radios[i].value; 
        console.log(value)      
    }
  }



// (6) La case des conditions générales est cochée.
//"Vous devez vérifier que vous acceptez les termes et conditions."
if(inputCheckbox.checked){
  //validatorSeven++
} else {
  inputCheckbox.setCustomValidity("Vous devez vérifier que vous acceptez les termes et conditions")
}


//ISSUE 4 Ajouter confirmation quand envoie réussi
/* Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.") */
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

// Form : onsubmit="return validate();"
function validate(e) {
  validators()//call validator calcul function
  let alertText = validator ? "Merci ! Votre réservation a été reçue" : "pas bon" ; //if validators is true then alertText = good text else bad txt
  alert(alertText);
  if (!validator) {e.preventDefault()}//don't submit if validators are'nt good
}


//calculates the nubmers of good validator
function validators(){
  if(validatorOne) {validatorCounter ++} //If validatorOne is correct then validatorCounter is incremented to 8 and validatorBoolean becomes true 
  if(validatorTwo) {validatorCounter ++}
  if(validatorThree) {validatorCounter ++}
  if(validatorFour) {validatorCounter ++}
  if(validatorFive) {validatorCounter ++}
  if(validatorSix) {validatorCounter ++}
  if(validatorSeven) {validatorCounter ++}
  if(validatorEight) {validatorCounter ++} 
  if(validatorCounter === 8) { //if all validators are incremented, validatorCounter = 8 
    validator = true // if validatorCounter = 8, validator is true
  } else {
    validator = false
  }
  return validator
}


//ISSUE 5 Tests manuels
/*
Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, 
ainsi que dans les versions mobile et desktop. 
Corriger les erreurs d'affichage existantes.
Tester toutes les fonctionnalités des boutons et des entrées de formulaire 
(tester les valeurs correctes et incorrectes)
*/