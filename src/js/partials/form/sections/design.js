"use strict";

//QUERY SELECTOR

const btnToggleDesign = document.querySelector(".js_design_button");
const formDesign = document.querySelector(".js_design_form");
const angleDesign = document.querySelector("#angleDesign");

// VARIABLES

//EVENTOS

btnToggleDesign.addEventListener("click", (event) => {
  event.preventDefault();
  toggleSection(formDesign, angleDesign);
});

//CÓDIGO AL CARGAR LA PÁGINA
