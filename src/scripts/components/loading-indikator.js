import { animate, stagger } from "motion";
class Loading extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement("style");
  }
  connectedCallback() {
    this.render();
    this._animasiLoading();
  }
  _updateStyle() {
    this._style.textContent = `
    #loading {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom:-1200px;
      right: 46%;
      background-color:transparent;
    }
    
    .segment {
      opacity: 0;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px){
      #loading{
        right: 40.5%;
      }
    }
    @media only screen and (max-width: 767px){
      #loading{
        right: 28.5%;
      }
    }`;
  }
  _emptyContent() {
    this.innerHTML = ``;
  }
  _animasiLoading() {
    const numSegments = document.querySelectorAll(".segment").length;
    const offset = 0.09;

    setTimeout(() => {
      animate(
        ".segment",
        { opacity: [0, 1, 0] },
        {
          offset: [0, 0.1, 1],
          duration: numSegments * offset,
          delay: stagger(offset),
          repeat: Infinity,
        }
      );
    }, 1000);
  }
  render() {
    this._updateStyle();
    this._emptyContent();
    this.innerHTML += `
    ${this._style.outerHTML}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="loading"
        width="200"
        height="200"
      >
        <g class="segment">
          <path
            id="loading-path"
            d="M 94 25 C 94 21.686 96.686 19 100 19 L 100 19 C 103.314 19 106 21.686 106 25 L 106 50 C 106 53.314 103.314 56 100 56 L 100 56 C 96.686 56 94 53.314 94 50 Z"
          ></path>
        </g>
        <g class="segment">
          <use
            href="#loading-path"
            style="transform: rotate(45deg); transform-origin: 100px 100px"
          />
        </g>
        <g class="segment">
          <use
            href="#loading-path"
            style="transform: rotate(90deg); transform-origin: 100px 100px"
          />
        </g>
        <g class="segment">
          <use
            href="#loading-path"
            style="transform: rotate(135deg); transform-origin: 100px 100px"
          />
        </g>
        <g class="segment">
          <use
            href="#loading-path"
            style="transform: rotate(180deg); transform-origin: 100px 100px"
          />
        </g>
        <g class="segment">
          <use
            href="#loading-path"
            style="transform: rotate(225deg); transform-origin: 100px 100px"
          />
        </g>
        <g class="segment">
          <use
            href="#loading-path"
            style="transform: rotate(270deg); transform-origin: 100px 100px"
          />
        </g>
        <g class="segment">
          <use
            href="#loading-path"
            style="transform: rotate(315deg); transform-origin: 100px 100px"
          />
        </g>
      </svg>`;
  }
}
customElements.define("loading-animasi", Loading);
