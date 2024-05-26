class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this._restaurantList = [];
    this._style = document.createElement("style");
  }
  setRestaurantList(value) {
    this._restaurantList = value;

    this.render();
  }
  _updateStyle() {
    this._style.textContent = `
    restaurant-list{
        display: grid;
        background-color: $accent;
        border-radius: 10px;
        padding: 55px 40px;
        gap: 20px;
        width: 65%;
        justify-content: center;
        margin: auto;
        -webkit-box-shadow: 0px 0px 7px 4px rgba(62, 66, 66, 0.26);
        -moz-box-shadow: 0px 0px 7px 4px rgba(62, 66, 66, 0.26);
        box-shadow: inset 0px 0px 7px 4px rgba(62, 66, 66, 0.26);
        grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
    }
    @media screen and (max-width:1450px){
      restaurant-list{
        width:80%;
    }
    }
    @media screen and (max-width:1200px){
        restaurant-list{
            padding: 55px 10px;
            width:90%;
        }
    }
    @media screen and (max-width:700px){
      restaurant-list{
        padding:55pzx 0;
        grid-template-columns: repeat(auto-fit,250px)
      }
    }
    @media screen and (max-width:580px){
        restaurant-list{
            padding:55px 0;
            width:100%;
            grid-template-columns: repeat(auto-fit,90%)
        }
    }`;
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this._updateStyle();

    const restaurantItemELements = this._restaurantList.map((item) => {
      const restaurant = document.createElement("restaurant-item");
      restaurant.setRestaurant(item);
      return restaurant;
    });
    this.innerHTML = "";
    this.append(this._style, ...restaurantItemELements);
  }
}
customElements.define("restaurant-list", RestaurantList);
