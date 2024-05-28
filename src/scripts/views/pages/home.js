import RestoResource from "../../data/restoData";
import "../../components/restaurant-list.js";
import "../../components/restaurant-item.js";
import "../../components/jumbotron.js";
const RestaurantItem = {
  async render() {
    return `
    <jumbotron-img></jumbotron-img>
    <h2>What is Cafe Hunger ?</h2>
      <div id="aboutCafe">
        <div id="deskripsi">
          <p>"informasi yang menawarkan penjelasan mendalam tentang beragam kafe di seluruh Indonesia. Dari kopi lokal yang khas hingga atmosfer yang unik, kami membahas ragam kafe yang menjadi destinasi populer bagi para pecinta kopi dan penggemar kuliner di seluruh negeri."</p>
        </div>
        <div id="gambar">
          <img src="./images/cafe_kartun.png" alt="gambar kartun cafe">
        </div>
      </div>
      <h2>Explore Restaurant</h2>
    <restaurant-list style="display:none" id="list"></restaurant-list>
    <loading-animasi></loading-animasi>
    
        `;
  },
  async afterRender() {
    (() => {
      setTimeout(async () => {
        const loading = document.querySelector("loading-animasi");
        loading.style.display = "none";
        const data = await RestoResource.listRestaurant();
        const restaurantList = document.querySelector("restaurant-list");
        restaurantList.style.display = "grid";
        restaurantList.setRestaurantList(data);
        console.log(data);
      }, 5000);
    })();
  },
};
export default RestaurantItem;
