"use strict";

const btn1 = document.querySelector(`.js_share_button`);
const btnTwitter = document.querySelector(`.js_share_card`);

btn1.addEventListener(`click`, (ev) => {
  ev.preventDefault();
  btnTwitter.classList.toggle("collapsed");
});

const btn2 = document.querySelector(`.js_share_title`);
const content = document.querySelector(`.js_share_content`);
btn2.addEventListener(`click`, (ev) => {
  ev.preventDefault();
  content.classList.toggle("collapsed");
});
