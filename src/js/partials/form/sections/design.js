"use strict";

//QUERY SELECTOR

const btnToggleDesign = document.querySelector(".js_design_button");
const formDesign = document.querySelector(".js_design_form");
const angleDesign = document.querySelector("#angleDesign");

// VARIABLES

//EVENTOS

btnToggleDesign.addEventListener("click", (event) => {
  event.preventDefault();
  collapseAllSections(formDesign);
  formDesign.classList.toggle("collapsed");
  rotateArrow(angleDesign);
});

//CÓDIGO AL CARGAR LA PÁGINA
