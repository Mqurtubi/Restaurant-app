import CONFIG from "../../globals/CONFIG";

const createRestaurantListTemplate = (restaurant) => `
    <p class="tempat">${restaurant.city}</p>
    <div class="restaurant-img">
        <img loading="lazy" src="${CONFIG.BASE_IMAGE_URL.MEDIUM(
          restaurant.pictureId
        )}"
        alt="gambar restauran ${restaurant.name}"/>
    </div>
    <div class="restaurant-deskripsi">
        <p class="rating">Rating <span>${restaurant.rating}</span></p>
        <p class="judul"><a href="/#/detail/${restaurant.id}">${
  restaurant.name
}</a></p>
        <p class="deskripsi">
        ${restaurant.description}</p>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div id="restaurant-content-1">
    <div class="restaurant-img">
    <img src="${CONFIG.BASE_IMAGE_URL.SMALL(restaurant.pictureId)}"
    alt="gambar restauran ${restaurant.name}"/>
    </div>
    <div class="restaurant-deskripsi">
    <p class="judul">${restaurant.name}</p>
    <p class="tempat">Kota :${restaurant.city}</p>
    <p class="alamat">Alamat : ${restaurant.address}</p>
    <p class="rating">Rating : <span>${restaurant.rating}</span></p>
    <p class="deskripsi">
    ${restaurant.description}</p>
    </div>
</div>
<div id="restaurant-content-2">
    <div class="menu">
        <div class="makanan-menu">
        <h2 class="judul-menu">Menu Makanan</h2>
        <ul>${restaurant.menus.foods
          .map(
            (food) => `
        <li>${food.name}</li>`
          )
          .join(" ")}
          </ul>
        </div>
        <div class="minuman-menu">
        <h2 class="judul-menu">Menu Minuman</h2>
        <ul>${restaurant.menus.drinks
          .map(
            (drink) => `
        <li>${drink.name}</li>`
          )
          .join(" ")}</ul>
        </div>
    </div> 
</div>
`;
const createReviewTemplate = (reviews) => {
  return reviews
    .map(
      (review) =>
        `<div class="reviews">
      <p class="name">${review.name}</p>
      <p class="reviewText">${review.review}</p>
      <p class="date">${review.date}</p>
    </div>`
    )
    .join(" ");
};

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;
const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;
export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
};
