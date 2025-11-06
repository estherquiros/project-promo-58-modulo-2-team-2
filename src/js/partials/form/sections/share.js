"use strict";

const LINK_GENERATOR_API_URL = "https://dev.adalab.es/api/info/data";
const LINK_PREVIEW_URL = "https://dev.adalab.es/api/info";

const btn = document.querySelector(`.js_share_button`);
const btnTwitter = document.querySelector(`.js_share_card`);
const angleShare = document.querySelector("#angleShare");
const shareLink = document.querySelector(".js_share_link");

const shareTitleInput = document.querySelector("#newsHeadline");
const shareSubtitleInput = document.querySelector("#newsSubtitle");
const shareMessage = document.querySelector("#message");
const sharePublicationDate = document.querySelector("#publicationDate");
const sharePublicationNumber = document.querySelector("#publicationNumber");
const shareMagazineDesign = document.querySelector("#magazineDesign");
const shareEconomyDesign = document.querySelector("#economyDesign");
const shareNewspaperDesign = document.querySelector("#newspaperDesign");

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
      element.href = `${LINK_PREVIEW_URL}/${response.infoID}`;
    });
};

btn.addEventListener(`click`, (ev) => {
  ev.preventDefault();
  btnTwitter.classList.toggle("collapsed");

  const objectToSend = {
    field1: "1",
    field2: shareTitleInput.value,
    field3: shareSubtitleInput.value,
    field4: shareMessage.value,
    field5: sharePublicationDate.value,
    field6: sharePublicationNumber.value,
    field7: shareMagazineDesign.checked,
    field8: shareEconomyDesign.checked,
    field9: shareNewspaperDesign.checked,
    photo: localStorage.getItem("imagePreview"),
  };

  generateShareLink(objectToSend, shareLink);
});

const btn2 = document.querySelector(`.js_share_title`);
const content = document.querySelector(`.js_share_content`);
btn2.addEventListener(`click`, (ev) => {
  ev.preventDefault();
  toggleSection(content, angleShare);
});
