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
 let validatorOne, validatorTwo, validatorThree, validatorFour, validatorFive, validatorSix; //each validator

// launch modal event 
// All .modal-btn become display block on click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// On click change modalbg display to "none"
close.addEventListener("click", () => modalbg.style.display = "none");


// A function to bind the first and last name inputs to user input events with the function that checks the inputs
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
      e.target.classList.remove("border-good");
      e.target.setCustomValidity("Veuillez entrer 2 caractères ou plus."). //TODO Le message reste quand on appuie sur ENTRER même si on corrgie l'erreur : Uncaught TypeError: Cannot read property 'e' of undefined at HTMLInputElement.validateMinLengthTwo
      e.target.reportValidity()
  } else {
      e.target.classList.add("border-good");
      e.target.classList.remove("border-wrong");
      validatorOne = true
  }
}

//calling blindEvents with the 2 input : first & last names + the events keyup focusout & blur  
bindEvents([inputFirstName, inputLastName], ["keyup", "focusout", "blur"], validateMinLengthTwo)


//A regex for email addresses
const emailRegExp  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //The list of mandatory characters : x@x.xx

//A function that checks if the input is an email address
inputMail.addEventListener("input", function(){
  const goodMail = emailRegExp.test(inputMail.value);// compare regex with  the input and retourn boolean
  if(goodMail) { //if true 
    inputMail.classList.add("border-good")
    inputMail.classList.remove("border-wrong")
    validatorTwo = true
  } else {
    inputMail.classList.add("border-wrong");
    inputMail.classList.remove("border-good");
    inputMail.setCustomValidity("Veuillez entrer une adresse électronique valide.");
    inputMail.reportValidity();
  }
})


//A function that checks if the input is a birthdate
inputBirthdate.addEventListener("input", function(e){
  const value = e.target.value;
    if (!value) {
      inputBirthdate.classList.add("border-wrong");
      inputBirthdate.classList.remove("border-good");
      inputBirthdate.setCustomValidity("Vous devez entrer votre date de naissance.")
      inputBirthdate.reportValidity()
    } else {
      inputBirthdate.classList.add("border-good");
      inputBirthdate.classList.remove("border-wrong");
      validatorThree = true
    }
  }
);














//TODO Si le champ innputQuantity n'est pas égale à 0 ou vide => Une radio doit être selectionné

// (4) Pour le nombre de concours, une valeur numérique est saisie.
inputQuantity.addEventListener("input", function(e){
  const value = e.target.value;
    if (isNaN(value)) {
      inputQuantity.classList.add("border-wrong");
      inputQuantity.classList.remove("border-good");
      inputQuantity.setCustomValidity("Vous devez entrer des chiffres")
      inputQuantity.reportValidity()
    } else {
      inputQuantity.classList.add("border-good");
      inputQuantity.classList.remove("border-wrong");
    }
  }
);


let radioRequired = function() {
  if(inputQuantity.value != "" ) {
    document.getElementById(location1).classList.add("required")
    alert("ça marche")
  } else {
     alert ("pas lol")}
     document.getElementById(location).classList.remove("required")
}

// (5) Un bouton radio est sélectionné. pour les villes
//"Vous devez choisir une option."
const inputRadio = document.querySelector('input[name="location"]:checked')
//inputRadio2.value
const radios = document.getElementsByTagName('radio');





















//A function that checks if the general conditions box is checked
if(inputCheckbox.checked){
  validatorSix = true
} else {
  inputCheckbox.setCustomValidity("Vous devez vérifier que vous acceptez les termes et conditions")
  inputCheckbox.reportValidity()
}


//On submit a function that calls the validotor and acts on it
function validate(e) {
  validators()//call validator
  let alertText = validators() ? "Merci ! Votre réservation a été reçue" : "pas bon" ; //if validators is true then alertText = good text else bad txt
  alert(alertText);
  if (!validators) {e.preventDefault()}//if validators = false don't submit
}

//calculates if all validators are true
let validators = function (){
  return (validatorOne && validatorTwo && validatorThree && validatorFour && validatorFive && validatorSix) // Only if each validator is true then validators return TRUE
}





//TODO ISSUE 5 Tests manuels
/*
//Factoriser / fonctions fléchées / ternaires / let / var ...
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation. 
Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, 
ainsi que dans les versions mobile et desktop. 
Corriger les erreurs d'affichage existantes.
Tester toutes les fonctionnalités des boutons et des entrées de formulaire 
(tester les valeurs correctes et incorrectes)
*/