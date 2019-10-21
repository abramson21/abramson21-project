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
    },
    {
      name: 'Нургуш',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
      name: 'Тулиновка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
      name: 'Остров Желтухина',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
      name: 'Владивосток',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }
  ];

class СardList {
    constructor(container, initialCards) {
      this.container = container;
      this.initialCards = initialCards;
      this.popup = popup;
      this.popupAdd = popupAdd;
      /*this.render();*/
      this.toAddACardUser();
    }
  
    addCard() {
     const { CardElement } = new Card(document.forms.newForm.elements.name.value, document.forms.newForm.elements.link.value);
     this.container.appendChild(CardElement);
    }
      
    /*render() {
      this.initialCards.forEach((element) => {
        const { CardElement } = new Card(element.name, element.link);
        this.container.appendChild(CardElement);
      });
    }*/
  
    toAddACardUser() {
      this.popupAdd.addEventListener('click', event => {
        event.preventDefault();
        cardList.addCard(document.forms.newForm.elements.name.value, document.forms.newForm.elements.link.value);
        document.forms.newForm.reset();
        popupAdd.classList.add('popup__button');
        popupAdd.setAttribute('disabled', true);
        popupAdd.classList.remove('popup__button_active');
        popup.classList.remove('popup_is-opened');
      });
    }
  }

  const popup = document.querySelector('.popup');
  const popupAdd = document.querySelector('.popup__button');
  const placesList = document.querySelector('.places-list');
  
  const cardList = new СardList(placesList, initialCards);
