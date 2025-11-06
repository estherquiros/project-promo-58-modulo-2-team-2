
const btnReset = document.querySelector('.js_btnReset');
const formFill = document.querySelector('.js_formFill');

btnReset.addEventListener('click', () => {
  formFill.reset();

   // Restaurar valores por defecto en la vista previa
  titlePreview.innerHTML = defaultTitle;
  subtitlePreview.innerHTML = defaultSubTitle;
  descriptionPreview.innerHTML = defaultDescription;
  datePreview.innerHTML = defaultDate;
  editionPreview.innerHTML = defaultEdition;
  imagePreview.src = '/images/img_preview_generalist.png'

    // Restaurar la imagen por defecto según el diseño actual
  if (card.classList.length > 1) {
      card.className = '';
      card.classList.add ('preview__article');

  }
  localStorage.removeItem('imagePreview');
});

