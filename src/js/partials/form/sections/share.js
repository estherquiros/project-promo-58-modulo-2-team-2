"use strict";

const btn = document.querySelector(`.js_share_button`);
const btnTwitter = document.querySelector(`.js_share_card`);
const angleShare = document.querySelector("#angleShare");

btn.addEventListener(`click`, (ev) => {
  ev.preventDefault();
  btnTwitter.classList.toggle("collapsed");
});

const btn2 = document.querySelector(`.js_share_title`);
const content = document.querySelector(`.js_share_content`);
btn2.addEventListener(`click`, (ev) => {
  ev.preventDefault();
  toggleSection(content, angleShare);
});
