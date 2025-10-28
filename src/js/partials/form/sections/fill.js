"use strict";

//QUERY SELECTOR
const buttonFill = document.querySelector('.js-fill-button');
const formSection = document.querySelector('.js-form-section');
const nameInput = document.querySelector('#newsHeadline');
const subtitleInput = document.querySelector ('#newsSubtitle');
const descriptionInput = document.querySelector ('#message');
const editionInput = document.querySelector ('#publicationNumber')
const titlePreview = document.querySelector ('.js_title');
const subtitlePreview = document.querySelector ('.js_subtitle');
const descriptionPreview = document.querySelector ('.js_description');
const dateInput = document.querySelector ('#publicationDate')
const datePreview = document.querySelector ('.js_date')
const editionPreview = document.querySelector ('.js_edition')
const defaultTitle = "Título";
const defaultSubTitle = "Subtítulo";
const defaultDate = "Fecha";
const defaultEdition = "Nº de edición"
const defaultDescription = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia aperiam fuga tempore? Debitis quo necessitatibus tenetur laborum. Totam, eaque, sapiente dolor eum qui sint rem quo fuga, iste illo similique?";


//EVENTS

editionInput.addEventListener (`change`, () => {
    const editionFill = editionInput.value;
    editionPreview.innerHTML = editionFill.trim() === "" ? defaultEdition : editionFill; 

})


dateInput.addEventListener (`change`, () => {
    const dateFill = dateInput.value;
    datePreview.innerHTML = dateFill.trim() === "" ? defaultDate : dateFill; 

});


buttonFill.addEventListener (`click`, () => {
formSection.classList.toggle(`collapsed`);
});

nameInput.addEventListener('input', (ev) => {
    const nameFill = nameInput.value;
    titlePreview.innerHTML = nameFill.trim() === "" ? defaultTitle : nameFill; 
});

subtitleInput.addEventListener('input', (ev) => {
    const subtitleFill = subtitleInput.value;
    subtitlePreview.innerHTML = subtitleFill.trim() === "" ? defaultSubTitle : subtitleFill; 
});

descriptionInput.addEventListener('input', (ev) => {
    const descriptionFill = descriptionInput.value;
    descriptionPreview.innerHTML = descriptionFill.trim() === "" ? defaultDescription : descriptionFill; 
});





