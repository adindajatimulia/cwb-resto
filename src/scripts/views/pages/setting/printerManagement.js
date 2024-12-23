import { createAddCard } from "../../templates/template-creator";

const PrinterManagement = {
  async render() {
    return `
      <h3>Kelola Printer</h3>
      <div class="management">
        <nav class="management__navigation">
          <div class="management__navigation__tabs printer">
            <input type="radio" id="service" name="tabs" checked>
            <label for="service">Wifi / LAN</label>
            
            <input type="radio" id="tax" name="tabs">
            <label for="tax">Bluetooth</label>
          </div>
        </nav>

        <div class="management__contents">
          <div class="management__contents__1"></div>
        </div>
      </div>

      <div class="popup-add-card">
        <div class="popup-add-card__content">
          <div class="popup-add-card__content__header">
            <div class="popup-add-card__content__header">
              <button>x</button>
            </div>
            <h4>Tambah Printer</h4>
          </div>

          <div class="popup-add-card__content__form">
            <div class="popup-add-card__content__form__input">
              <label>Nama Printer</label>
              <input placeholder="Masukkan Nama Printer"/>
            </div>

            <div class="popup-add-card__content__form__input">
              <label>Alamat IP</label>
              <input placeholder="Masukkan Alamat IP"/>
            </div>

            <div class="popup-add-card__content__form__input">
              <label>Ukuran Struk</label>
              <div class="popup-add-card__content__form__input__presentage__tax">
                <input />
                <p> > </p>
              </div>
            </div>

            <label class="popup-add-card__content__form__input__checkbox">
              <div class="popup-add-card__content__form__input__checkbox__label">
                <p>Potong struk setelah selesai cetak</p>
                <p>hanya aktifkan jika printer kamu support</p>
              </div>
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <label class="popup-add-card__content__form__input__checkbox">
              <div class="popup-add-card__content__form__input__checkbox__label">
              <p>Buka laci setelah selesai cetak</p>
              <p>hanya aktifkan jika printer kamu support</p>
              </div>
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div class="popup-add-card__content__footer">
            <button>Simpan Diskon</button>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const managementServiceContents = document.querySelector('.management__contents__1');
    const popupAddDiscount = document.querySelector('.popup-add-card');
    const closePopupAddDiscount = popupAddDiscount.querySelector('button');
    const addServicetButton = createAddCard(popupAddDiscount);

    managementServiceContents.prepend(addServicetButton);

    closePopupAddDiscount.addEventListener('click', () => popupAddDiscount.style.top = '-100%');
  },
};

export default PrinterManagement;
