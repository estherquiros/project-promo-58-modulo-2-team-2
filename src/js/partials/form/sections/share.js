"use strict";

const btn = document.querySelector(`.js_share_button`);
const btnTwitter = document.querySelector(`.js_share_card`);

btn.addEventListener(`click`, (ev) => {
  ev.preventDefault();
  btnTwitter.classList.toggle("collapsed");
});
