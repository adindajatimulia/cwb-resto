const createCardItemTemplate = (item) => `
  <div class="card">
    <div class="card__header">
      <button class="card__header__button">+</button>
      <img class="card__header__image"
        src="https://img.freepik.com/premium-photo/four-meat-pizza-composition-includes-four-types-meat-carbonade-chicken-cervelat-bacon-mozzarella-cheese-tomato-sauce-view-from-white-background-isolated_323569-203.jpg?ga=GA1.1.1872719977.1704454417&semt=ais_hybrid">
    </div>
    <div class="card__info">
      <div class="card__info__content">
        <h4 class="card__info__content__name">${item.name}</h4>
        <p class="card__info__content__category">${item.category}</p>
      </div>
      <div class="card__info__price">
        <p class="card__info__price__before">Rp. ${item.priceBefore}</p>
        <p class="card__info__price__after">Rp. ${item.priceAfter}</p>
      </div>
    </div>
  </div>
`;

const createAddCard = (popupAddCard) => {
  const addDiscountButton = document.createElement('button');
  addDiscountButton.classList.add('add-card');

  addDiscountButton.innerHTML = `
    <p>+</p>
    <p>Tambah Diskon Baru</p>
  `;

  addDiscountButton.addEventListener('click', () => {
    popupAddCard.style.top = '0';
  });

  return addDiscountButton;
};
 
export { createCardItemTemplate, createAddCard };