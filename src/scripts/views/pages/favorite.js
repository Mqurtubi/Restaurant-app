import FavoriteRestaurantIdb from '../../data/favorite-restaurant';

const Favorite = {
  async render() {
    return `
            <h2>Restaurant Favorite</h2>
            <restaurant-list></restaurant-list>
        `;
  },
  async afterRender() {
    (async () => {
      const data = await FavoriteRestaurantIdb.getAllRestaurants();
      const restaurantList = document.querySelector('restaurant-list');
      restaurantList.setRestaurantList(data);
      console.log(data);
    })();
  },
};
export default Favorite;
