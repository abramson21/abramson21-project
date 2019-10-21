class Card {
    constructor(name, link) {
      this.CardElement = this.create(name, link);
      this.CardElement
        .querySelector('.place-card__like-icon')
        .addEventListener('click', this.like);

      this.CardElement
        .querySelector('.place-card__delete-icon')
        .addEventListener('click', this.remove); 
    }

    create(nameValue, linkValue) {
        const cardImage = document.createElement('div');
        cardImage.classList.add('place-card');

        /*
        Надо исправить: карточка должна вставляться в контейнер в классе CardList, а не здесь
        По заданию в классе CardList должен быть метод addCard который добавляет карточку в контейнер
        */
        /*placesList.appendChild(cardImage);*/

        const blockcardImage = document.createElement('button');
        blockcardImage.classList.add('place-card__image');
        cardImage.appendChild(blockcardImage);
       
        const blockCardText = document.createElement('div');
        blockCardText.classList.add('place-card__description');
        cardImage.appendChild(blockCardText );

        const cardText = document.createElement('h3');
        cardText.classList.add('place-card__name');
        blockCardText.appendChild(cardText);

        const deleteCard = document.createElement('button');
        deleteCard.classList.add('place-card__delete-icon');
        blockcardImage.appendChild(deleteCard);

        const buttonLike = document.createElement('button');
        buttonLike.classList.add('place-card__like-icon');
        blockCardText.appendChild(buttonLike);
        blockcardImage.setAttribute('style', `background-image: url(${linkValue})`);
        cardText.textContent = nameValue;

        blockcardImage.addEventListener('click', () => { // большая картинка
          popupBigImage.applyImage(linkValue);        
          popupBigImage.open();
          
      });

          /*
            Надо исправить: при каждом клике на изображение попапа в открывающемся попапе
            добавляется ещё одно изображение, такого быть не должно.
            Нужно добавить в верстку попапа разметку картинки и менять только её src
            а не создавать кажлый раз новую картинку
          */
         

        /* Надо исправить: кнопка закрытия попапа изображения одна на странице, не 
        нужно добавлять на неё обработчик каждый раз при создании карточки, достаточно добавить обработчик на закрытие
        попапа один раз при запуске программы */

          /*
            Надо исправить: для удаления карточки должен использоваться метод remove
            Также не стоит использовать глобальную переменную placesList в классе, т.к.
            при дальнейшей разработке программы может получиться, что карточки будут вставляться 
            в несколько разных контейнеров
            Использование глобальных переменных считается плохим тоном при разработке программ.
            Если что-то нужно использовать в классе нужно передавать это через
            параметры конструктора или параметры метода. Так код получается более гибким и легче может переиспользоваться.
            Но в данном случае достаточно просто воспользоваться parentElement элемента карточки
            и удалять так:
            const card = event.target.parentElement.parentElement;
            card.parentElement.removeChild(card);
          */
        return cardImage;
    }
    

    like(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }

    remove(event) {
      /* Надо исправить: не ясно что делает этот код, здесь должно быть удаление карточки, 
      сейчас здесь удаление какого то класса this.cardImage*/
      const card = event.target.parentElement.parentElement;
            card.parentElement.removeChild(card);
            event.stopPropagation(); 
    }
}