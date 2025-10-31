"use strict";

console.log(">> Ready :)");

import "./partials/form/sections/design.js";
import "./partials/form/sections/fill.js";
import "./partials/form/sections/share.js";

const magazineDesign = document.querySelector("#magazineDesign");
const economyDesign = document.querySelector("#economyDesign");
const newspaperDesign = document.querySelector("#newspaperDesign");
const card = document.querySelector(".preview__article");
const ImgPreview = document.querySelector(
  ".preview__article--div--containerImg--img"
);

const addStyle = (style) => {
  console.log(`La funcion de cambio de clases está entrando y recibo ${style}`);
  card.classList.forEach((className) => {
    if (className !== "preview__article") {
      card.classList.remove(className);
    }
  });

  if (style === "type-sensacionalist") {
    card.classList.add(style);
    ImgPreview.src = "/images/img_preview_sensacionalist.png";
  }
  if (style === "type-economist") {
    card.classList.add(style);
    ImgPreview.src = "/images/img_preview_economy.png";
  }
  if (style === "type-generalist") {
    card.classList.add(style);
    ImgPreview.src = "/images/img_preview_generalist.png";
  }
};

magazineDesign.addEventListener("click", () => addStyle("type-sensacionalist"));
economyDesign.addEventListener("click", () => addStyle("type-economist"));
newspaperDesign.addEventListener("click", () => addStyle("type-generalist"));
