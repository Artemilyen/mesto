let editButton = document.querySelector(".profile__edit-button");
// let addButton = document.querySelector(".profile__add-button");
let closeButton = document.querySelector(".popup__close-icon");
let saveForm = document.querySelector(".popup__form");
let inputName = document.querySelector(".popup__input_info_name");
let inputProfession = document.querySelector(".popup__input_info_about");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");
let popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.add("popup_opened");
  saveProfileInfo();
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function saveProfileInfo() {
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function submitForm(evt){
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  closePopup();
}

editButton.addEventListener("click", openPopup);

closeButton.addEventListener("click", closePopup);

saveForm.addEventListener("submit", submitForm);

// saveForm.addEventListener("submit", function(evt){
//     evt.preventDefault();
//     submitForm();
//     console.log('попозже отправим');
// });