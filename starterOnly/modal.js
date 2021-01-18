//Only if header has .topnav class we add .responsive class otherwise we remove others class (add exclusively .topnav)
function editNav() { //called lines 26 HTML
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
const inputMail = document.getElementById('email') // mail
const inputBirthdate = document.getElementById('birthdate') // birthdate
// launch modal event 
// All .modal-btn become display block on click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// On clic change modalbg display to "none"
close.addEventListener("click", function(){
  modalbg.style.display = "none";
})


/*ISSUE 2 Implémenter entrées du formulaire*/
//(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.

inputFirstName.addEventListener("input", function(e){ //listen if #first's input take an user input
  var value = e.target.value; //get the value of the object that sent the event
  inputFirstName.onblur = isFirstCorrect  //When inputFirstName lose focus => call the function
  function isFirstCorrect(){
    if (value.length < 2) {
      inputFirstName.classList.add("border-wrong");
      inputLastName.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
      let validatorOne = false
      return validatorOne
    } else {
      inputFirstName.classList.add("border-good");
      let validatorOne = true
      return validatorOne
    }
  }
});

//(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide. 

// exactly the same as with first name
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

// (3) L'adresse électronique est valide.

// To respect the HTML5 specification - from developper.mozilla
var emailRegExp  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //The list of mandatory characters : x@x

inputMail.addEventListener("input", function(){
  let goodMail = emailRegExp.test(inputMail.value);// compare regex with  the input and retourn boolean
  if(goodMail) { //if true 
    inputMail.classList.add("border-good")
  } else {
    inputMail.classList.add("border-wrong");
    inputMail.setCustomValidity("Veuillez entrer une adresse électronique valide.") 
  }
})

// (4) Pour le nombre de concours, une valeur numérique est saisie.
inputQuantity.addEventListener("input", function(e){
  var value = e.target.value;
    if (isNaN(value)) {
      inputQuantity.classList.add("border-wrong");
      inputQuantity.setCustomValidity("Vous devez entrer des chiffres")
    } else {
      inputQuantity.classList.add("border-good");
    }
  }
);


// (5) Un bouton radio est sélectionné.

const inputRadio = document.querySelector('input[name="location"]:checked')
// ou
//const inputRadio2 = reserve.radio['prenom']
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
// Form : onsubmit="return validate();"
function validate() {
  validators()//call validator calcul function
  if(validator == true) { //if validator is true
    alert("submit")
  } else {
    alert("Le formualire saisit est incorrect.")
  }
}

//counter of users's input correctly entered
let validator = false //validator is false
let validatorOne, validatorTwo, validatorThree, validatorFour, validatorFive, validatorSix, validatorSeven, validatorEight 
//calculates the nubmers of good validator
function validators(){
  if(validatorOne) {validator ++}
  if(validatorTwo) {validator ++}
  if(validatorThree) {validator ++}
  if(validatorFour) {validator ++}
  if(validatorFive) {validator ++}
  if(validatorSix) {validator ++}
  if(validatorSeven) {validator ++}
  if(validatorEight) {validator ++}
  if(validator = 8) { //if all validators are true validator = 8 
    validator = true // if validator = 8 validator is true
  } else {
    validator = false
  }
  return validator
}



// ISSUE 3 Ajouter validation ou messages d'erreur
//Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte.


//"Vous devez choisir une option."


//"Vous devez vérifier que vous acceptez les termes et conditions."



//"Vous devez entrer votre date de naissance."
inputBirthdate.addEventListener("input", function(e){
  var value = e.target.value;
    if (isNaN(value)) {
      inputQuantity.classList.add("border-wrong");
      inputQuantity.setCustomValidity("Vous devez entrer votre date de naissance.")
    } else {
      inputQuantity.classList.add("border-good");
    }
  }
);





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