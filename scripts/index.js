let nameProfile = document.querySelector(`.profile-info__name`);
let jobProfile = document.querySelector(`.profile-info__job`);
let editButtonProfile = document.querySelector(`.profile-info__edit-button`);
let popup = document.querySelector(`.popup`);
let formElement = document.querySelector(`.popup__container`);
let namePopup = document.querySelector(`.popup__name`);
let jobPopup = document.querySelector(`.popup__job`);
let closeButtonPopup = document.querySelector(`.popup__close-button`);

function popup_opened() {

    popup.classList.add(`popup_opened`);

    namePopup.value = nameProfile.textContent;
    jobPopup.value = jobProfile.textContent;

}

function popup_closed() {

    popup.classList.remove(`popup_opened`);

}

function formSubmitHandler(evt) {

    evt.preventDefault();

    nameProfile.textContent = namePopup.value;
    jobProfile.textContent = jobPopup.value;

    popup_closed();

}

editButtonProfile.addEventListener(`click`, popup_opened);

closeButtonPopup.addEventListener(`click`, popup_closed);

formElement.addEventListener(`submit`, formSubmitHandler);