import { settingRoutes } from "../../../routes/routes";
import UrlParser from "../../../routes/url-parser";

const Setting = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Settings</h2>
        <div class="content__setting">
          <nav class="content__setting__navigation">
            <ul>
              <li>
                <a href="#/setting/kelola-produk" data-url="kelola-produk">
                  <div class="content__setting_navigation__icon">
                    <img src="" />
                  </div>
                  <div class="content__setting__navigation__info">
                    <h3>Kelola Produk</h3>
                    <p>Kelola Produk, Harga, Ketersediaan, dll.</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#/setting/kelola-diskon" data-url="kelola-diskon">
                  <div class="content__setting_navigation__icon">
                    <img src="" />
                  </div>
                  <div class="content__setting__navigation__info">
                    <h3>Kelola Diskon</h3>
                    <p>Kelola Diskon Pelanggan</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#/setting/kelola-printer" data-url="kelola-printer">
                  <div class="content__setting_navigation__icon">
                    <img src="" />
                  </div>
                  <div class="content__setting__navigation__info">
                    <h3>Kelola Printer</h3>
                    <p>Tambah atau hapus printer</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#/setting/kelola-pajak" data-url="kelola-pajak">
                  <div class="content__setting_navigation__icon">
                    <img src="" />
                  </div>
                  <div class="content__setting__navigation__info">
                    <h3>Kelola Pajak</h3>
                    <p>Kelola pajak 10 atau 11%</p>
                  </div>
                </a>
              </li>
            </ul>
          </nav>

          <div class="content__setting__management"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const settingManagement = document.querySelector('.content__setting__management');

    const activeVerb = url.verb || 'kelola-diskon';
    const page = settingRoutes[activeVerb];

    if (page) {
      settingManagement.innerHTML = await page.render();
      await page.afterRender();
    }

    this._updateActiveNavigation(activeVerb);
  },

  _updateActiveNavigation(activeVerb) {
    const navLinks = document.querySelectorAll('.content__setting__navigation ul li');
    navLinks.forEach((link) => {
      if (link.querySelector('a').getAttribute('data-url') === activeVerb) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },
};

export default Setting;
