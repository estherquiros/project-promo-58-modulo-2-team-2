"use strict";

const buttonFill = document.querySelector('.js-fill-button');
const formSection = document.querySelector('.js-form-section');

buttonFill.addEventListener (`click`, () => {
formSection.classList.toggle(`collapsed`);
});
