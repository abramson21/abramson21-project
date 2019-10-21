class СardList {
    constructor(container, initialCards) {
      this.container = container;
      this.initialCards = initialCards;
      this.popup = popup;
      this.popupAdd = popupAdd;
      this.render();
      this.toAddACardUser();
    }
  
    addCard() {
      
     const { CardElement } = new Card(document.forms.newForm.elements.name.value, document.forms.newForm.elements.link.value);
     this.container.appendChild(CardElement);
    }
  
    /*
      Надо исправить: для добавления карточки необходимо создать здесь метод addCard,
      который будет создавать и добавлять карточку в контейнер this.container,
      добавления карточки в контейнер placesList в классе Card быть не должно
  
    */
      
  render() {
    this.initialCards.forEach((element) => {
      const { CardElement } = new Card(element.name, element.link);
      this.container.appendChild(CardElement);
    });
    }
  
  
    toAddACardUser(){
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
