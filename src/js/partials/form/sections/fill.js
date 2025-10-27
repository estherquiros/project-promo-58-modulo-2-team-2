"use strict";

//QUERY SELECTOR
const buttonFill = document.querySelector('.js-fill-button');
const formSection = document.querySelector('.js-form-section');
const nameInput = document.querySelector('#newsHeadline');
const subtitleInput = document.querySelector ('#newsSubtitle');
const descriptionInput = document.querySelector ('#message');
const titlePreview = document.querySelector ('.js_title');
const subtitlePreview = document.querySelector ('.js_subtitle');
const descriptionPreview = document.querySelector ('.js_description');
const defaultTitle = "Título";
const defaultSubTitle = "Subtítulo";
const defaultDescription = "Texto";


//EVENTS
buttonFill.addEventListener (`click`, () => {
formSection.classList.toggle(`collapsed`);
});

nameInput.addEventListener('input', (ev) => {
    const nameFill = nameInput.value;
    titlePreview.innerHTML = nameFill;
    titlePreview.innerHTML = nameFill.trim() === "" ? defaultTitle : nameFill; 
});

subtitleInput.addEventListener('input', (ev) => {
    const subtitleFill = subtitleInput.value;
    subtitlePreview.innerHTML = subtitleFill;
    subtitlePreview.innerHTML = subtitleFill.trim() === "" ? defaultSubTitle : subtitleFill; 
});

descriptionInput.addEventListener('input', (ev) => {
    const descriptionFill = descriptionInput.value;
    descriptionPreview.innerHTML = descriptionFill;
    descriptionPreview.innerHTML = descriptionFill.trim() === "" ? defaultDescription : descriptionFill; 
});