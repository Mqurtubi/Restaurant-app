import { createRestaurantListTemplate } from "../views/templates/templatesRestaurants";

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this._restaurant = {
      id: "id",
      name: "nama",
      description: "deskripsi",
      pictureId: "picture",
      city: "kota",
      rating: 0,
    };
    this._style = document.createElement("style");
  }

  setRestaurant(value) {
    this._restaurant = value;
    this.render();
  }

  _emptyContent() {
    this.innerHTML = "";
  }

  _updateStyle() {
    this._style.textContent = `
      restaurant-item {
        border-radius: 15px;
        overflow: hidden;
        position: relative;
        box-shadow: 0px 0px 8px 4px rgba(62, 66, 66, 0.12);
      }
      restaurant-item .tempat {
        position: absolute;
        top: 40px;
        padding: 10px 20px;
        background-color: #8c625b;
        color: white;
        border-radius: 0 5px 5px 0;
      }
      restaurant-item .rating {
        font-weight: bold;
        font-size: 20px;
      }
      restaurant-item .rating span {
        font-weight: bold;
        font-size: 20px;
      }
      restaurant-item .judul a{
        font-size: 24px;
        padding-block: 7px;
        text-decoration:none;
        color: black;
        display:inline-block;
        padding:22px;
        transition:all 0.2s ease-in-out;
      }
      restaurant-item .judul a:hover {
        color:#FF9F66;
      }
      restaurant-item .restaurant-img {
        text-align: center;
      }
      restaurant-item .restaurant-img img {
        width: 100%;
      }
      restaurant-item .restaurant-deskripsi {
        padding: 10px 20px;
      }
      restaurant-item .restaurant-deskripsi p{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5; /* number of lines to show */
      -webkit-box-orient: vertical;
      }`;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this.innerHTML = `
      ${this._style.outerHTML}
      ${createRestaurantListTemplate(this._restaurant)}`;
  }
}

customElements.define("restaurant-item", RestaurantItem);
