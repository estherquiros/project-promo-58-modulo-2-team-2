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

/* Variable para las flechas*/
const angles = document.querySelector('.share-angles svg, .js-share-angles');

const rotateArrow = () =>{
  angles.classList.toggle("rotated");
}

const addStyle = (style) => {
  const stylesToRemove = [
    "type-sensacionalist",
    "type-economist",
    "type-generalist",
  ];
  card.classList.forEach((className) => {
    if (stylesToRemove.includes(className)) {
      card.classList.remove(className);
    }
  });

  card.classList.add("preview__article", style);

  if (style === "type-sensacionalist") {
    ImgPreview.src = "/images/img_preview_sensacionalist.png";
  } else if (style === "type-economist") {
    ImgPreview.src = "/images/img_preview_economy.png";
  } else if (style === "type-generalist") {
    ImgPreview.src = "/images/img_preview_generalist.png";
  }
};

magazineDesign.addEventListener("click", () => addStyle("type-sensacionalist"));
economyDesign.addEventListener("click", () => addStyle("type-economist"));
newspaperDesign.addEventListener("click", () => addStyle("type-generalist"));
