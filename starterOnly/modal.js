// DOM Elements
const modalbg = document.querySelector(".bground"),// select the modal window
  modalBtn = document.querySelectorAll(".modal-btn"), // select subscrib button
  formData = document.querySelectorAll(".formData"), //the class of each input
  close = document.querySelector(".close"), // select btn closing modal
  inputFirstName = document.getElementById("first"), // select first name in form input
  inputLastName = document.getElementById("last"), // last name
  inputQuantity = document.getElementById("quantity"), // last name
  inputMail = document.getElementById('email'), // mail
  inputBirthdate = document.getElementById('birthdate'), // birthdate
  inputCheckbox = document.getElementById('checkbox1'), //terms of use
  submitBtn = document.getElementById('submit'), //submit btn of form
  loc = document.getElementById('location'), // select all the locations
  form = document.querySelector('form'), // select all the form
  formId = document.getElementById("form-id"), //submit btn
  checkCheckboxDiv = document.getElementById("checkCheckboxDiv"), // hidden div for error message at checkbox
  radioDiv = document.getElementById("radioDiv"), // with radio's error
  birthDiv = document.getElementById("birthDiv"), //birthdate
  nameDiv = document.getElementById("nameDiv"); // names

//Only if header has .topnav class we add .responsive class otherwise we remove others class (add exclusively .topnav)
function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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

//A regex for name
let nameRegExp = /^[a-zA-Z]*$/;

//the callback that check if length > 2
function validateMinLengthTwo(e) {
  let value = e.target.value //get the value of the object that sent the event
  let goodName = nameRegExp.test(value);// compare regex with the input and retourn boolean
  if(goodName) {
    if (value.length < 2) {
      nameDiv.classList.add("display-none");
      e.target.classList.add("border-wrong");
      e.target.classList.remove("border-good");
      e.target.setCustomValidity("Veuillez entrer 2 caractères ou plus."). 
      e.target.reportValidity()
      validatorOne = false
  } else {
      nameDiv.classList.add("display-none");
      e.target.classList.add("border-good");
      e.target.classList.remove("border-wrong");
      e.target.setCustomValidity("");
      validatorOne = true
  }
  } else {
    validatorOne = false
    e.target.classList.add("border-wrong");
    e.target.classList.remove("border-good");
    nameDiv.classList.remove("display-none");
    e.target.reportValidity()
  }
}

//calling blindEvents with the 2 input : first & last names + the events keyup focusout & blur  
bindEvents([inputFirstName, inputLastName], ["keyup", "focusout", "blur"], validateMinLengthTwo)

//A regex for email addresses
const emailRegExp  = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //The list of mandatory characters

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
    validatorTwo = false
  }
})

//Regex date
const dateRegExpUsa = /([12]\d{3}(\/|-)(0[1-9]|1[0-2])(\/|-)(0[1-9]|[12]\d|3[01]))/, //The list of mandatory characters for an USA date format 
  dateRegExpFR = /^([0-2][0-9]|(3)[0-1])(\/|-|:)(((0)[0-9])|((1)[0-2]))(\/|-|:)\d{4}$/; // Fr format
    

//A function that checks if the input is a date
inputBirthdate.addEventListener("input", function(){
  let goodDateUsa = dateRegExpUsa.test(inputBirthdate.value);// compare regex with the input and retourn boolean => USA
  let goodDateFr = dateRegExpFR.test(inputBirthdate.value); //same with fr
  if(goodDateUsa || goodDateFr ) { //if true 
    inputBirthdate.classList.add("border-good")
    inputBirthdate.classList.remove("border-wrong")
    birthDiv.classList.add("display-none");
    validatorThree = true
  } else {
    birthDiv.classList.remove("display-none");
    inputBirthdate.classList.add("border-wrong");
    inputBirthdate.classList.remove("border-good");
    validatorThree = false
  }
})

//A function that checks if the quantity's input is a number
inputQuantity.addEventListener("input", function(e){
  const value = e.target.value;
    if (isNaN(value)) {
      inputQuantity.classList.add("border-wrong");
      inputQuantity.classList.remove("border-good");
      inputQuantity.setCustomValidity("Vous devez entrer des chiffres");
      inputQuantity.reportValidity()
    } else {
      inputQuantity.classList.add("border-good");
      inputQuantity.classList.remove("border-wrong");
      inputQuantity.setCustomValidity("");
    }
  }
);

//A function that keep the value of a checked radio 
function keepRadio(){
  let radios = document.querySelectorAll('input'); //select all the inputs of all the form 
  for (var i = 0; i < radios.length; i++) { //big scope var that check all the radios
    if ( radios[i].checked === true ) break; //stop when he meet a checked radio
  }
  let radioValue = radios[i].value;		
  return radioValue
}

//A function that forces the user to check a city if he filled the #quantity field
let radioChecked = function () {
  if (inputQuantity.value != "" || inputQuantity.value != 0 ) { //check if inputQuantity is properly filled
    keepRadio()
    if(keepRadio() != "on") { //check if a radio is checked
      validatorFive = true;
      radioDiv.classList.add("display-none") // remove the error message
    } else {
      validatorFive = false;
      radioDiv.classList.remove("display-none") //add an error message by removing the display:none property of the div
    }
  } else {
    validatorFive = true;
  }
}

//A function that checks if the general conditions box is checked
function checkCheckbox() {
  if(inputCheckbox.checked ){
    validatorFour = true;
    checkCheckboxDiv.classList.add("display-none");
  } else { 
    checkCheckboxDiv.classList.remove("display-none");
    validatorFour = false;
  }
}

//A function that calls the validotor and acts on it
function validate(e) {
  radioChecked();
  checkCheckbox();
  let alertText = validators() ? "Merci ! Votre réservation a été reçue" : "Certains champs du formulaire ne sont pas rempli correctement"; //if validators is true then alertText = good text else bad txt
  alert(alertText);
  if (!validators()) {
    e.preventDefault()
  }
}

formId.addEventListener("submit", function(e){
  validate(e);
})