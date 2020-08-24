const nameProfile = document.querySelector(`.profile-info__name`);
const jobProfile = document.querySelector(`.profile-info__job`);
const editButtonProfile = document.querySelector(`.profile-info__edit-button`);
const addButtonPhotoCard = document.querySelector(`.profile__add-button`)

const popupProfile = document.querySelector(`.popup__profile`);
const formElementProfile = document.querySelector(`.popup__container-profile`);
const namePopup = document.querySelector(`.popup__name`);
const jobPopup = document.querySelector(`.popup__job`);
const closeButtonPopupProfile = document.querySelector(`.popup__close-button_profile`);

const popupCard = document.querySelector(`.popup__add-card`);
const formElementCard = document.querySelector(`.popup__container-card`);
const placePopup = document.querySelector(`.popup__place`);
const linkPopup = document.querySelector(`.popup__link`);
const closeButtonPopupCard = document.querySelector(`.popup__close-button_card`);

const photoGridCards = document.querySelector(`.photo-grid__cards`);
const photoGridTemplate = document.querySelector(`#photo-card`).content;
const deleteButton = document.querySelector(`.photo-grid__delete-button`);

const popupViewing = document.querySelector(`.popup__viewing`);
const popupViewingImage = document.querySelector(`.popup__photo`);
const popupViewingImageTitle = document.querySelector(`.popup__photo-title`);
const closeButtonPopupViewing = document.querySelector(`.popup__close-button_viewing`);

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function popupProfile_opened() {
    popupProfile.classList.add(`popup_opened`);

    namePopup.value = nameProfile.textContent;
    jobPopup.value = jobProfile.textContent;
}

function popupProfile_closed() {
    popupProfile.classList.remove(`popup_opened`);
}

function popupProfileSubmitHandler(evt) {
    evt.preventDefault();

    nameProfile.textContent = namePopup.value;
    jobProfile.textContent = jobPopup.value;

    popupProfile_closed();
}

function popupCard_opened() {
    popupCard.classList.add(`popup_opened`);
    
    placePopup.value = ``;
    linkPopup.value = ``;
}

function popupCard_closed() {
    popupCard.classList.remove(`popup_opened`);
}

function popupCardSumbitHandler(evt) {
    evt.preventDefault();

    const photoCardC = createPhotoCard(placePopup.value, linkPopup.value);
    photoGridCards.prepend(photoCardC);

    popupCard_closed();
}

function deletePhotoCard(evt) {
    evt.target.closest(`.photo-grid__container`).remove();
}

function popupViewing_closed() {
    popupViewing.classList.remove(`popup_opened`);
}

function createPhotoCard(name, link) {
    const photoCardR = photoGridTemplate.cloneNode(true);
    const cardImage = photoCardR.querySelector(`.photo-grid__image`);

    cardImage.src = link;
    cardImage.alt = `${name}`;
    photoCardR.querySelector(`.photo-grid__name`).textContent = name;
    photoCardR.querySelector(`.photo-grid__like-button`).addEventListener(`click`, function(evt) {
        evt.target.classList.toggle(`photo-grid__like-button_activated`);
    });
    photoCardR.querySelector(`.photo-grid__delete-button`).addEventListener(`click`, deletePhotoCard);
    cardImage.addEventListener(`click`, function(){
        popupViewing.classList.add(`popup_opened`);
        popupViewingImage.src = cardImage.src;
        popupViewingImage.alt = cardImage.alt;
        popupViewingImageTitle.textContent = name;
    })
    return photoCardR;
}

initialCards.forEach(function (element) {
    const photoCard = createPhotoCard(element.name, element.link);
    photoGridCards.append(photoCard);
})

editButtonProfile.addEventListener(`click`, popupProfile_opened);
closeButtonPopupProfile.addEventListener(`click`, popupProfile_closed);
formElementProfile.addEventListener(`submit`, popupProfileSubmitHandler);

addButtonPhotoCard.addEventListener(`click`, popupCard_opened);
closeButtonPopupCard.addEventListener(`click`, popupCard_closed);
formElementCard.addEventListener(`submit`, popupCardSumbitHandler);

closeButtonPopupViewing.addEventListener(`click`, popupViewing_closed);