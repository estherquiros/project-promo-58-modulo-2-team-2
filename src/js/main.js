"use strict";

console.log(">> Ready :)");

const magazineDesign = document.querySelector("#magazineDesign");
const economyDesign = document.querySelector("#economyDesign");
const newspaperDesign = document.querySelector("#newspaperDesign");
const card = document.querySelector(".preview__article");
const ImgPreview = document.querySelector(
  ".preview__article--div--containerImg--img"
);

const collapseAllSections = (element) => {
  const collapsibleSections = document.querySelectorAll(".js_collapsible");

  for (const section of collapsibleSections) {
    const sectionContains = section.closest("section");
    const spanAngle = sectionContains.querySelector(".js-share-angles");
    if (section === element) continue;
    section.classList.add("collapsed");
    rotateArrow(spanAngle, false);
  }
};

const rotateArrow = (angle, rotate = true) => {
   if (rotate) {
    angle.classList.add("rotated");
  } else {
    angle.classList.remove("rotated");
  }
};

const toggleSection = (content, angle) => {
  const isCollapsed = content.classList.contains("collapsed");

  if (isCollapsed) {
    collapseAllSections(content);
    content.classList.remove("collapsed");
    rotateArrow(angle, true);
  } else {
    content.classList.add("collapsed");
    rotateArrow(angle, false);
  }
};


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

import "./partials/form/sections/design.js";
import "./partials/form/sections/fill.js";
import "./partials/form/sections/share.js";
import "./partials/form/preview.js";
