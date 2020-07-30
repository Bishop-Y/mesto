let editButtonProfile = document.querySelector('.profile-info__edit-button');
let closeButtonPopup = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let nameProfile = document.querySelector('.profile-info__name');
let jobProfile = document.querySelector('.profile-info__job');
let namePopup = document.querySelector('.popup__name');
let jobPopup = document.querySelector('.popup__job');
let formElement = document.querySelector('.popup__container');

function popup_opened() {
    popup.classList.add('popup_opened');

    if (nameProfile.textContent !== '') {
        namePopup.value = nameProfile.textContent;
    } else {
        nameProfile.textContent = nameProfile.textContent;
    }

    if (jobProfile.textContent !== '') {
        jobPopup.value = jobProfile.textContent;
    } else {
        jobProfile.textContent = jobProfile.textContent;
    }
}

function popup_closed() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameInput = namePopup.value;
    let jobInput = jobPopup.value;

    nameProfile.textContent = nameInput;
    jobProfile.textContent = jobInput;

    popup_closed();
}

editButtonProfile.addEventListener('click', popup_opened);

closeButtonPopup.addEventListener('click', popup_closed);

formElement.addEventListener('submit', formSubmitHandler);