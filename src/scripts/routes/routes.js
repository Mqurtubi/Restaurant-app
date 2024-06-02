import RestaurantItem from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': RestaurantItem,
  '/home': RestaurantItem,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
