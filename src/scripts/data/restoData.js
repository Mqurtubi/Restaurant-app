import API_ENDPOINT from "../globals/end-point";
import Swal from "sweetalert2";
class RestoResource {
  static async listRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
      });
    }
  }
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    const responseJson = await response.json();
    console.log(responseJson.restaurant.customerReviews);
    return responseJson.restaurant;
  }
  static async addReview(review) {
    try {
      const response = await fetch(`${API_ENDPOINT.ADD_REVIEW}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
      if (!response.ok) {
        throw new Error(`Gagal menambahkan ulasan: ${response.statusText}`);
      }
      const responseJson = await response.json();
      console.log(responseJson.customerReviews);
      return responseJson.customerReviews;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
      });
    }
  }
}

export default RestoResource;
