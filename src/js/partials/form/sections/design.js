"use strict";

//QUERY SELECTOR

const btnToggleDesign = document.querySelector(".js_design_button");
const formDesign = document.querySelector(".js_design_form");

// VARIABLES

//EVENTOS

btnToggleDesign.addEventListener("click", (event) => {
  event.preventDefault();
  formDesign.classList.toggle("collapsed");
});

//CÓDIGO AL CARGAR LA PÁGINA
