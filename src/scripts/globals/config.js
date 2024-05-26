const CONFIG = {
  BASE_URL: "https://restaurant-api.dicoding.dev",
  BASE_IMAGE_URL: {
    SMALL: (imageId) =>
      `https://restaurant-api.dicoding.dev/images/small/${imageId}`,
    MEDIUM: (imageId) =>
      `https://restaurant-api.dicoding.dev/images/medium/${imageId}`,
    LARGE: (imageId) =>
      `https://restaurant-api.dicoding.dev/images/large/${imageId}`,
  },
  KEY: "12345",
  DATABASE_NAME: "restaurant-catalogue-database",
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: "restaurant",
};
export default CONFIG;
