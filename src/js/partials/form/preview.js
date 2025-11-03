
const btnReset = document.querySelector('.js_btnReset');
const formFill = document.querySelector('.js_formFill');

nameInput.addEventListener('input',() => {
  defaultTitle.textContent = nameInput.value;
});



/*btnReset.addEventListener('click', () => {
  formFill.reset();
  defaultTitle.textContent = nameInput.value;
});*/






/*formFill.addEventListener("reset", () => {
  setTimeout(() => {
    nameInput.textContent = defaultTitle.value;
  }, 0)
});*/





/*btnReset.addEventListener('click', () => {
  nameInput.value = defaultTitle;
});*/