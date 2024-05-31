import { itActsAsFavoriteRestaurantModel } from "./contracts/favoriteRestaurantContract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant";

describe("Favorite Favorite Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(
      async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      }
    );
  });
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
