"use strict";

const LINK_GENERATOR_API_URL = "https://dev.adalab.es/api/info/data";
const LINK_PREVIEW_URL = "https://dev.adalab.es/api/info";

const btn = document.querySelector(`.js_share_button`);
const twitterSection = document.querySelector(`.js_share_card`);
const btnTwitter = document.querySelector(`.js_button_twitter`);
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
        console.log("Error", response.error);
        return;
      }

      element.innerHTML = `${LINK_PREVIEW_URL}/${response.infoID}`;
      element.href = `${LINK_PREVIEW_URL}/${response.infoID}`;

      btnTwitter.classList.remove("collapsed");
    });
};

btn.addEventListener(`click`, (ev) => {
  ev.preventDefault();
  twitterSection.classList.toggle("collapsed");

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

btnTwitter.addEventListener("click", (ev) => {
  ev.preventDefault();

  const text = "¡Atento a esta noticia!";
  const url = shareLink.href;
  const hashtags = "adalaber";

  const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;

  window.open(twitterUrl, "_blank");
});
