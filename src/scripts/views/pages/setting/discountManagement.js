import { createAddCard, createCardItemTemplate } from "../../templates/template-creator";

const items = [
  {
    name: 'Healthy noodle with spinach leaf',
    category: 'Makanan',
    priceBefore: 40000,
    priceAfter: 20000,
  },
  {
    name: 'Grilled chicken with vegetables',
    category: 'Makanan',
    priceBefore: 45000,
    priceAfter: 30000,
  },
  {
    name: 'Pasta with marinara sauce',
    category: 'Makanan',
    priceBefore: 50000,
    priceAfter: 35000,
  },
  {
    name: 'Vegetable salad with dressing',
    category: 'Makanan',
    priceBefore: 30000,
    priceAfter: 18000,
  },
  {
    name: 'Iced tea',
    category: 'Minuman',
    priceBefore: 15000,
    priceAfter: 10000,
  },
  {
    name: 'Lemonade',
    category: 'Minuman',
    priceBefore: 12000,
    priceAfter: 8000,
  },
  {
    name: 'Fruit smoothie',
    category: 'Minuman',
    priceBefore: 25000,
    priceAfter: 18000,
  },
  {
    name: 'Black coffee',
    category: 'Minuman',
    priceBefore: 10000,
    priceAfter: 7000,
  },
  {
    name: 'Potato chips',
    category: 'Snack',
    priceBefore: 10000,
    priceAfter: 7000,
  },
  {
    name: 'Chocolate bar',
    category: 'Snack',
    priceBefore: 8000,
    priceAfter: 5000,
  },
  {
    name: 'Cookies',
    category: 'Snack',
    priceBefore: 12000,
    priceAfter: 8000,
  },
  {
    name: 'Peanuts',
    category: 'Snack',
    priceBefore: 15000,
    priceAfter: 10000,
  },
];

const DiscountManagement = {
  async render() {
    return `
      <h3>Kelola Diskon</h3>
      <div class="management">
        <nav class="management__navigation">
          <div class="management__navigation__tabs">
            <input type="radio" id="all" name="tabs" checked>
            <label for="all">Semua</label>
            
            <input type="radio" id="food" name="tabs">
            <label for="food">Makanan</label>
            
            <input type="radio" id="beverage" name="tabs">
            <label for="beverage">Minuman</label>   
            
            <input type="radio" id="snack" name="tabs">
            <label for="snack">Snack</label>
          </div>
        </nav>

        <div class="management__contents">
          <div class="management__contents__1"></div>
          <div class="management__contents__2"></div>
          <div class="management__contents__3"></div>
          <div class="management__contents__4"></div>
        </div>
      </div>

      <div class="popup-add-card">
        <div class="popup-add-card__content">
          <div class="popup-add-card__content__header">
            <div class="popup-add-card__content__header">
              <button>x</button>
            </div>
            <h4>Tambah Diskon</h4>
          </div>

          <div class="popup-add-card__content__form">
            <div class="popup-add-card__content__form__input">
              <label>Nama Diskon</label>
              <input placeholder="Masukkan Nama Produk"/>
            </div>

            <div class="popup-add-card__content__form__input">
              <label>Nama Kode Promo</label>
              <input placeholder="Masukkan Kode Promo"/>
            </div>

            <div class="popup-add-card__content__form__input">
              <label>Deskripsi (Opsional)</label>
              <textarea></textarea>
            </div>

            <div class="popup-add-card__content__form__input__presentage">
              <label>Nilai</label>
              <div class="popup-add-card__content__form__input__presentage__input">
                <button class="popup-add-card__content__form__input__presentage__option">
                  Presentase
                  <span> > </span>
                </button>

                <div class="popup-add-card__content__form__input__presentage__option">
                  <p>%</p>
                  <input />
                </div>
              </div>
            </div>
          </div>

          <div class="popup-add-card__content__footer">
            <button>Simpan Diskon</button>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const managementAllContents = document.querySelector('.management__contents__1');
    const managementFoodContents = document.querySelector('.management__contents__2');
    const managementBeverageContents = document.querySelector('.management__contents__3');
    const managementSnackContents = document.querySelector('.management__contents__4');
    const popupAddDiscount = document.querySelector('.popup-add-card');
    const closePopupAddDiscount = popupAddDiscount.querySelector('button');

    const addAllDiscountButton = createAddCard(popupAddDiscount);
    const addFoodDiscountButton = createAddCard(popupAddDiscount);
    const addBeverageDiscountButton = createAddCard(popupAddDiscount);
    const addSnackDiscountButton = createAddCard(popupAddDiscount);

    items.forEach((item) => {
      managementAllContents.innerHTML += createCardItemTemplate(item);

      if (item.category === 'Makanan') {
        managementFoodContents.innerHTML += createCardItemTemplate(item);
      } else if (item.category === 'Minuman') {
        managementBeverageContents.innerHTML += createCardItemTemplate(item);
      } else if (item.category === 'Snack') {
        managementSnackContents.innerHTML += createCardItemTemplate(item);
      }
    });

    managementAllContents.prepend(addAllDiscountButton);
    managementFoodContents.prepend(addFoodDiscountButton);
    managementBeverageContents.prepend(addBeverageDiscountButton);
    managementSnackContents.prepend(addSnackDiscountButton);

    closePopupAddDiscount.addEventListener('click', () => popupAddDiscount.style.top = '-100%');
  },
};

export default DiscountManagement;
