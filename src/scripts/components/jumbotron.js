class Jumbtron extends HTMLElement {
  constructor() {
    super();
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
    #jumbotron img{
        width: 100%;
    }
    #jumbotron{
        text-align:center;
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  _emptyContent() {
    this.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this.innerHTML += `
    ${this._style.outerHTML}
    <div id="jumbotron">
    <picture>
    <!-- Versi gambar untuk layar seluler -->
    <source media="(max-width: 768px)" srcset="./images/heros/hero-image_1_mobile.jpg">
  
    <!-- Versi gambar untuk desktop -->
    <source media="(min-width: 769px)" srcset="./images/heros/hero-image_1_desktop.jpg">
  
    <!-- Gambar default (fallback) -->
    <img loading="lazy" src="./images/heros/hero-image_1.jpg" alt="Hero Image">
  </picture>
    </div>`;
  }
}
customElements.define('jumbotron-img', Jumbtron);
export default Jumbtron;
