const editProfileButton = document.querySelector ('.profile__button-edit'); // кнопка редактировать профиль
console.log(editProfileButton);

const addPhotoButton = document.getElementById('addPhotoButton'); //кнопка добавить картинку

const popup = document.querySelector ('.popup');
console.log(popup);

const popupElement = document.querySelector ('.popup__element');

const likeButtons = document.querySelectorAll('.element__like');

const popupCloseButton = document.querySelector('.popup__close-button'); // закрыть попап редактирования профиля

const popupCloseButtonPhoto = document.getElementById('closeButton')

const photoPopup = document.getElementById('photoPopup');



//вкл/выкл like
function handleClickLikeButton(event) {
  event.target.classList.toggle('element__like_active');
}
likeButtons.forEach(function(button) {
  button.addEventListener('click', handleClickLikeButton);
});


//редактировать профиль запускает попап
editProfileButton.onclick = function() {
  popup.classList.add('popup_opened');
};

//закрыть попап
popupCloseButton.onclick = function() {
  popup.classList.remove('popup_opened');
} ;


// Функция для открытия попапа добавить фото
addPhotoButton.onclick = function() {
  photoPopup.classList.add('popup_opened');
};

//закрыть попап редактирования фото
popupCloseButtonPhoto.onclick = function() {
  photoPopup.remove('popup_opened');
}