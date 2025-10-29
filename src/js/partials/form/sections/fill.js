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
const dateInput = document.querySelector ('#publicationDate');
const datePreview = document.querySelector ('.js_date');
const editionPreview = document.querySelector ('.js_edition');
const fileInput = document.querySelector('#file');
const imagePreview = document.querySelector('.js_previewImg');
const defaultTitle = "Título";
const defaultSubTitle = "Subtítulo";
const defaultDate = "Fecha";
const defaultEdition = "Nº de edición";
const defaultDescription = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia aperiam fuga tempore? Debitis quo necessitatibus tenetur laborum. Totam, eaque, sapiente dolor eum qui sint rem quo fuga, iste illo similique?";


//EVENTS

fileInput.addEventListener (`change`, (event) => {
    // 1. Verifica si se seleccionó un archivo
    if (event.target.files.length > 0) {
        const selectedFile = event.target.files[0];

        // 2. Crea un objeto FileReader para leer el contenido del archivo
        const reader = new FileReader();

        // 3. Define la acción que ocurre cuando el lector termina de cargar el archivo
        reader.onload = (e) => {
            // e.target.result es la URL de datos (Base64) del archivo
            // Asigna esta URL al atributo 'src' de la etiqueta <img> del preview
            imagePreview.src = e.target.result;
        };

        // 4. Inicia la lectura del archivo como una URL de datos (esto dispara el 'onload')
        reader.readAsDataURL(selectedFile);
    
    } else {
        // Asumiendo que 'card' es la tarjeta donde están las clases de diseño
        if (card.classList.contains("type-sensacionalist")) {
            imagePreview.src = "/images/img_preview_sensacionalist.png";
        }
       
        else if (card.classList.contains("type-economist")) {
            imagePreview.src = "/images/img_preview_economy.png";
        }
       
        else if (card.classList.contains("type-generalist")) {
            imagePreview.src = "/images/img_preview_generalist.png";
        }
       
        else {
            // Fallback si no hay ninguna clase (o si quieres una imagen por defecto)
            imagePreview.src = "/images/img_preview_generalist.png";
        }
    }
});


editionInput.addEventListener (`change`, (ev) => {
    const editionFill = editionInput.value;
    editionPreview.innerHTML = (editionFill.trim() === "" || editionFill === "0") 
        ? defaultEdition 
        : editionFill;
});


dateInput.addEventListener (`change`, (ev) => {
    const dateFill = dateInput.value;
    datePreview.innerHTML = dateFill.trim() === "" ? defaultDate : dateFill; 
});


buttonFill.addEventListener (`click`, (ev) => {
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





