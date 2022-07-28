let editButton = document.querySelector(".profile__edit-button");
// let addButton = document.querySelector(".profile__add-button");
let closeButton = document.querySelector(".popup__close-icon");
let saveForm = document.querySelector(".popup__form");
let inputName = document.querySelector(".popup__name");
let inputProfession = document.querySelector(".popup__profession");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");
let popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.remove("popup_hidden");
}

editButton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.add("popup_hidden");
}

closeButton.addEventListener("click", closePopup);

function saveProfileInfo() {
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

saveProfileInfo();

saveForm.addEventListener("submit", function (evt){
    evt.preventDefault()
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup();
});