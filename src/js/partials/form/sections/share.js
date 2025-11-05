"use strict";

const LINK_GENERATOR_API_URL = "https://dev.adalab.es/api/info/data";
const LINK_PREVIEW_URL = "https://dev.adalab.es/api/info";

const btn = document.querySelector(`.js_share_button`);
const btnTwitter = document.querySelector(`.js_share_card`);
const angleShare = document.querySelector("#angleShare");
const shareLink = document.querySelector(".js_share_link");

const titleInput = document.querySelector("#newsHeadline");

const generateShareLink = (objectToSend, element) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectToSend),
  };

  fetch(LINK_GENERATOR_API_URL, options)
    .then((res) => res.json())
    .then((response) => {
      if (response.success !== true) {
        console.log("Error");
        return;
      }

      element.innerHTML = `${LINK_PREVIEW_URL}/${response.infoID}`;
    });
};

btn.addEventListener(`click`, (ev) => {
  ev.preventDefault();
  btnTwitter.classList.toggle("collapsed");

  const objectToSend = {
    field1: "1",
    field2: titleInput.value,
    field3: titleInput.value,
    field4: titleInput.value,
    field5: titleInput.value,
    photo: "foto",
  };

  generateShareLink(objectToSend, shareLink);
});

const btn2 = document.querySelector(`.js_share_title`);
const content = document.querySelector(`.js_share_content`);
btn2.addEventListener(`click`, (ev) => {
  ev.preventDefault();
  toggleSection(content, angleShare);
});
