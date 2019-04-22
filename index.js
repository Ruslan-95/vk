console.log('test');
let settingBtn = document.querySelector(".head__settings");
let settingPopup = document.querySelector(".head__settings-popup");
settingBtn.addEventListener('click', () => {
   settingPopup.classList.toggle("hidden")
});

let attachBtn = document.querySelector(".footer__attach-button");
let attachPopup = document.querySelector(".footer__attach-menu");
attachBtn.addEventListener('click', () => {
   attachPopup.classList.toggle("hidden")
});

let photoBtn = document.querySelector(".footer__photo");
let photoPopup = document.querySelector(".footer__photo-alt");
photoBtn.addEventListener('mouseover', () => {
   photoPopup.classList.toggle("hidden")
});

let emojiBtn = document.querySelector(".footer__emoji");
let emojiPopup = document.querySelector(".footer__emoji-popup");
emojiBtn.addEventListener('mouseover', () => {
   emojiPopup.classList.toggle("hidden")
});

let sendBtn = document.querySelector(".footer__send");
let sendPopup = document.querySelector(".footer__send-type");
sendBtn.addEventListener('mouseover', () => {
   sendPopup.classList.toggle("hidden")
});
