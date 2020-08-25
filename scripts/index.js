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

function switchClassPopup(popup) {
    popup.classList.toggle(`popup_opened`);
}

function openPopupProfile() {
    switchClassPopup(popupProfile)

    namePopup.value = nameProfile.textContent;
    jobPopup.value = jobProfile.textContent;
}

function closePopupProfile() {
    switchClassPopup(popupProfile);
}

function popupProfileSubmitHandler(evt) {
    evt.preventDefault();

    nameProfile.textContent = namePopup.value;
    jobProfile.textContent = jobPopup.value;

    closePopupProfile();
}

function openPopupCard() {
    switchClassPopup(popupCard);
}

function closePopupCard() {
    switchClassPopup(popupCard);
}

function popupCardSumbitHandler(evt) {
    evt.preventDefault();

    const photoCard = createPhotoCard(placePopup.value, linkPopup.value);
    photoGridCards.prepend(photoCard);

    closePopupCard();
}

function deletePhotoCard(evt) {
    evt.target.closest(`.photo-grid__container`).remove();
}

function closePopupViewing() {
    switchClassPopup(popupViewing);
}

function createPhotoCard(name, link) {
    const cardTemplate = photoGridTemplate.cloneNode(true);
    const cardImage = cardTemplate.querySelector(`.photo-grid__image`);

    cardImage.src = link;
    cardImage.alt = `${name}`;
    cardTemplate.querySelector(`.photo-grid__name`).textContent = name;
    cardTemplate.querySelector(`.photo-grid__like-button`).addEventListener(`click`, function(evt) {
        evt.target.classList.toggle(`photo-grid__like-button_activated`);
    });
    cardTemplate.querySelector(`.photo-grid__delete-button`).addEventListener(`click`, deletePhotoCard);
    cardImage.addEventListener(`click`, function(){
        switchClassPopup(popupViewing);
        popupViewingImage.src = cardImage.src;
        popupViewingImage.alt = cardImage.alt;
        popupViewingImageTitle.textContent = name;
    });
    return cardTemplate;
}

function renderCard(element) {
    const photoCard = createPhotoCard(element.name, element.link);
    photoGridCards.append(photoCard);
}

initialCards.forEach(renderCard);

editButtonProfile.addEventListener(`click`, openPopupProfile);
closeButtonPopupProfile.addEventListener(`click`, closePopupProfile);
formElementProfile.addEventListener(`submit`, popupProfileSubmitHandler);

addButtonPhotoCard.addEventListener(`click`, openPopupCard);
closeButtonPopupCard.addEventListener(`click`, closePopupCard);
formElementCard.addEventListener(`submit`, popupCardSumbitHandler);

closeButtonPopupViewing.addEventListener(`click`, closePopupViewing);