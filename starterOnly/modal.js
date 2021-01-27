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
  submitBtn = document.getElementById('submit'), //submit btn of form
  loc = document.getElementById('location'), // select all the locations
  loc1 = document.getElementById('location1'), //select location NewYork
  loc2 = document.getElementById('location2'), //select location 2
  loc3 = document.getElementById('location3'),
  loc4 = document.getElementById('location4'),
  loc5 = document.getElementById('location5'),
  loc6 = document.getElementById('location6'),
  form = document.querySelector('form'), // select all the form
  formId = document.getElementById("form-id"); //submit btn

//counter of users's input correctly entered
 let validatorOne = false, 
  validatorTwo = false, 
  validatorThree = false, 
  validatorFour = false,//each validator
  validatorFive = false;

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
      e.target.setCustomValidity("Veuillez entrer 2 caractères ou plus."). 
      e.target.reportValidity()
  } else {
      e.target.classList.add("border-good");
      e.target.classList.remove("border-wrong");
      e.target.setCustomValidity("");
      validatorOne = true
  }
}

//calling blindEvents with the 2 input : first & last names + the events keyup focusout & blur  
bindEvents([inputFirstName, inputLastName], ["keyup", "focusout", "blur"], validateMinLengthTwo)

//A regex for email addresses
const emailRegExp  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //The list of mandatory characters : x@x.xx

//A function that checks if the input is an email address
inputMail.addEventListener("input", function(){
  let goodMail = emailRegExp.test(inputMail.value);// compare regex with  the input and retourn boolean
  if(goodMail) { //if true 
    inputMail.classList.add("border-good")
    inputMail.classList.remove("border-wrong")
    inputMail.setCustomValidity("");
    validatorTwo = true
  } else {
    inputMail.classList.add("border-wrong");
    inputMail.classList.remove("border-good");
    inputMail.setCustomValidity("Veuillez entrer une adresse électronique valide.");
    inputMail.reportValidity();
    inputMail.focus();
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
      inputBirthdate.setCustomValidity("")
      inputBirthdate.focus();
      validatorThree = true
    }
  }
);

//A function that keep the radio checked
//loc.addEventListener('change', function () { //
function keepRadio(){
  let radios = document.querySelectorAll('input'); //select all the inputs of all the form 
  for (var i = 0; i < radios.length; i++) { //big scope var that check all the radios
    if ( radios[i].checked === true ) break; //stop when he meet a checked radio
  }
  let radioValue = radios[i].value;		
  return radioValue
}

//A function that checks if the quantity's input is a number
inputQuantity.addEventListener("input", function(e){
  const value = e.target.value;
    if (isNaN(value)) {
      inputQuantity.classList.add("border-wrong");
      inputQuantity.classList.remove("border-good");
      inputQuantity.setCustomValidity("Vous devez entrer des chiffres");
      inputQuantity.reportValidity()
      inputQuantity.focus();
    } else {
      inputQuantity.classList.add("border-good");
      inputQuantity.classList.remove("border-wrong");
      inputQuantity.setCustomValidity("");
    }
  }
);

//A function that forces the user to check a city if he filled the #quantity field
let radioChecked = function () {
  if (inputQuantity.value != "" || inputQuantity.value != 0 ) { //check if inputQuantity is properly filled
    keepRadio()
    if(keepRadio() != "on") { //check if a radio is checked
      validatorFive = true;
    } else {
      validatorFive = false;
      alert("Vous devez choisir une option") 
    }
  } else {
    validatorFive = true;
  }
}

//A function that checks if the general conditions box is checked
function checkCheckbox() {
  if(inputCheckbox.checked ){
    validatorFour = true;
  } else { 
    alert("Vous devez vérifier que vous acceptez les termes et conditions");
    validatorFour = false;
  }
}

//A function that calls the validotor and acts on it
function validate(e) {
  radioChecked();
  checkCheckbox();
  let alertText = validators() ? "Merci ! Votre réservation a été reçue" : "Certains champs du formulaire ne sont pas remplit correctement" ; //if validators is true then alertText = good text else bad txt
  alert(alertText);
  if (!validators()) {
    e.preventDefault()
  }
}

//calculates if all validators are true
function validators (){
  return (validatorOne && validatorTwo && validatorThree && validatorFour && validatorFive) // Only if each validator is true then validators return TRUE
} 

formId.addEventListener("submit", function(e){
  validate(e);
})