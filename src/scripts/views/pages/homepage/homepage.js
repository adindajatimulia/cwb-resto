import { createCardItemTemplate } from "../../templates/template-creator";

const items = [
  { name: 'Healthy noodle with spinach leaf', category: 'Makanan', priceBefore: 40000, priceAfter: 20000 },
  { name: 'Grilled chicken with vegetables', category: 'Makanan', priceBefore: 45000, priceAfter: 30000 },
  { name: 'Iced tea', category: 'Minuman', priceBefore: 15000, priceAfter: 10000 },
  { name: 'Potato chips', category: 'Snack', priceBefore: 10000, priceAfter: 7000 },
];

const Homepage = {
  async render() {
    return `
      <div class="content homepage">
        <div class="content__management">
          <h2 class="content__heading">CWB Resto</h2>
          <div class="management">
            <nav class="management__navigation">
              <div class="management__navigation__tabs homepage">
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
        </div>

        <div class="content__info">
          <div class="content__info__header">
            <h3>Orders#1</h3>
            <div class="content__info__header__button">
              <button class="active">Dine In</button>
              <button>To Go</button>
              <button>Delivery</button>
            </div>
          </div>

          <div class="order-pay">
            <p class="order-pay__header__item">Item</p>
            <p class="order-pay__header__quantity">Qty</p>
            <p class="order-pay__header__price">Price</p>
          </div>

          <div class="pay-selection-button">
            <button><img src="./Frame 65.svg" /></button>
            <button><img src="./Frame 66.svg" /></button>
            <button><img src="./Frame 67.svg" /></button>
            <button><img src="./Frame 65.svg" /></button>
          </div>

          <div class="payment-detail">
            <div>
              <p class="payment-detail__info">Ongkir</p>
              <p class="payment-total">0</p>
            </div>

            <div>
              <p class="payment-detail__info">Pajak</p>
              <p class="payment-total">10 %</p>
            </div>

            <div>
              <p class="payment-detail__info">Diskon</p>
              <p class="payment-total">Rp. 0</p>
            </div>

            <div>
              <p class="payment-detail__info">Sub Total</p>
              <p class="payment-total">Rp. 120.000</p>
            </div>
          </div>

          <button>Lanjutkan Pembayaran</button>
        </div>

        <div class="popup-payment"></div>
      </div>
    `;
  },

  async afterRender() {
    this.renderItemsByCategory();
    this.attachAddToCartEvents();
  },

  renderItemsByCategory() {
    const managementAllContents = document.querySelector('.management__contents__1');
    const managementFoodContents = document.querySelector('.management__contents__2');
    const managementBeverageContents = document.querySelector('.management__contents__3');
    const managementSnackContents = document.querySelector('.management__contents__4');
    const payment = document.querySelector('.content__info > button');

    items.forEach((item) => {
      const cardTemplate = createCardItemTemplate(item);
      managementAllContents.innerHTML += cardTemplate;

      if (item.category === 'Makanan') managementFoodContents.innerHTML += cardTemplate;
      if (item.category === 'Minuman') managementBeverageContents.innerHTML += cardTemplate;
      if (item.category === 'Snack') managementSnackContents.innerHTML += cardTemplate;
    });

    payment.addEventListener('click', this.showPaymentPopup);
  },

  showPaymentPopup() {
    const popupPayment = document.querySelector('.popup-payment');
    const contentInfo = document.querySelector('.content__info');
    const paymentConfiguration = document.createElement('div');
    const paymentId = contentInfo.querySelector('.content__info__header h3');

    popupPayment.innerHTML = '';

    paymentConfiguration.classList.add('payment-configuration');
    paymentConfiguration.innerHTML = `
      <div class="content__info__header configuration">
        <div>
          <h3>Pembayaran</h3>
          <p>2 opsi pembayaran tersedia</p>
        </div>
      </div>
      <div class="payment-configuration__body">
        <p>Metode Bayar</p>
        <div class="payment-configuration__selection">
          <button class="active">QRIS</button>
          <button>Cash</button>
        </div>
      </div>

      <div class="payment-configuration__body__content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png" />
      </div>

      <div class="payment-configuration__footer">
        <button class="payment-configuration__footer__cancel">Batalkan</button>
        <button class"payment-configuration__footer__confirm">Konfirmasi</button>
      </div>
    `;
    
    const contentInfoClone = contentInfo.cloneNode(true);
    const contentInfoCloneHeader = contentInfoClone.querySelector('.content__info__header');
    contentInfoCloneHeader.classList.add('configuration');
    contentInfoCloneHeader.innerHTML = `
      <div>
        <h3>Konfirmasi</h3>
        <p>${paymentId.textContent}</p>
      </div>
      <button>+</button>
    `;

    const cancelPayment = paymentConfiguration.querySelector('.payment-configuration__footer__cancel');

    cancelPayment.addEventListener('click', () => {
      popupPayment.style.top = '-100%';
    });

    const changePaymentButton = paymentConfiguration.querySelectorAll('.payment-configuration__selection button');
    const changeToQrisButton = changePaymentButton[0];
    const changeToCashButton = changePaymentButton[1];

    changeToQrisButton.addEventListener('click', () => {
      const paymentContent = document.querySelector('.payment-configuration__body__content');

      changeToQrisButton.classList.add('active');
      changeToCashButton.classList.remove('active');
      paymentContent.innerHTML = `
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png" />
      `;
    });

    changeToCashButton.addEventListener('click', () => {
      const paymentContent = document.querySelector('.payment-configuration__body__content');

      changeToQrisButton.classList.remove('active');
      changeToCashButton.classList.add('active');
      paymentContent.innerHTML = `
        <div class="payment-configuration__body__content__cash">
          <div class="payment-configuration__body__content__cash__input">
            <label>Total Bayar</label>
            <input placeholder="Masukkan Total Bayar"/>
          </div>
          <div class="payment-configuration__body__content__cash__button">
            <button>0%</button>
            <button>25%</button>
            <button>50%</button>
            <button>100%</button>
          </div>
        </div>
      `;
    });

    popupPayment.style.top = '0';
    popupPayment.append(contentInfoClone, paymentConfiguration);
  },

  createOrderPayDetail(itemName, initialPrice) {
    const orderPayDetail = document.createElement('div');
    const orderPayQuantity = document.createElement('input');
    const orderPayPrize = document.createElement('p');
    const orderPayRemove = document.createElement('button');
    const orderPayNote = document.createElement('input');

    orderPayDetail.setAttribute('data-name', itemName);
    orderPayDetail.classList.add('order-pay__detail');
    orderPayDetail.innerHTML = `
      <img class="order-pay__detail__image" src="https://img.freepik.com/premium-photo/four-meat-pizza-composition-includes-four-types-meat-carbonade-chicken-cervelat-bacon-mozzarella-cheese-tomato-sauce-view-from-white-background-isolated_323569-203.jpg?ga=GA1.1.1872719977.1704454417&semt=ais_hybrid" alt="Healthy noodle" />
      <div>
        <p class="order-pay__detail__title">${itemName}</p>
        <p class="order-pay__detail__subtitle">Rp. ${initialPrice.toLocaleString()}</p>
      </div>
    `;

    orderPayQuantity.classList.add('order-pay__detail__quantity');
    orderPayQuantity.inputMode = 'numeric';
    orderPayQuantity.value = 1;
    orderPayQuantity.min = 1;

    orderPayPrize.classList.add('order-pay__detail__price');
    orderPayPrize.textContent = `Rp ${initialPrice.toLocaleString()}`;

    orderPayQuantity.addEventListener('input', (e) => {
      const quantity = parseInt(e.target.value) || 1;
      const totalPrice = initialPrice * quantity;
      orderPayPrize.textContent = `Rp ${totalPrice.toLocaleString()}`;
    });

    orderPayNote.classList.add('order-pay__detail__note');
    orderPayNote.placeholder = 'Catatan pesanan';

    orderPayRemove.classList.add('order-pay__detail__remove');
    orderPayRemove.innerHTML = '<img src="./Frame 67.svg" />';

    return { orderPayDetail, orderPayQuantity, orderPayPrize, orderPayNote, orderPayRemove };
  },

  addItemToCart(cardElement) {
    const itemName = cardElement.querySelector('.card__info__content__name').textContent;
    const orderPay = document.querySelector('.order-pay');
    const existingItem = orderPay.querySelector(`[data-name="${itemName}"]`);

    if (existingItem) {
      const quantityInput = existingItem.nextElementSibling;
      quantityInput.value = parseInt(quantityInput.value) + 1;
      quantityInput.dispatchEvent(new Event('input'));
    } else {
      const priceAfter = parseInt(cardElement.querySelector('.card__info__price__after').textContent.replace(/\D/g, ''));
      const { orderPayDetail, orderPayQuantity, orderPayPrize, orderPayNote, orderPayRemove, } = this.createOrderPayDetail(itemName, priceAfter);

      orderPay.append(orderPayDetail, orderPayQuantity, orderPayPrize, orderPayNote, orderPayRemove);
    }
  },

  attachAddToCartEvents() {
    const addButtonsToCart = document.querySelectorAll('.card__header__button');
    addButtonsToCart.forEach((button) => {
      button.addEventListener('click', () => {
        const cardElement = button.parentElement.parentElement;
        this.addItemToCart(cardElement);
      });
    });
  },
};

export default Homepage;
