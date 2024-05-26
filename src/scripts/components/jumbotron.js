class Jumbtron extends HTMLElement {
  constructor() {
    super();
    this._style = document.createElement("style");
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
    this.innerHTML = "";
  }
  render() {
    this._emptyContent();
    this._updateStyle();

    this.innerHTML += `
    ${this._style.outerHTML}
    <div id="jumbotron">
      <img src="./images/heros/hero-image_1.jpg" width="450" alt="" />
    </div>`;
  }
}
customElements.define("jumbotron-img", Jumbtron);
export default Jumbtron;
