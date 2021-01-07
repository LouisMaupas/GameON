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