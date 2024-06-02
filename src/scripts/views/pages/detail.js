import UrlParser from '../../routes/url-parser';
import RestoData from '../../data/restoData';
import {
  createLikeButtonTemplate,
  createRestaurantDetailTemplate,
  createReviewTemplate,
} from '../templates/templatesRestaurants';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant';

const Detail = {
  async render() {
    return `
        <div id="restaurantDetail"></div>
        <div id="review">
        <h2>Hasil Review</h2>
          <div id="restaurant-review"></div>
        </div>
        <h2>Tambahkan Review</h2>
        <form id="formReview">
            <label>Nama</label></br>
            <input type="text" name="" id="namaReview"></br>
            <label>Komentar</label></br>
            <input type="text" name="" id="pesanReview"></br>
            <input type="submit" value="Kirim">
        </form>
        <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoData.detailRestaurant(url.id);
    console.log(restaurant.customerReviews);

    const restaurantContainer = document.getElementById('restaurantDetail');
    const likeButtonContainer = document.getElementById('likeButtonContainer');
    const restaurantReview = document.getElementById('restaurant-review');

    const form = document.getElementById('formReview');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
    restaurantReview.innerHTML = createReviewTemplate(
      restaurant.customerReviews,
    );

    form.addEventListener('submit', async (e) => {
      const nama = document.getElementById('namaReview').value;
      const pesan = document.getElementById('pesanReview').value;
      const data = {
        id: url.id,
        name: nama,
        review: pesan,
      };
      try {
        const review = await RestoData.addReview(data);
        restaurantReview.innerHTML = createReviewTemplate(review);
        form.reset();
      } catch (error) {
        console.log(error);
      }
      e.preventDefault();
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
